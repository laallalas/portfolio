import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <Image
          src="/images/309.jpg"
          alt="Аватар"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-white"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Привет, я Лиана Ооржак
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Frontend-разработчик из Сочи
        </p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Связаться со мной
        </a>
      </div>
    </section>
  )
}