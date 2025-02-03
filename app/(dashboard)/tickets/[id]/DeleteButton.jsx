"use client"
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'
import {TiDelete} from 'react-icons/ti'
import { deleteTicket } from '../action';

export default function DeleteButton({id}) {
    const router = useRouter()
    const [isPending,startTransition] = useTransition()

  return (
    <button 
    className='btn-primary'
    onClick={()=> startTransition(()=> deleteTicket(id))}
    disabled={isPending}
    >
    {isPending && (
        <>
            <TiDelete />
            Deleting...
        </>
    )}
    {!isPending && (
        <>
            <TiDelete />
            Delete Ticket
        </>
    )}
    </button>
)
}
