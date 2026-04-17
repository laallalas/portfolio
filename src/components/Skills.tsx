// src/components/Skills.tsx
export default function Skills() {
  const skills = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
    'Node.js', 'Git', 'REST API', 'Figma'
  ]

  return (
    <section id="skills" className="relative py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
          Навыки
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-3xl font-bold text-white md:text-4xl">
          Стек, с которым работаю каждый день
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-pink-500/25 bg-black/50 px-5 py-2.5 text-sm font-medium text-pink-100 shadow-inner shadow-pink-500/5 backdrop-blur-sm transition hover:border-pink-400/50 hover:bg-pink-500/10 md:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}