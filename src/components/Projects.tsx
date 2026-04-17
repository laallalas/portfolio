import Image from 'next/image'

const projects = [
  {
    title: 'Название проекта 1',
    description: 'Краткое описание проекта, технологии и цели.',
    image: '/images/project1.jpg',
    technologies: ['React', 'Tailwind'],
    demo: 'https://example.com',
    code: 'https://github.com/username/project1',
  },
  // добавьте другие проекты
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Мои проекты</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Демо
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Код
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}