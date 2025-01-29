import React from 'react'

async function getTicket(id) {
    const response = await fetch("http://localhost:4000/tickets/"+id,{
        next:{
            revalidate:30
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch tickets');
    }
    return response.json();
        
}

export default async function TicketDetails({params}) {
    const param =await params
    const id = param.id
    
    const ticket =await getTicket(id);
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
