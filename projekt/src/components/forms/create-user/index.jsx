// taget fra repitation

"use client";


import CreateUser from "@/actions/create-user";
import { useActionState, useEffect} from "react";

export default function CreateUserForm() {
    const [formState, formAction, isPending] = useActionState(CreateUser)
    
    useEffect(function() {
        console.log(formState)
    }, [formState])


    return ( isPending ? <p>...Loading</p> :
        
        <form action={formAction} className=" mx-auto mt-[91px] mb-[91px]  border w-[320px] p-6 rounded-sm ">
            <div className="flex flex-col gap-[24px]">
                <label>
                    <span >Email: </span>
                    <input className=" mt-[8px] mb-[2px] rounded-[8px] p-[8px] label-border w-full" type="email" name="email"  defaultValue={formState?.data?.email} />
                    <p className="mb-[10px]">{formState?.properties?.email?.errors}</p>
                </label>
            </div>
            <div className="flex flex-col gap-[24px]">
                <label>
                    <span >Firstname: </span>
                    <input className=" mt-[8px] mb-[2px] rounded-[8px] p-[8px] label-border w-full" type="text" name="firstname" defaultValue={formState?.data?.firstname} />
                    <p className="mb-[10px]">{formState?.properties?.firstname?.errors}</p>
                </label>
            </div>
            <div className="flex flex-col gap-[24px]">
                <label>
                    <span>Lastname: </span>
                    <input className=" mt-[8px] mb-[2px] rounded-[8px] p-[8px] label-border w-full" type="text" name="lastname" defaultValue={formState?.data?.lastname} />
                    <p className="mb-[10px]">{formState?.properties?.lastname?.errors}</p>
                </label>
            </div>
            <div className="flex flex-col gap-[24px]">
                <label>
                    <span>Password: </span>
                    <input className=" mt-[8px] mb-[2px] rounded-[8px] p-[8px] label-border w-full" type="password" name="password" defaultValue={formState?.data?.password} />
                    <p className="mb-[10px]">{formState?.properties?.password?.errors}</p>
                </label>
            </div>
            <button type="submit">opret</button>
        </form>
    )
}