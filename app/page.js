import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Sidebar from './Sidebar'
import Grid from './Grid'



export default function Home() {

  
  return (
    <main className="">
     <div>
      {/* <Link href="/items">
       Go to items
      </Link> */}
      <Header/>
           
        <div className='container mx-auto px-4 lg:px-2 py-4 flex '>
<Sidebar/>
<Grid/>
      </div>
     </div>
    </main>
  )
}
