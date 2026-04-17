export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-400">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Лиана Ооржак. Все права защищены.</p>
      </div>
    </footer>
  )
}