import Header from './components/Header'
import InfoList from './components/InfoList'
import Projects from './components/Projects'

function App() {
  return (
    <div className="w-2/4 mx-auto">
      <Header />
      
      <InfoList 
        name = {"Skills"}
        items = {["JavaScript", "HTML", "CSS", "React", "Redux", "TypeScript", "NodeJS:Beginner"]}
      />
      
      <InfoList 
        name = {"Education"}
        items = {["Belarusian State University", 
                  "Faculty of mechanics and mathematics",
                  "Bachelors program: Mathematics and Computer Science (Web Programming and Internet Technologies)",
                  "2022-2026"
                ]}
      />

      <InfoList 
        name = {"Experience"}
        items = {['Developed numerous educational projects in JavaScript and TypeScript as part of the "JavaScript/Front-end" course at RS School.', 
                  'Developed various educational projects using JavaScript and React as part of my university studies.',
                  'Created a clone of the card game "Gwent" using React, TypeScript, Redux, ExpressJS, and MongoDB as a coursework project during my second year at university (the project was partially completed).'
                ]}
      />

      <InfoList 
        name = {"Languages"}
        items = {["English: Elementary", "Belarusian: Native", "Russian: Native"]}
      />
      
      <Projects />
    </div>
  )
}

export default App
