import ProjectScreenshots from '@/components/ProjectScreenshots'

const projects = [
  {
    title: 'Hello Kity',
    description:
      'Учебный HTML-проект: вёрстка и оформление. Исходники на GitHub.',
    screenshots: [
      '/images/hello-kity-catalog.png',
      '/images/hello-kity-home.png',
      '/images/hello-kity-contact.png',
    ],
    technologies: ['HTML', 'CSS'],
    demo: 'https://github.com/laallalas/hello-kity',
    code: 'https://github.com/laallalas/hello-kity',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
          Проекты
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-3xl font-bold text-white md:text-4xl">
          Мои проекты
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-pink-500/15 bg-elevated/80 shadow-xl shadow-black/30 backdrop-blur-sm transition hover:border-pink-500/35 hover:shadow-pink-500/10"
            >
              <div className="relative overflow-hidden">
                <ProjectScreenshots images={project.screenshots} title={project.title} />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-zinc-400">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-pink-500/20 bg-black/40 px-2 py-1 text-xs font-medium text-pink-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between border-t border-white/5 pt-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-pink-400 transition hover:text-pink-300"
                  >
                    Демо →
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-zinc-400 transition hover:text-pink-400"
                  >
                    Код →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
