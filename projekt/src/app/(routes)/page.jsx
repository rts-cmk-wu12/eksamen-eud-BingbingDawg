import SearchField from "@/components/forms/search-field";
import SearchProvider from "@/components/providers/search-provider";
import Listingslist from "@/components/ui/listings-list";
import ProductsCard from "@/components/ui/products-card";

export default async function Home() {
  const response = await fetch("http://localhost:4000/api/v1/listings")
  const json = await response.json();

  //console.log(json)
  return (
    <>
      <SearchProvider>
        <SearchField json={json} />
        <Listingslist />
          </SearchProvider>
    </>
  );
}
