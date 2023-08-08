import { NextApiRequest, NextApiResponse } from "next";
import { times } from "../../../../data";
import { PrismaClient } from "@prisma/client";
import { findAvailableTables } from "../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'GET'){
        const { slug, day, time, partySize } = req.query as {
            slug: string,
            day: string,
            time: string,
            partySize: string
        }
    
        if (!day || !time || !partySize || !slug){
            return res.status(400).json({errorMessage: 'Invalid data provided'});
        }
    
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                slug
            },
            select: {
                tables: true,
                open_time: true,
                close_time: true
            }
        });
    
        if (!restaurant){
            return res.status(400).json({errorMessage: 'Invalid data provided'});
        }
    
        const searchTimesWithTables = await findAvailableTables({
            res, day, time, restaurant
        });
    
        if (!searchTimesWithTables){
            return res.status(400).json({errorMessage: 'Invalid data provided'});
        }
    
        const availabilities = searchTimesWithTables.map(t => {
            const sumSeats = t.tables.reduce((sum, table) => {
                return sum += table.seats;
            }, 0)
    
            return {
                time: t.time,
                available: sumSeats >= parseInt(partySize, 10)
            }
        }).filter(availability => {
            const timeIsAfterOpeningHours = new Date(`${day}T${availability.time}`) >= new Date(`${day}T${restaurant.open_time}`);
            const timeIsBeforeClosingHours = new Date(`${day}T${availability.time}`) <= new Date(`${day}T${restaurant.close_time}`);
    
            return timeIsAfterOpeningHours && timeIsBeforeClosingHours;
        })
    
        return res.json(availabilities);
    }
}