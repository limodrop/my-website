export interface Region {
  id: string;
  name: string;
  headline: string;
  subheadline: string;
  seoDescription: string;
}

export const regions: Region[] = [
  {
    id: "united-states",
    name: "United States",
    headline: "Premium Chauffeur Service Across All 50 States",
    subheadline: "From major airports to corporate hubs, enjoy consistent luxury service nationwide.",
    seoDescription: "Nationwide black car and chauffeur service across all 50 U.S. states, including airport transfers, corporate travel, and point-to-point rides."
  },
  {
    id: "canada",
    name: "Canada",
    headline: "Professional Chauffeur Service in Canada's Major Cities",
    subheadline: "Toronto, Vancouver, Montreal, Calgary — premium service from coast to coast.",
    seoDescription: "Luxury chauffeur and airport transfer service across Canada's major business and travel destinations."
  },
  {
    id: "europe",
    name: "Europe",
    headline: "Executive Chauffeur Service Across Europe",
    subheadline: "London, Paris, Frankfurt, Rome — business-class travel in Europe's top cities.",
    seoDescription: "Premium chauffeur service in Europe's major capitals and financial centers."
  },
  {
    id: "middle-east",
    name: "Middle East",
    headline: "Luxury Chauffeur Service in the Middle East",
    subheadline: "Dubai, Doha, Riyadh — premium travel for business and leisure.",
    seoDescription: "High-end chauffeur service across the Middle East's major destinations."
  }
];
