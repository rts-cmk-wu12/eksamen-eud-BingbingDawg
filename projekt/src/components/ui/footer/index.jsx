import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function FooterComponent(){
    return(
        <footer className="flex justify-between border-t-[1px] bottom-0 fixed items-center z-10 left-[120px] right-[120px]">
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
                <p>How it works</p>
                <p>Community guidelines</p>
                <p>Our mission</p>
                <p>Contact us</p>
            </div>
            <div>
                <h3 className="capitalize font-[600]">Discover</h3>
                <p>Browse catergories</p>
                <p>popular swaps</p>
                <p>Successful stories</p>
                <p>Upcoming events</p>
            </div>
            <div>
                <h3 className="capitalize font-[600]">Support</h3>
                <p>help center</p>
                <p>FAQs</p>
                <p>Safety tips</p>
                <p> Report an issue</p>
            </div>
        </footer>
    )
}