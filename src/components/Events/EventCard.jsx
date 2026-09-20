function EventCard({ title = 'Event', time = 'TBD', icon = null }) {
  return (
    <article>
      <span>{icon ?? '•'}</span>
      <h3>{title}</h3>
      <p>{time}</p>
    </article>
  )
}

export default EventCard
