// taget fra repitation

"use client";


import { searchContext } from "@/components/providers/search-provider";
import { useContext } from "react";

export default function SearchField({ json }) {

	
	const { setResults, setErrorMsg } = useContext(searchContext);


	function searchHandler(event) {
		setErrorMsg("");
		const { value } = event.target;

		if (value !== "") {
			var filteredData = json.filter(
				listing => (listing.title.toLowerCase().includes(value.toLowerCase())
                
            ));
                }
                

		if (!filteredData?.length) {
			setErrorMsg("No results");
		}
		setResults(filteredData);
	}

	return (
		<div>
			<input className="mt-[69px] border rounded-2xl mb-[48px] h-[40px] w-[30%]" type="search" onChange={searchHandler} />


		</div>
	);
}