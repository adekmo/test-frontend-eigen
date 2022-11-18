
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import Navbar from './components/Navbar';
import NewsDetail from './components/NewsDetail';
import Feed from './components/Feed';

const App: React.FC = () => {

  const [navbar, setNavbar] = useState(false);

  const changeBackGround = () => {
    const header = document.querySelector('#navv') as HTMLElement | null;

    if (header != null) {
      const fix = header.offsetTop;

      if (window.pageYOffset > fix) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }

  }

  window.addEventListener('scroll', changeBackGround);




  return (
    <BrowserRouter>
      <div className='bg-[#DFDFDF] w-full overflow-hidden'>
        <div className="sm:px-16 px-6 flex justify-center items-center">
          <div id="navv" className={`xl:max-w-[1280px] w-full ${navbar ? 'nav-fix' : 'navv'}`}>
            <Navbar />
          </div>
        </div>
        {/* <div className="bg-[#DFDFDF] flex justify-center items-center mt-24">
          <div className="xl:max-w-[1280px] w-full">
                <Hero />
          </div>
        </div> */}

        {/* <div className="bg-[#DFDFDF] flex justify-center items-center mt-24">
          <div className="p-2 xl:max-w-[1280px] w-full flex gap-5 flex-wrap justify-between items-center">
          {project.length === 0 ? (<div></div>) : (<h1 className='w-[380px] box-shadow p-5 text-[50px] leading-[54px] font-poppins font-bold'>Latest <br /> <span className="text-red-500 ml-10">News</span> </h1>) }
              {project.length > 0 ? (project.map((news: Article, index) => {
                return (
                  <NewsCard news={news} index={index} />
                )
              })) : ('Loading...')}
          </div>
        </div> */}

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/news-detail/:title" element={<NewsDetail />} />
        </Routes>
      </div>


    </BrowserRouter>
  )
}

export default App
