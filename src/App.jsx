import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Cards from './components/Cards';

import ContactForm from './components/contact';
import MainFooter from './components/MainFooter';
import SignIn from './components/login';
import SignUpPage from './components/signup';
import AboutUs from './components/about';
import './style.css';
import BuyCart from './components/BuyCart';
import HeroScroll from './components/HeroScroll';
import AdvertiseCard from './components/AdvertiseCard';









function App() {
  function smoothScroll(){
    const target = document.getElementById("target-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <><Router>
      <div className='fixed top-0 flex left-0 w-full  backdrop-blur-lg  z-50'>
      <Header />
      </div>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={<>
            <div className='ml-6 mt-28  mr-6 font-poppins bg-neutral-200/50 h-[694px] flex flex-col rounded-lg justify-evenly'>
              <HeroScroll/>
              <div className="pt-6 text-neutral-800">
              <div className='flex  flex-row justify-center items-center space-x-6 text-neutral-800'>
               
                <div className='flex  relative text-center font-bold text-6xl'>Unleash Creativity
                  <img className="absolute -top-8"src="/assets/underline.png"/>
                </div>
              </div>

              <div className="flex flex-row justify-center item-center">
                <div className='text-center mt-8 font-light text-xl tracking-wider'>
                  Own Masterpieces Discover Art That Speaks to You
                </div>
              </div>

              {/* home page button */}
              <div className='flex justify-center'>
                <button 
                onClick={smoothScroll}
                className='px-8 py-4 mt-10 rounded-full bg-neutral-800 ring-2 ring-pink-400 text-white font-medium'>
                  Explore products
                </button>
              </div>
              <div className='flex justify-center mt-10'>
                <img className="w-8 h-8 animate-bounce text-white opacity-20" src="/assets/down-arrow.svg" alt="down arrow" />
              </div>
              </div>
            </div>
{/* search bar and category section starts */}
            <div id="target-section">
            <div className="mt-8 border-y-[2px] border-neutral-200/50">
            <div className='font-poppins px-8 pt-10 text-3xl font-medium'>
             &#128075; Hey welcome back user1!!
            </div>


            

            

            <div className="font-poppins flex flex-row my-8 space-x-4">
              <div className="max-w-lg ml-8 flex-1">
                <div className='flex flex-row '>
                  <input type='type' placeholder='Enter product name ' className=' font-normal text-md placeholder:text-neutral-500 focus:outline-none  w-42 md:w-full bg-neutral-200/50 rounded-l-full px-4 py-[10px] '></input>
                  <div className="flex ">
                  <button className='px-4 bg-neutral-800 text-white border-2 border-neutral-400 rounded-r-full -translate-x-[2px]'>search</button>
                  </div>
                </div>
              </div>
              <div className='flex font-medium space-x-4'>
                <button className="bg-neutral-200/50 text-slate-800 rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">Art</button>
                <button className="bg-neutral-200/50 text-slate-800 rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">Handicraft</button>
                <button className="bg-neutral-200/50 text-slate-800 rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">Painting</button>
                <button className="bg-neutral-800 text-white rounded-full px-10 max-w-lg hover:ring-neutral-500 ring-inset ring-neutral-200/50 ring-2 duration-500">All</button>
              </div>
            </div>

            </div>
            {/* ends here */}
            </div>  
              <div className="flex border-b-2 border-neutral-200/50 ">
                <div className="w-3/4 h-[800px] overflow-scroll  border-r-2  border-neutral-200/50   scroll-m-1">
                  <div className='flex flex-wrap mx-2 my-2 justify-evenly '>
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                    <Cards cardTitle="Art piece 1" productPrice="1289" />
                
                  </div>
                </div>
                <div className='w-1/4 h-[800px]'>
                  <AdvertiseCard/>
                </div>
              </div>
              <div className='my-6'>
                <div className='flex w-full p-4 justify-evenly'>
                  <div className='p-2 gap-2 flex max-w-sm bg-neutral-50  text-neutral-800 text-sm font-medium justify-center items-center border-[2px] border-neutral-200/50 rounded-lg'><img  className='w-20 h-20' src="/assets/idea.png"/>ajldhaldfahfilasdjfasilfuahfa asdjfhas f shio fashfj sskj fhsaf ilsauf s</div>
                  
                  <div className='p-2 gap-2 flex max-w-sm bg-neutral-50  text-neutral-800 text-sm font-medium justify-center items-center border-[2px] border-neutral-200/50 rounded-lg'><img  className='w-20 h-20' src="/assets/ship.png"/>ajldhaldfahfilasdjfasilfuahfa asdjfhas f shio fashfj sskj fhsaf ilsauf s</div>
                  
                  <div className='p-2 gap-2 flex max-w-sm bg-neutral-50  text-neutral-800 text-sm font-medium justify-center items-center border-[2px] border-neutral-200/50 rounded-lg'><img  className='w-20 h-20' src="/assets/earn.png"/>ajldhaldfahfilasdjfasilfuahfa asdjfhas f shio fashfj sskj fhsaf ilsauf s</div>
                  
                </div>
              </div>
              
            
           <MainFooter/>

          </>
          } />
        <Route path="/BuyCart" element={<BuyCart />} />
        {/* Login Page */}
        <Route path="/login" element={<SignIn />} />
        <Route path='/about' element={<AboutUs />} />
        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUpPage />} />

        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </Router>
      {/* // App component add from here  */}
      


    </>
  );
}

export default App;