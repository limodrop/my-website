export async function getServiceArea() {
  return {
    // Oregon primary coverage
    primaryCities: ["Portland", "Beaverton", "Salem", "Eugene", "Hillsboro"],
    counties: ["Multnomah", "Washington", "Clackamas", "Marion", "Lane"],
    radius: "50 miles from Portland metro area",
    airports: ["PDX - Portland International Airport", "EUG - Eugene Airport"],
    
    // Worldwide coverage
    countries: [
      { name: "United States", slug: "usa", cities: 200 },
      { name: "Canada", slug: "canada", cities: 50 },
      { name: "United Kingdom", slug: "uk", cities: 25 },
      { name: "France", slug: "france", cities: 15 },
      { name: "Germany", slug: "germany", cities: 20 },
      { name: "Italy", slug: "italy", cities: 12 },
      { name: "Spain", slug: "spain", cities: 10 },
      { name: "Switzerland", slug: "switzerland", cities: 8 },
      { name: "Netherlands", slug: "netherlands", cities: 6 },
      { name: "Belgium", slug: "belgium", cities: 5 },
      { name: "Australia", slug: "australia", cities: 15 },
      { name: "Japan", slug: "japan", cities: 10 },
      { name: "United Arab Emirates", slug: "uae", cities: 5 }
    ],
    
    majorCities: [
      "New York", "Los Angeles", "Chicago", "Miami", "San Francisco",
      "London", "Paris", "Berlin", "Rome", "Madrid",
      "Sydney", "Tokyo", "Dubai"
    ],
    
    internationalAirports: [
      "JFK", "LAX", "ORD", "LHR", "CDG", "FRA", "FCO", "MAD", "SYD", "NRT", "DXB"
    ],
    
    specialNotes: "Worldwide service available. Custom arrangements for any location upon request."
  }
}
