"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export async function addTicket(fromData) {
    const ticket = Object.fromEntries(fromData);

    const supabase = createServerActionClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession();

    const { error } = await supabase.from("Tickets")
        .insert({
            ...ticket,
            user_email: session.user.email,
        })

    if (error) {
        throw new Error("Could not add the new ticket")
    }

    revalidatePath("/tickets")
    redirect("/tickets")
}

export async function deleteTicket(id) {
    const supabase = createServerActionClient({ cookies });

    const { error } = await supabase.from("Tickets")
        .delete()
        .eq("id", id)

    if (error) {
        throw new Error("Could not delete the ticket")
    }

    revalidatePath("/tickets")
    redirect("/tickets")
}