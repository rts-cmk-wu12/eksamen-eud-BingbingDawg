import SearchField from "@/components/forms/search-field";
import SearchProvider from "@/components/providers/search-provider";
import Productlist from "@/components/ui/listings-list";


export default async function Home() {
  const response = await fetch("http://localhost:4000/api/v1/listings")
  const listingJson = await response.json();

  //console.log(json)
  return (
    <>
      <SearchProvider>
        <SearchField listingJson={listingJson} />
        <Productlist />
          </SearchProvider>
    </>
  );
}
