export default function EventDetail({ params }: { params: { id: string } }) {
  return (
    <main>
      <h1>Event {params.id}</h1>
    </main>
  )
}