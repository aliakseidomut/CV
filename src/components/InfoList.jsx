export default function InfoList({name, items}) {
    return (
      <div className="border-b-2 py-4">
          <h2 className="text-3xl mb-2">{name}</h2>
          <ul className="text-lg list-disc">
              {items.map(el => <li className="py-1">{el}</li>)}
          </ul>
      </div>
    )
  }
  