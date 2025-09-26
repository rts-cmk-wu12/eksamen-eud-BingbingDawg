import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function FooterComponent(){
    return(
        <footer className="flex justify-between border-t-[1px] pl-[32px] pr-[32px] pt-[32px] footer-margin bg-white items-center z-10 ">
            <div className="flex-col">

                <Image className="  w-auto h-[40px] mb-[24px]" src="/logo.svg" height={300} width={300} alt="" priority/>

            <div className="flex items-center gap-[1rem]">
                <Link href="https://x.com/"><RiTwitterXFill fontSize={24}/></Link>
                <Link href="https://www.instagram.com/"><FaInstagram fontSize={24} /></Link>
                <Link href="https://www.youtube.com/"><FaYoutube fontSize={24} /></Link>
                <Link href="https://www.linkedin.com/"><IoLogoLinkedin fontSize={24} /></Link>
            </div>
            
            </div>
            <ul>
                <h3 className="capitalize font-[600]">about swapHub</h3>
                
                <li><Link href="#" className="font-[16px]">How it works</Link></li>
                <li><Link href="#" className="font-[16px]">Community guidelines</Link></li>
                <li><Link href="#" className="font-[16px]">Our mission</Link></li>
                <li><Link href="#" className="font-[16px]">Contact us</Link></li>
                
            </ul>

            <ul>
                <h3 className="capitalize font-[600]">Discover</h3>
                <li><Link href="#" className="font-[16px]">Browse catergories</Link></li>
                <li><Link href="#" className="font-[16px]">popular swaps</Link></li>
                <li><Link href="#" className="font-[16px]">Successful stories</Link></li>
                <li><Link href="#" className="font-[16px]">Upcoming events</Link></li>
            </ul>
            <ul>
                <h3 className="capitalize font-[600]">Support</h3>
                <li><Link href="#" className="font-[16px]">help center</Link></li>
                <li><Link href="#" className="font-[16px]">FAQs</Link></li>
                <li><Link href="#" className="font-[16px]">Safety tips</Link></li>
                <li><Link href="#" className="font-[16px]"> Report an issue</Link></li>
            </ul>
        </footer>
    )
}