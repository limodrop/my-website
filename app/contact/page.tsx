import { api } from "@/lib/api/apiClient"

export default async function ContactPage() {
  const contact = await api.getContact()
  const booking = await api.getBookingUrl()

  return (
    <div className="container mx-auto py-12 space-y-6">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <p className="text-lg">Phone: {contact.phone}</p>
      <p className="text-lg">Email: {contact.email}</p>
      <p className="text-lg">Address: {contact.address}</p>
      <p className="text-lg">Hours: {contact.hours}</p>

      <a
        href={booking.bookingUrl}
        className="inline-block bg-black text-white px-6 py-3 rounded"
      >
        Book a Ride
      </a>
    </div>
  )
}
