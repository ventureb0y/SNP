import { Rubik } from "next/font/google"

const rubik = Rubik({ subsets: ['latin'] }) 

export default function Layout({ children }) {
  return (
    <>
      <div className={rubik.className}>{children}</div>
    </>
  )
}