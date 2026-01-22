import Debug "mo:base/Debug";
import Array "mo:base/Array";
import Types "types";

actor Migration {

  type Region = Types.Region;
  type Country = Types.Country;
  type City = Types.City;
  type Database = Types.Database;

  public func migrate(old : { regions : [Any]; countries : [Any]; cities : [Any] }) : async Database {
    Debug.print("Running migration…");

    let newRegions : [Region] = Array.map<Any, Region>(old.regions, func (r : Any) : Region {
      {
        slug = r.slug;
        headline = r.headline;
        subheadline = r.subheadline;
        seoDescription = r.seoDescription;
      }
    });

    let newCountries : [Country] = Array.map<Any, Country>(old.countries, func (c : Any) : Country {
      {
        slug = c.slug;
        name = c.name;
        tagline = c.tagline;
        seoDescription = c.seoDescription;
        primaryAirports = c.primaryAirports;
      }
    });

    let newCities : [City] = Array.map<Any, City>(old.cities, func (c : Any) : City {
      {
        slug = c.slug;
        name = c.name;
        country = c.country;
        tagline = c.tagline;
        seoDescription = c.seoDescription;
        primaryUseCases = c.primaryUseCases;
      }
    });

    Debug.print("Migration complete.");

    return {
      regions = newRegions;
      countries = newCountries;
      cities = newCities;
    };
  };
}
