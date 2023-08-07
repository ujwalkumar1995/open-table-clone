'use client'
import { useState } from 'react';
import { partySize as partySizes, times } from '../../data'
import Datepicker from 'react-datepicker'
import useAvailabilities from '../../hooks/useAvailabilities';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { Time, convertToDisplayTime } from '../../utilities/convertToDisplayTime';

const ReservationCard = ({openTime, closeTime, slug}: {openTime: string, closeTime: string, slug: string}) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const {data, loading, error, fetchAvailabilities} = useAvailabilities();
    const [time, setTime] = useState(openTime);
    const [partySize, setPartySize] = useState(1);
    const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

    const handleChangeDate = (date: Date | null) => {
        if (date) {
            setDay(date.toISOString().split("T")[0]);
            return setSelectedDate(date);
        }
        return setSelectedDate(null);
    }

    const filterTimesByRestaurantOpenWindow = () => {
        const timesWithInWindow: typeof times = [];

        let isWithinWindow = false;
        times.forEach(time => {
            if (time.time === openTime){
                isWithinWindow = true;
            }
            if (isWithinWindow){
                timesWithInWindow.push(time);
            }
            if (time.time === closeTime){
                isWithinWindow = false;
            }
        })
        return timesWithInWindow;
    }

    const handleClick = () => {
        fetchAvailabilities({
            slug,
            day,
            time,
            partySize
        })
    }
  return (
    <div className='bg-white rounded p-3 shadow'>
        <div className='text-center border-b pb-2 font-bold'>
        <h4 className='text-lg'>
            Make a reservation
        </h4>
        </div>
        <div className='my-3 flex flex-col'>
            <label htmlFor=''>Party size</label>
            <select name='' value={partySize} onChange={(e) => setPartySize(parseInt(e.target.value))} className='py-3 border-b font-light' id=''>
                {partySizes.map(size => {
                    return <option key={size.value} value={size.value}>{size.label}</option>
                })}
            </select>
        </div>
        <div className='flex justify-between'>
            <div className='flex flex-col w-[40%]'>
                <label htmlFor=''>
                    Date
                </label>
                <Datepicker 
                    selected={selectedDate}    
                    className='py-3 border-b font-light text-reg w-24' 
                    onChange={handleChangeDate}
                    dateFormat='MMMM d'
                    wrapperClassName='w-[48%]'
                    />
            </div>
            <div className='flex flex-col w-[40%]'>
                <label htmlFor=''>
                    Time
                </label>
                <select name='' id='' onChange={(e) => setTime(e.target.value)} value={time} className='py-3 border-b font-light'>
                    {
                        filterTimesByRestaurantOpenWindow().map(time => 
                            <option key={time.time} value={time.time}>{time.displayTime}</option>
                        )
                    }
                </select>
            </div>
        </div>
        <div className='mt-5'>
            <button 
                className='bg-red-600 rounded w-full px-4 text-white font-bold h-16'
                onClick={handleClick}
                >
                {loading ? <CircularProgress color='inherit'/> : 'Find a Time'}
            </button>
        </div>
        {(data && data.length) ? 
        <div className='mt-4'>
            <p className='text-reg'>Select a time</p>
            <div className='flex flex-wrap mt-2'>
            {data.map((time) => {
              return time.available ? (
                <Link
                  href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                  className="bg-red-600 cursor-pointer p-2 w-24 text-center text-white mb-3 rounded mr-3"
                >
                  <p className="text-sm font-bold">
                    {convertToDisplayTime(time.time as Time)}
                  </p>
                </Link>
              ) : (
                <p className="bg-gray-300 p-2 w-24 mb-3 rounded mr-3"></p>
              );
            })}
            </div>
        </div> : 
        null}
    </div>
  )
}

export default ReservationCard