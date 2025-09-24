// taget fra repitation
"use client";

import { searchContext } from "@/components/providers/search-provider";
import { useContext } from "react";
import ProductsCard from "../products-card";

function list(listings) {
    return <li key={listings.id} ><ProductsCard listings={listings}/></li>
}

export default function Listingslist({ listings }) {
    const actualList = listings ? listings : useContext(searchContext)


    return (
        <>
            <p>{actualList.errorMsg}</p>
            <ul className="grid-product-cards items-center pb-[31px]">
                {actualList.length ? listings.map(list)
                    : actualList.results?.map(list)
                }
            </ul>
        </>
    )
}