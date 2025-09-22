import SearchBar from "@/components/search";
import ProductsCard from "@/components/ui/products-card";

export default async function Home() {
const response = await fetch ("http://localhost:4000/api/v1/listings")
const json = await response.json();

console.log(json)
  return (
    <>
    <SearchBar />
    <ul>
    {json.map(listings => (
      <li key={listings.id}>
        <ProductsCard listings={listings}/>
      </li>
    ))}
    </ul>
    </>
  );
}
