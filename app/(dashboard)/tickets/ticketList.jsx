import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";


async function getTickets() {
    // await new Promise((resolve)=> setTimeout(resolve,3000))
    const supabase = createServerComponentClient({cookies});
    const {data,error} =await supabase.from('Tickets').select()

    if(error){
        console.log(error.message)
    }
    return data
    
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
