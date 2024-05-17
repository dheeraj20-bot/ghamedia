import Footer from '@/components/shared/Footer'
import { Header } from '@/components/shared/navbar/Header'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex h-screen flex-col'>
      <Header/>
      <section className='flex-1 flex  items-center justify-center flex-col space-y-3'>
      <h2 className='text-4xl font-semibold'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      </section>
      <Footer/>
     
    </div>
  )
}