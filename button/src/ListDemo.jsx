export default function List() {
  const vegetables = [
    { title: "tomato", id: 1, isFruit: true },
    { title: "cabbage", id: 2, isFruit: false },
    { title: "spinach", id: 3, isFruit: false }
  ]

  return (
    <li>
      {
        vegetables.filter(vege => vege.isFruit).map(vege => (
          <ul key={vege.id}>{vege.title}</ul>
        ))
      }
    </li>
  )
}