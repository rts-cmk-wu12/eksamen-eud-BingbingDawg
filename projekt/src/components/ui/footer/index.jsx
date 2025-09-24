import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function FooterComponent(){
    return(
        <footer className="flex justify-evenly border-t-[1px] footer-margin bg-white h-[267px] items-center z-10 ">
            <div className="flex-col">

                <Image className="align-center w-auto h-[40px]" src="/logo.svg" height={300} width={300} alt="" priority/>

            <div className="flex items-center gap-[1rem]">
                <Link href="https://x.com/"><RiTwitterXFill fontSize={24}/></Link>
                <Link href="https://www.instagram.com/"><FaInstagram fontSize={24} /></Link>
                <Link href="https://www.youtube.com/"><FaYoutube fontSize={24} /></Link>
                <Link href="https://www.linkedin.com/"><IoLogoLinkedin fontSize={24} /></Link>
            </div>
            
            </div>
            <div>
                <h3 className="capitalize font-[600]">about swapHub</h3>
                <p className="font-[16px]">How it works</p>
                <p className="font-[16px]">Community guidelines</p>
                <p className="font-[16px]">Our mission</p>
                <p className="font-[16px]">Contact us</p>
            </div>
            <div>
                <h3 className="capitalize font-[600]">Discover</h3>
                <p className="font-[16px]">Browse catergories</p>
                <p className="font-[16px]">popular swaps</p>
                <p className="font-[16px]">Successful stories</p>
                <p className="font-[16px]">Upcoming events</p>
            </div>
            <div>
                <h3 className="capitalize font-[600]">Support</h3>
                <p className="font-[16px]">help center</p>
                <p className="font-[16px]">FAQs</p>
                <p className="font-[16px]">Safety tips</p>
                <p className="font-[16px]"> Report an issue</p>
            </div>
        </footer>
    )
}