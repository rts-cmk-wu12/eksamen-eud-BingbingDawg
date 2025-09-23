import Image from "next/image";

export default async function ListingDetails({ params }){

    const {listingid} = await params;

    const response = await fetch(`http://localhost:4000/api/v1/listings/${listingid}`)
    const json = await response.json();

    console.log(json)

    return (
        <>
        <div className="flex">
            <Image className="w-[415px] h-[auto]" src={json.asset.url} alt="" width={200} height={200} />
            <div>
                <h3>{json.title}</h3>
                <p>{json.description}</p>
                <p>On SwapHub since: </p>
            </div>
       
        </div>
        </>
    )
}
