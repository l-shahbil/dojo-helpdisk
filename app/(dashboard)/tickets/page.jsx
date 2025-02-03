import React, { Suspense } from 'react'
import TicketList from './ticketList'
import Loading from '../loading'


export const metadata = {
  title: 'Dojo Helpdisk | Tickets',
}

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
        <h2>Tickets</h2>
        <p><small>Currently Open Tickets.</small></p>
        </div>
        <Link href="/tickets/create" className="ml-auto">
        <button className='btn-primary'>New Ticket</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
          <TicketList />
      </Suspense>
    </main>
  )
}
