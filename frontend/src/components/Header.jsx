import Button from './Button'

const navLinks = [
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
]
const Header = () => {
  return (
    <header className="bg-slate-800 text-white">
      <div className="container p-4 mx-auto">
        <nav className="flex justify-between items-center gap-4">
          <a href="#" className="text-3xl font-semibold tracking-wide">
            MERN Auth
          </a>
          <div className="flex justify-between items-center gap-8">
            {navLinks.map(link => (
              <Button
                key={link.path}
                linkName={link.name}
                linkPath={link.path}
              />
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
