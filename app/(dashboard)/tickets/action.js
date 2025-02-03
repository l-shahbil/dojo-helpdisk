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

    revalidatePath("/tickets")
    redirect("/tickets")
}