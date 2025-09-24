import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent(){
    return(
        <header className="flex justify-between border-b-[1px]">

            <Link href="/"><Image src="/logo.svg" className="w-auto h-[40px]" height={300} width={300} alt="" priority/></Link>
            <div className="flex items-center gap-[1rem] ">
                <Link href="/" className="capitalize ">listings</Link>
                <Link href="" className="capitalize">community</Link>
                <Link href="/contact" className="capitalize">contact</Link>
                <Link className="h-[32px] border w-[83px] bg-[var(--button-color-2)] text-center items-center content-center" href="/sign-in">Sign in</Link>
                <Link href="" className="h-[32px]  border w-[83px] bg-[var(--button-color-1)] text-center items-center content-center capitalize"> register</Link>
            </div>
        </header>
    )
}