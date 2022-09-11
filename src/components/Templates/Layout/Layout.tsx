import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../../Organisms/Navbar'
import Sidebar from '../../Organisms/Sidebar'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='h-screen w-screen max-h-screen'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <div className='flex w-full max-h-screen'>
          <Sidebar />
        <div className='h-screen w-full overflow-scroll'>
          {children}
          </div>
      </div>
  </div>
)

export default Layout
