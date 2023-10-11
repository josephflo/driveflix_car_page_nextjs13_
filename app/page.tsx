import {
  CarCard,
  CustomFilter,
  Heroe,
  SearchBar,
  ShowMore,
} from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { IHomeProps } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home({ searchParams }: IHomeProps) {
  const allCarsApi = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !Array.isArray(allCarsApi) || allCarsApi.length < 1 || !allCarsApi;

  return (
    <main className="overflow-hidden">
      <Heroe />

      <div className="mt-12 padding-x padding-y max-width" id="explore">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCarsApi?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCarsApi.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font bold">
              Opps, no cars results
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
