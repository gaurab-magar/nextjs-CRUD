import Link from 'next/link';
import React from 'react';
import Image from "next/image"; 


export const EventItem = (props) => {
    const {title,image,date,location,id} = props;
    const redeableDate = new Date(date).toLocaleString('en-US',{ 
         month: 'long',
         day: 'numeric',
         year: 'numeric'
    });  
    const formattedAddress = location.replace(',','\n');
    // const exploreLink = `events/${id}`;
  return (
    <div className='border m-4 p-4 w-fit'>
        <li>
          <div>
            <Image src={`/images/${image}`} alt={title} height="100" width="300" className='rounded' />
          </div>
            <div>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <time className='text-xs'>{redeableDate}</time>
                <address className='text-zinc-500'>{formattedAddress}</address>
                {/* <Link to='/'>Explore Events</Link> */}
            </div>
        </li>
    </div>
  )
}
export default EventItem;
