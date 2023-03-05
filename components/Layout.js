import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-32 py-20">
        {children}
      </main>
    </>
  )
}
