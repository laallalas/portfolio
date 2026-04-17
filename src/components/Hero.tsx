import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[120px]"
        aria-hidden
      />
      <div className="container relative mx-auto px-4 text-center">
        <div className="relative mx-auto mb-8 inline-block">
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-600 to-pink-400 opacity-80 blur-md"
            aria-hidden
          />
          <Image
            src="/images/avatar.png"
            alt="Аватар"
            width={150}
            height={150}
            className="relative rounded-full border-2 border-black object-cover shadow-2xl shadow-pink-900/40 ring-2 ring-pink-500/40"
          />
        </div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-400/90 md:text-base">
          Портфолио
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl md:leading-[1.1]">
          Привет, я{' '}
          <span className="bg-gradient-to-r from-pink-200 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent">
            Лиана Ооржак
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400 md:text-xl">
          Frontend-разработчик из Сочи — интерфейсы, производительность и внимание к деталям.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-8 py-3 text-sm font-semibold text-black shadow-lg shadow-pink-500/25 transition hover:brightness-110 hover:shadow-pink-500/40"
          >
            Связаться со мной
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-pink-500/40 bg-black/40 px-8 py-3 text-sm font-semibold text-pink-200 backdrop-blur-sm transition hover:border-pink-400 hover:bg-pink-500/10"
          >
            Смотреть проекты
          </a>
        </div>
      </div>
    </section>
  )
}
