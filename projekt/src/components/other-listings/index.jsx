import Image from "next/image"
import ProductsCard from "../ui/products-card"

export default async function OtherListings({json}){

    const response = await fetch("http://localhost:4000/api/v1/listings/")
    const listings = await response.json()

    const listId = json.userId

    const matches = listings.filter(user => user.userId === listId)

    console.log(matches)

    return(
        <div>
            <h3 className="text-[26px] font-[600px]">Other items from this Swapper</h3>
            <ul className="flex">
            {matches.map(listings => (
                <li className="mb-[80px] mr-[24px] mt-[19px]" key={listings.id}>
                    <ProductsCard listings={listings} />
                </li>
            ))}
            </ul>
        </div>
    )
}