import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div >
            <Link href="/" className="flex items-center space-x-2">
                <Image className="rounded-full" src="/logo.png" width={30} height={30} alt="logo" />
                <h1>Code-Info</h1>
            </Link>
            
        </div>


        <div>
            <Link href="https://syedraihanali.top" target="_blank" className="hidden px-5 py-3 text-sm md:text-base bg-gray-900 text-[#0071ff] md:flex items-center rounded-full text-center hover:text-blue-400 hover:scale-105 transition-all">
                Visit My Website
            </Link>
        </div>
    </header>
  )
}

export default Header