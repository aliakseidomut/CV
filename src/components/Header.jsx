export default function Header() {
  return (
    <div className="flex flex-col gap-3 py-4 border-b-2">
      <h1 className="text-center text-5xl font-medium">Alexey Domut</h1>
      <h2 className="text-center text-4xl">Frontend Developer</h2>
      <div className="flex gap-3 justify-center">
        <span>Minsk, Belarus</span>
        <a className="underline" href="mailto:alexeydomut@gmail.com">alexeydomut@gmail.com</a>
      </div>
      <p className="text-lg font-normal">
        Hi, I am a motivated student and aspiring frontend developer with foundational experience in HTML, CSS, JavaScript, and React, along with some practical experience with Node.js. I am proficient in building responsive web pages and user interfaces, with a growing interest in backend development. I have completed courses at RSSchool and continually expand my skills through personal and university projects. I am familiar with Git for version control and eager to learn new technologies, contributing to both frontend and backend development. I am looking for opportunities to apply my knowledge and grow as a full-stack developer.
      </p>
    </div>
  )
}
