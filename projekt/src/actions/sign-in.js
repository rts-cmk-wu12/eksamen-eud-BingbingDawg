//lånt fra terminsprøvenen og repitation

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";


export default async function signinAction(prevState, formData){
    const cookieStore = await cookies();
    const { email, password } = Object.fromEntries(formData);

    const schema = z.object({
        email: z.string().min(1, { message: "Email is required"}),
        password: z.string().min(1, { message: "Password is required"})
    })

    const isValidated = schema.safeParse({
        email, 
        password
    })
    
    if(!isValidated.success)
        return {
        ...isValidated,
        ...z.treeifyError(isValidated.error),
        data: {
            email,
            password
        }
        }

     
    
    const response = await fetch (`http://localhost:4000/auth/token`, {
        method: "POST",
        headers: {
            "Content-Type":  "application/json"
        },
        body: JSON.stringify({
                email: isValidated.data.email,
                password: isValidated.data.password
        })
    });
   

  

    if (!response.ok) return {
		success: false,
		errors: ["Email or password is wrong"],
		data: {
			email,
			password
		}
	};
    const json = await response.json()

    
    
    if (!json) return {
      success: false,
      errors: ["Email or password is wrong"]
  }
  if (json.password === isValidated.data.password) {
      const cookieStore = await cookies();
      cookieStore.set("usertoken", "You're now logged in", {validUntil: 60 * 30 })
  }
  
       cookieStore.set({
        name: "usertoken",
        value: json.token,
        validUntil: 60 * 60 * 24 * 30,
        path: "/",
		secure: true
    })
       cookieStore.set({
        name: "usertokenid",
        value: json.userId,
        validUntil: 60 * 60 * 24 * 30 
    })

    
    return {
        success: true,
		data: {
            email,
			password
		}
	};
    
}