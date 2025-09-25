// taget fra repitation

"use client";

import CreateKageperson from "@/actions/create-kageperson";
import { useActionState, useEffect, useState } from "react";

export default function CreateUserForm() {
    const [formState, formAction, isPending] = useActionState(CreateUser)
    const [slug, setSlug] = useState("");
    
    useEffect(function() {
        console.log(formState)
    }, [formState])

    function slugGenerator(event) {
        const form = event.target.form;
        const firstname = form.firstname.value;
        const lastname = form.lastname.value;

        setSlug(`${firstname}-${lastname}` .toLowerCase().replaceAll(" ", "-"));
    }

    return (
        <form action={formAction}>
            <div>
                <label>
                    <span >Email: </span>
                    <input className="border-black border-2" type="email" name="email"  defaultValue={formState?.data?.email}/>
                    <input className="border-black border-2" type="text" name="slug" readOnly value={slug}/>
                </label>
            </div>
            <div>
                <label>
                    <span >Dej: </span>
                    <input className="border-black border-2" type="text" name="firstname" onChange={slugGenerator} defaultValue={formState?.data?.dough} />
                </label>
            </div>
            <div>
                <label>
                    <span>topping: </span>
                    <input className="border-black border-2" type="text" name="lastname" onChange={slugGenerator} defaultValue={formState?.data?.topping} />
                </label>
            </div>
            <div>
                <label>
                    <span>Pris: </span>
                    <input className="border-black border-2" type="text" name="price" defaultValue={formState?.data?.price} />
                </label>
            </div>
            <button type="submit">opret</button>
        </form>
    )
}