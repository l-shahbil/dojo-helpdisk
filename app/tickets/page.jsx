import React from 'react'
import TicketList from './ticketList'

export default function Tickets() {
  return (
    <main>
      <nav>
        <h2>Tickets</h2>
        <p><small>Currently Open Tickets.</small></p>
      </nav>
      <TicketList />
    </main>
  )
}
