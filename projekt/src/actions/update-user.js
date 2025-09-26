// taget fra repitaion

"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import z, { success } from "zod";

export default async function updateUser(prevState, formData) {
    const{id, email, firstname, lastname, password } = Object.fromEntries(formData)
   

    const schema = z.object({
        email: z.string().min(1, {message: "Navn skal udfyldes"}),
        firstname: z.string().min(1, {message: "You need to fill out a firstname"}),
        lastname: z.string().min(1, {message: "You need to fill out a lastname"}),
        id: z.string().min(1, {message: "An error occurred, try closing and re-opening the tap"})
        })

        const validated = schema.safeParse({
            email, firstname, lastname, password, id
        });

        if (!validated.success) return {
            ...validated,
            ...(z.treeifyError(validated.error))
        }


    const cookieStore = await cookies();
    const access_token = cookieStore.get("usertokenid")
    
    const response = await fetch("http://localhost:4000/users/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + access_token.value
        },
        body: JSON.stringify({
            email: validated.data.email,
            password: validated.data.password,
            firstname: validated.data.firstname,
            lastname: validated.data.lastname
            
        })
    })
    .then(response => console.log(response))
  .catch(err => console.error(err));

   if (response.status !== 200) return {
           success: false,
           errors: ["Something went wrong, try again"]
       }
       
   
       revalidatePath("http://localhost:3000/profile"); // runs fetch again
   
       return validated;

}