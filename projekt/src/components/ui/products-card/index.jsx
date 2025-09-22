import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({listings}){

    return(
        <Link href="" className="w-full grid-product-cards">
        <Image src={listings?.asset?.url} height={20} width={20} alt="" />
        <h3 >{listings?.title}</h3>
        </Link>
    )
}