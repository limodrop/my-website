export async function getPromotions() {
  return [
    {
      id: "1",
      title: "New Customer Special",
      description: "Save 15% on your first ride",
      code: "WELCOME15",
      discount: "15%",
      validUntil: "2024-12-31",
      terms: "Valid for new customers only. Cannot be combined with other offers."
    },
    {
      id: "2",
      title: "Corporate Account Discount",
      description: "Special rates for corporate accounts",
      code: "CORPORATE20",
      discount: "20%",
      validUntil: "2024-12-31",
      terms: "Available for qualifying corporate accounts with monthly billing."
    }
  ]
}
