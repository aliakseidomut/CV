import ProjectsItem from "./ProjectsItem"

export default function Projects() {
  const projects = [
    {
      imgUrl: 'https://github.com/aliakseidomut/CV/blob/main/src/assets/ToDo.gif?raw=true',
      title: 'ToDo',
      gitHubUrl: 'https://github.com/aliakseidomut/ToDo',
      description: 'Effortlessly stay organized: Simplify your tasks, boost productivity, and never miss a beat with our intuitive ToDoList app.',
      id: '1'
    },
    {
      imgUrl: 'https://github.com/aliakseidomut/CV/blob/main/src/assets/Notions.gif?raw=true',
      title: 'Notions',
      gitHubUrl: 'https://github.com/AliakseiDonut/Notion',
      description: 'Unleash your creativity and streamline your workflow with Notions: The all-in-one app for notes, tasks, and collaboration.',
      id: '2'
    },
    {
      imgUrl: 'https://github.com/aliakseidomut/CV/blob/main/src/assets/Store.gif?raw=true',
      title: 'Store',
      gitHubUrl: 'https://github.com/AliakseiDonut/store',
      description: 'Discover, shop, and save effortlessly with Store: Your ultimate shopping companion for finding the best deals and managing your purchases.',
      id: '3'
    },
    {
      imgUrl: 'https://github.com/aliakseidomut/CV/blob/main/src/assets/Gwent.gif?raw=true',
      title: 'GwentClone',
      gitHubUrl: 'https://github.com/aliakseidomut/GwentClone',
      description: 'Discover, shop, and save effortlessly with Store: Your ultimate shopping companion for finding the best deals and managing your purchases.',
      id: '4'
    }
  ]
  
  return (
    <div>
      <h2 className="text-3xl mb-2">Projects</h2>
      <div className="flex flex-col gap-10 py-5">
        {projects.map(el => <ProjectsItem key={el.id} item={ el } />)}
      </div>
    </div>
  )
}