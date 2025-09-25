
import Image from "next/image";
import Link from "next/link";

export default function ProductsCard({listings}){


    return(
        <Link className="h-[317px] w-[262px] object-fit" href={`/listingdetails/${listings.id}`} >
            <article className=" flex-col flex p-[1px] border-[2px] h-[470px] w-[25vw] rounded-[8px]">
            <div className=" flex justify-center grid-image w-full overflow-hidden">
        <Image className=" h-[100%] pt-[10px] w-[95%] rounded-2xl object-fit aspect-square" src={listings?.asset?.url} height={300} width={300} alt="" />
            </div>
        <h3 className="pt-[18px] pb-[16px] pl-[16px]">{listings?.title}</h3>
        </article>
        </Link>
    )
}