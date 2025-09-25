// taget fra repitation
"use client";

import { searchContext } from "@/components/providers/search-provider";
import { useContext } from "react";
import ProductsCard from "../products-card";

function list(listings) {
    return <li key={listings.id} ><ProductsCard listings={listings}/></li>
}

export default function Productlist({ listingJson }) {
    const actualList = listingJson ? listingJson : useContext(searchContext)
    
    console.log(actualList)

    return (
        <>
            <p>{actualList.errorMsg}</p>
            <ul className="grid-product-cards items-center pb-[31px]">
                {actualList.length ? listingJson.map(list)
                    : actualList.results?.map(list)
                }
            </ul>
        </>
    )
}