// import React from 'react'

function Header() {
  return (

      <nav className="flex flex-wrap items-center justify-between px-6 py-4 bg-gray-500">
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          {/* <span className="">Tailwind CSS</span> */}
          <a className="text-xl font-semibold tracking-tight" href="https://data.thoviet.com/"><img src="https://data.thoviet.com/siteico.png" alt width="50%" /></a>

        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="flex-grow block w-full lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
              Trang Chủ
            </a>
            <a href="#responsive-header" className="block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
              Thông Tin Thợ
            </a>
            <a href="#responsive-header" className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white">
              Tìm Thông Tin
            </a>
          </div>
          <div>
            <a href="#" className="inline-block px-4 py-2 mt-4 mr-2 text-sm leading-none text-green-500 border border-green-500 rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            </a>
            <a href="#" className="inline-block px-4 py-2 mt-4 mr-2 text-sm leading-none text-blue-500 border border-blue-500 rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            </a>
            <a href="#" className="inline-block px-4 py-2 mt-4 mr-2 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
            </svg>
            </a>
            <a href="#" className="inline-block px-4 py-2 mt-4 text-sm leading-none text-red-500 border border-red-500 rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>

            </a>
          </div>
        </div>
      </nav>
  )
}

export default Header
