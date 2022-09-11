import Link from 'next/link'
import Navbar from '../components/Organisms/Navbar'
import Layout from '../components/Templates/Layout/Layout'

const IndexPage = () => (
  <Layout title="Home | Ajeye">
    <Navbar judul="Home Page"/>
    <div className='flex h-full w-full items-center mb-96 fon'>
    <div>
      <h1>Hello Next.js 👋</h1>
    </div>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    </div>
  </Layout>
)

export default IndexPage
