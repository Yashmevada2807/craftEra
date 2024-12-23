import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryButton from './components/Category';
import Cards from './components/Cards';
import LoginPage from './components/signup'; // Create this component
import SignUpPage from './components/login'; // Create this component
import BuyCart from './components/BuyCart';
import Meteors from './components/ui/meteors';
import './style.css';
import Footer from './components/footer';







function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className='ml-6 relative overflow-hidden mr-6 font-poppins bg-neutral-200/50 h-[694px] flex flex-col rounded-lg'>
              <div className='mt-14 absolute'>
                <Meteors number={20} />
              </div>
                <div className='flex mt-64 flex-row justify-center items-center space-x-6'>
                  <div className='flex text-center font-bold text-6xl'>Unleash</div>
                  <div>
                    <img className='h-20 w-20 animate-spin-slow' src='/public/assets/blue.png' alt="spinning graphic" />
                  </div>
                  <div className='flex text-center font-bold text-6xl'>Creativity</div>
                </div>

                <div className="flex flex-row justify-center item-center">
                  <div className='text-center mt-2 font-extralight text-3xl'>
                    Own Masterpieces Discover Art That Speaks to You
                  </div>
                </div>

                {/* home page button */}
                <div className='flex justify-center'>
                  <button className='px-8 py-4 mt-32 rounded-full bg-gray-900 ring-2 ring-pink-400 text-white font-medium'>
                    Explore products
                  </button>
                </div>
                <div className='flex justify-center mt-10'>
                  <img className="w-8 h-8 animate-bounce text-white opacity-20" src="/public/assets/down-arrow.svg" alt="down arrow" />
                </div>
              </div>

              {/* search section */}
              <div className='px-8 pt-10 text-3xl font-semibold'>
                Hey welcome back user1!!
              </div>
              <div className="flex ml-8 mt-10 justify-normal">
                <div className="flex space-x-10">
                <SearchBar />
                <CategoryButton />
                <CategoryButton />
                <CategoryButton />
                </div>
                
                
              </div>
               
              <div className='flex flex-row'>
                <Cards cardTitle="Art piece 1" productPrice="1289" />
                <Cards />
                <Cards />
                <Cards />
              </div>
              <div>
                <Footer/>
              </div>
              
       
              
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={LoginPage} />

        {/* Sign Up Page */}
        <Route path="/signup" element={ SignUpPage} />
      </Routes>
    </Router>
  );
}

export default App;
