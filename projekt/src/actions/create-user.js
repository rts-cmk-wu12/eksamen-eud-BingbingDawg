//taget fra repitation

"use server";

import { revalidatePath } from "next/cache";
import z from "zod";

export default async function CreateUser(prevState, formData) {
    const email = formData.get("email")
    const firstname = formData.get("firstname")
    const lastname = formData.get("lastname")
    const password = formData.get("password")

    const schema = z.object ({
        email: z.string().min(1, {message: "An email is required"}),
        firstname: z.string().min(1, {message: "A name is required"}).max(50, { message: "Maks 50 tegn"}),
        lastname: z.string().min(1, {message: "A lastname is required"}),
        password: z.string().min(1, {message: "A password is required"}),
    })
    const validated = schema.safeParse({
        email,
        firstname,
        lastname,
        password
    });

    if (!validated.success) return{
        ...validated,
        ...(z.treeifyError(validated.error))
}


    const response = await fetch ("http://localhost:4000/api/v1/users", {
headers: {
    "Content-Type": "application/json"
},
method: "POST",
body: JSON.stringify ({
    email: validated.data.email,
    firstname: validated.data.firstname,
    lastname: validated.data.lastname,
    password: validated.data.password
})
    });

    if (response.status !== 201) return {
        success: false,
        errors: ["Something went wrong, try again"]
    }
    if (response.status !== 200) return {
        success: true,
        message: ["User is Created"]
    }

    return await response.json();
}