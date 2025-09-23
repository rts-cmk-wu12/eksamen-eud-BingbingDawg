import SearchField from "@/components/forms/search-field";
import SearchProvider from "@/components/providers/search-provider";
import ProductsCard from "@/components/ui/products-card";

export default async function Home() {
  const response = await fetch("http://localhost:4000/api/v1/listings")
  const json = await response.json();

  //console.log(json)
  return (
    <>
      <SearchProvider>
        <SearchField json={json} />
        <ul className="grid-product-cards items-center">
          {json.map(listings => (
            <li key={listings.id}>
              <ProductsCard listings={listings} />
            </li>
          ))}
        </ul>
          </SearchProvider>
    </>
  );
}
