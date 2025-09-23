import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({listings}){

    return(
        <Link href={`listingdetails/${listings.id}`} >
            <article className=" flex-col flex gap-[5px] p-[1] border-[2px]  rounded-[5px] w-[30vw]">
            <div className=" flex justify-center grid-image w-full overflow-hidden object-cover">
        <Image className=" h-full w-auto rounded-2xl" src={listings?.asset?.url} height={300} width={300} alt="" />
            </div>
        <h3 >{listings?.title}</h3>
        </article>
        </Link>
    )
}