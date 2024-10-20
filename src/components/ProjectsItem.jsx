export default function ProjectsItem({item}) {
  return (
    <a className="flex flex-col gap-3 border-2 border-black p-5 rounded-lg hover:shadow-lg hover:relative hover:bottom-1 w-1/4" href={item.gitHubUrl}>
      <h2 className="text-xl font-semibold text-center">{item.title}</h2>
    </a>
  )
}
