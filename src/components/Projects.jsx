import ProjectsItem from "./ProjectsItem"

export default function Projects() {
  const projects = [
    {
      title: 'ToDo',
      gitHubUrl: 'https://github.com/aliakseidomut/ToDo',
      id: '1'
    },
    {
      title: 'Notions',
      gitHubUrl: 'https://github.com/AliakseiDonut/Notion',
      id: '2'
    },
    {
      title: 'Store',
      gitHubUrl: 'https://github.com/AliakseiDonut/store',
      id: '3'
    },
    {
      title: 'GwentClone',
      gitHubUrl: 'https://github.com/aliakseidomut/GwentClone',
      id: '4'
    }
  ]
  
  return (
    <div className="py-4">
      <h2 className="text-3xl mb-2">Projects</h2>
      <div className="flex py-5 gap-10">
        {projects.map(el => <ProjectsItem key={el.id} item={ el } />)}
      </div>
    </div>
  )
}