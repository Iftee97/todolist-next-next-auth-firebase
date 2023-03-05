import Link from "next/link"

export default function Navbar() {
  return (
    <nav className='px-32 py-8 bg-slate-300 flex items-center justify-between'>
      <Link href='/'>
        <span className='text-2xl font-bold'>
          Todo List Next
        </span>
      </Link>
      <ul className="flex items-center gap-3 text-lg font-medium">
        <li>
          Sign In
        </li>
        <li>
          Sign Up
        </li>
      </ul>
    </nav>
  )
}
