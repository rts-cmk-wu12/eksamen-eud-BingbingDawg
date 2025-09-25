import OtherListings from "@/components/other-listings";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function ListingDetails({ params }){

    const {listingid} = await params;

    const response = await fetch(`http://localhost:4000/api/v1/listings/${listingid}`)
    const json = await response.json();

    console.log(json)
    
    

    return (
        <>
        <div className="flex m-[31px] text-left">
            <Image className="w-[415px] h-[415px] " src={json.asset.url} alt="" width={200} height={200} />
            <div className="ml-[31px] ">
                <h3 className="font-[600] text-[24px] mb-[14px]">{json.title}</h3>
                <p className="text-[18px] mb-[37px]">{json.description}</p>
                <p className="text-[18px]">On SwapHub since: {json.updatedAt.slice(0, 10)}</p>
            </div>

            <button className="text-[18px] ">Propose a swap</button>
        </div>

        <OtherListings json={json}/>
        </>
    )
}
