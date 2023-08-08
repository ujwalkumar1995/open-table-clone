import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST'){
        const { slug, day, time, partySize } = req.query as {slug: string, day: string, time: string, partySize: string};

        const {bookerEmail, bookerPhone, bookerFirstName, bookerLastName, bookerOccasion, bookerRequest} = req.body;
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                slug
            },
            select: {
                tables: true,
                open_time: true,
                close_time: true,
                id: true
            }
        })

        if (!restaurant) {
            return res.status(400).json({errorMessage: 'Invalid data provided'});
        }

        if (new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) 
        || new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)) {
            return res.status(400).json({
                errorMessage: 'Restaurant does not open at this time'
            });
        }

        const searchTimesWithTables = await findAvailableTables({
            res, day, time, restaurant
        });

        if (!searchTimesWithTables){
            return res.status(400).json({errorMessage: 'Invalid data provided'});
        }

        const searchTimeWithTable = searchTimesWithTables.find(t => {
            return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
        })

        if (!searchTimeWithTable){
            return res.status(400).json({errorMessage: 'No availability, cannot book'});
        }

    

        const tablesCount: {
            2: number[],
            4: number[]
        } = {
            2: [],
            4: []
        }

        searchTimeWithTable.tables.forEach((table) => {
            if (table.seats === 2) {
                tablesCount[2].push(table.id);
            }
            else {
                tablesCount[4].push(table.id);
            }
        });

        const tablesToBooks: number[] = [];
        let seatsRemaining = parseInt(partySize);

        while (seatsRemaining > 0) {
            if (seatsRemaining >= 3){
                if (tablesCount[4].length){
                    tablesToBooks.push(tablesCount[4][0]);
                    tablesCount[4].shift();
                    seatsRemaining -= 4;
                } else {
                    tablesToBooks.push(tablesCount[2][0]);
                    tablesCount[2].shift();
                    seatsRemaining -= 2;
                }
            } else {
                if (tablesCount[2].length){
                    tablesToBooks.push(tablesCount[2][0]);
                    tablesCount[2].shift();
                    seatsRemaining -= 4;
                } else {
                    tablesToBooks.push(tablesCount[4][0]);
                    tablesCount[4].shift();
                    seatsRemaining -= 4;
                }
            }
        }

        const booking = await prisma.booking.create({
            data: {
                number_of_people: parseInt(partySize),
                booking_time: new Date(`${day}T${time}`),
                booker_email: bookerEmail,
                booker_first_name: bookerFirstName,
                booker_phone: bookerPhone,
                booker_last_name: bookerLastName,
                booker_occasion: bookerOccasion,
                booker_request: bookerRequest,
                restaurant_id: restaurant.id
            }
        });

        const bookingsOnTable = tablesToBooks.map(tableId => {
            return {
                table_id: tableId, booking_id: booking.id
            }
        })

        await prisma.bookingsOnTables.createMany({
            data: bookingsOnTable
        })

        return res.json(booking);
    }
}