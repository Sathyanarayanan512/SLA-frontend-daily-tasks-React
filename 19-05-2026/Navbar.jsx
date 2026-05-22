export default function Navbar() {
  return (
    <nav className="border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        
        <h1 className="text-2xl font-bold text-blue-600">
          MyApp
        </h1>

        <ul className="flex flex-col gap-3 text-gray-700 md:flex-row md:gap-6">
          <li>
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}