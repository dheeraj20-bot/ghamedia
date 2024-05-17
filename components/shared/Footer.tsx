import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='max-w-7xl lg:mx-auto  p-5 md:px-10 xl:px-0 w-full flex flex-col sm:flex-row space-y-2 items-center justify-between'>
        <Link href="/" className='w-36'>
        <Image src="/images/ghamedialogo.png" width={128} height={38} alt='logo'/>
      </Link>
          <p>2023 Ghamedia. All Rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer