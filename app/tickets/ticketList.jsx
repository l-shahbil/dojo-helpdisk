import Link from "next/link";


async function getTickets() {
    const response = await fetch("http://localhost:4000/tickets",{
        next:{
            revalidate:30
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch tickets');
    }
    return response.json();
    
}

export  default  async function TicketList() {
    const tikets =await getTickets()
  return (
   <>
   {tikets.map((ticket)=>(
    <div key={ticket.id} className='card my-5'>
        <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0,200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </Link>
    </div>
   ))}
   {tikets.length === 0 &&
   <div className='text-center'>There are no open tickets,yay!</div>}
   </>
  )
}
