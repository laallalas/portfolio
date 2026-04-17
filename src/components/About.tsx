export default function About() {
  const skills = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js']

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Обо мне</h2>
        <div className="space-y-12">
          <div>
            <p className="text-lg mb-4">
              Я — frontend-разработчик, ориентированный на создание современных, быстрых и удобных интерфейсов. В работе делаю ставку на TypeScript как на фундамент надёжности и предсказуемости кода. Использую React и Next.js для построения как клиентских, так и серверных частей приложений — от SPA до масштабируемых проектов с рендерингом на стороне сервера. Визуальную составляющую реализую с помощью Tailwind CSS: утилитарный подход позволяет мне быстро верстать адаптивные интерфейсы без лишнего CSS‑кода, поддерживая единый дизайн-стиль.
            </p>
            <p className="text-lg">
             Node.js и REST API дают возможность уверенно работать на стыке фронтенда и бэкенда: я проектирую удобные клиентские части, понимаю логику серверных методов и умею эффективно интегрироваться с любыми API. Git — мой основной инструмент командной работы, а владение Figma помогает мне точно воспроизводить макеты, обсуждать интерфейсы с дизайнерами и предлагать оптимальные технические решения, не отступая от визуальной концепции.
            </p>
          </div>
          {/* <div> */}
            {/* <h3 className="text-xl font-semibold mb-4">Навыки</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))} */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}