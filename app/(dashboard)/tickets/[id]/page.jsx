import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { notFound } from 'next/navigation';
import React from 'react'
import { cookies } from 'next/headers';


export const daynamicParams =true

export async function generateMetadata({params}) {
    const supabase = createServerComponentClient({cookies})

    const {data:ticket} = await supabase.from("Tickets")
    .select()
    .eq("id",params.id)
    .single()

    return{
        title:`Dojo Helpdisk | ${ticket?.title || 'Ticket Not Found'}`
    }
    
}

async function getTicket(id) {
    const supabase = createServerComponentClient({cookies})

    const {data} = await supabase.from("Tickets")
    .select()
    .eq("id",id)
    .single()

    if(!data){
        notFound();
    }

    return data;
        
}

export default async function TicketDetails({params}) {
    
    const ticket =await getTicket(params.id);
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>Created By {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
                </div>
        </div>
    </main>
  )
}
