export async function getFooter() {
  return {
    companyName: "Oregon Town Car",
    tagline: "Premium Chauffeur Service",
    phone: "(503) 555-0100",
    email: "info@oregontowncar.com",
    address: "123 Main Street, Portland, OR 97201",
    socialLinks: {
      facebook: "https://facebook.com/oregontowncar",
      twitter: "https://twitter.com/oregontowncar",
      instagram: "https://instagram.com/oregontowncar",
    },
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Careers", href: "/careers" },
    ],
  }
}
