
function NavBar() {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Sport', path: '/sport' },
        { label: 'Business', path: '/business' },
        { label: 'Innovation', path: '/innovation' },
        { label: 'Culture', path: '/culture' },
        { label: 'Arts', path: '/arts' },
        { label: 'Travel', path: '/travel' },
        { label: 'Earth', path: '/earth' },
        { label: 'Audio', path: '/audio' },
        { label: 'Video', path: '/video' },
        { label: 'Live', path: '/live' },
    ];

  return (
    <nav className="w-full border-b border-gray-300 bg-white sticky top-0">
        <ul className="flex justify-center gap-4 p-4">
            {navItems.map((label) => (
            <li key={label.label}>    
                <a
                href={label.path}
                className={window.location.pathname === label.path ? 'text-blue-500' : 'text-black'}
                >
                {label.label}
                </a>
            </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar
