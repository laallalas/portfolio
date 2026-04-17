// src/components/Skills.tsx
export default function Skills() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Git', 'REST API', 'Figma'
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Навыки</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 px-4 py-2 rounded-full text-lg font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}