// taget fra terminsprøve
"use client";


export default function ContactFormular() {

    return (
        <form className="mx-auto mt-[91px] mb-[91px]  border w-[320px] p-6 rounded-sm ">
            <div className="flex flex-col gap-[24px]">
                <label>
                    Firstname
                    <input type="text" name="firstname" placeholder="firstname" className="rounded-[8px] p-[8px] label-border w-full" />
                </label>
            </div>
            <div className="flex flex-col gap-[24px]">
                <label>
                    Email
                    <input type="email" name="email" placeholder="email" className="rounded-[8px] p-[8px] label-border w-full" />
                </label>
            </div>
            <div className="flex flex-col gap-[24px]">
                <label>
                    Message
                    <textarea className=" rounded-[8px] p-[8px] label-border w-full" name="message" id="" cols="30" rows="10" placeholder="write your message here..."></textarea>
                </label>
            </div>
            <div className=" rounded-[8px] mt-[24px]">
                <label>
                    <input className="mr-[5px]" type="checkbox"></input>
                    Subsribe to newsletter
                </label>
            </div>

            <button className="rounded-[8px] w-full mt-[10px] p-2 text-white bg-[var(--button-color-1)]" type="submit">Submit</button>
        </form>
    )
}