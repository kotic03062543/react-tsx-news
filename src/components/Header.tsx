import hamburger from '../assets/hamburger.png';
import user from '../assets/user.png';

function Header() {
  return (
    <div className='flex justify-between items-center text-white p-4 border border-b-gray-200'>
        <div className="cursor-pointer">
            <img className='w-8' src={hamburger} alt="no file" />
        </div>
        <div className="flex gap-3 justify-center items-center">
            <div className="text-4xl font-bold bg-black text-white py-1 px-2">B</div>
            <div className="text-4xl font-bold bg-black text-white py-1 px-2">B</div>
            <div className="text-4xl font-bold bg-black text-white py-1 px-2">C</div>
        </div>
        <div className="hidden md:flex gap-5">
            <button className="bg-black text-white px-4 py-2 cursor-pointer">Register</button>
            <button className="text-black cursor-pointer">Sign In</button>
        </div>
        <div className='md:hidden cursor-pointer'>
            <img className='w-12' src={user} alt="no file" />
        </div>
    </div>
  )
}

export default Header
