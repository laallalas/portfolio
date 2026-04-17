export default function Footer() {
  return (
    <footer className="border-t border-pink-500/10 bg-black/60 py-10 text-center text-sm text-zinc-500 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-zinc-400">Лиана Ооржак</span>. Все права защищены.
        </p>
      </div>
    </footer>
  )
}