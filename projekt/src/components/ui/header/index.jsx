import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent(){
    return(
        <header className="flex justify-between border-b-[1px]">

            <Image src="/logo.svg" height={135} width={135} alt="" priority/>
            <div className="flex items-center gap-[1rem]">
                <Link href="" className="capitalize ">listings</Link>
                <Link href="" className="capitalize">community</Link>
                <Link href="" className="capitalize">contact</Link>
                <Link href="/sign-in">Sign in</Link>
                <Link href="" className="capitalize"> register</Link>
            </div>
        </header>
    )
}