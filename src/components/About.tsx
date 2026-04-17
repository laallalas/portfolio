export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
          Обо мне
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          Код, дизайн и надёжность в одном потоке
        </p>
        <div className="mx-auto max-w-4xl space-y-8 rounded-2xl border border-pink-500/15 bg-elevated/60 p-8 shadow-xl shadow-black/40 backdrop-blur-sm md:p-10">
          <div>
            <p className="mb-4 text-lg leading-relaxed text-zinc-400">
              Я — frontend-разработчик, ориентированный на создание современных, быстрых и удобных интерфейсов. В работе делаю ставку на TypeScript как на фундамент надёжности и предсказуемости кода. Использую React и Next.js для построения как клиентских, так и серверных частей приложений — от SPA до масштабируемых проектов с рендерингом на стороне сервера. Визуальную составляющую реализую с помощью Tailwind CSS: утилитарный подход позволяет мне быстро верстать адаптивные интерфейсы без лишнего CSS‑кода, поддерживая единый дизайн-стиль.
            </p>
            <p className="text-lg leading-relaxed text-zinc-400">
              Node.js и REST API дают возможность уверенно работать на стыке фронтенда и бэкенда: я проектирую удобные клиентские части, понимаю логику серверных методов и умею эффективно интегрироваться с любыми API. Git — мой основной инструмент командной работы, а владение Figma помогает мне точно воспроизводить макеты, обсуждать интерфейсы с дизайнерами и предлагать оптимальные технические решения, не отступая от визуальной концепции.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}