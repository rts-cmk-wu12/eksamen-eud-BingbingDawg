// taget fra terminsprøve
"use client";


import { ClipLoader } from "react-spinners";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import signinAction from "@/actions/sign-in";

export default function SigninFormular(){
    const [formState, formAction, isPending] = useActionState(signinAction, {});

    useEffect(function() {
        if(formState?.success) {
            toast.success("You're now signed in")
        }
    }, [formState]);

    return isPending ? (
        <ClipLoader
        color="#EAEAEA"
        loading={true}
        />
    ) : (
        <form action={formAction} className=" mx-auto mt-[91px] mb-[91px]  border w-[320px] p-6 rounded-sm ">
                
                <div className="flex flex-col gap-[24px]">
                    <label>
                        Email
                        <input type="email" name="email" placeholder="email" className=" mt-[8px] mb-[24px] rounded-[8px] p-[8px] label-border w-full" />
                        <p>{formState?.properties?.email?.errors}</p>
                    </label>
                </div>
             
                <div className=" flex flex-col gap-[24px]">
                    <label>
                        Password
                        <input type="password" name="password" placeholder="password" className="mt-[8px] mb-[24px] rounded-[8px] p-[8px] w-full label-border" />
                        <p>{formState?.properties?.password?.errors}</p>
                    </label>
                </div>

                <button className="  self-center z-10 px-[70px] w-full py-[12px] rounded-[10px] bg-[var(--button-color-1)] text-[var(--white-text)]" type="submit">Sign in</button>
                <p>{formState?.errors}</p>
        
            </form>
    )
}