import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className='bg-white' style={{ fontFamily: 'Kanit, sans-serif', userSelect: 'none', backgroundSize: 'cover', backgroundImage: 'url("https://i.pinimg.com/originals/e3/ca/2c/e3ca2ceaaa243751d4de1ea9bc1f0834.jpg")' }}>
        <header style={{ fontFamily: 'Kanit, sans-serif' }} className='bg-black flex items-center justify-between pr-5 pl-5 md:pr-12 md:pl-12 md:h-28 font-bold text-white fixed w-full top-0 text-sm md:text-4xl h-20'>
          <div>
            <p>|</p>
          </div>
          <div>
            <a href="/">หน้าแรก</a>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <a href="#">ประสบการณ์</a>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <a href="#">โค้ด</a>
          </div>
          <div>
            <p>|</p>
          </div>
          <div>
            <a href="/programs.html">โปรแกรม</a>
          </div>
          <div>
            <p>|</p>
          </div>
        </header>
        <div className='animate-fade flex flex-col md:flex-row mt-20 md:mt-28 text-center md:text-left ' style={{ color: 'black' }}>
          <div className=''>
            <img src={isMobile ? "https://exsinnot.com/img/prof2.jpg" : "https://exsinnot.com/img/prof.png"} alt="profile" className='w-64 md:w-fb mx-auto md:ml-20 rounded-full md:rounded-none mt-5 ' />
          </div>
          <div className='md:w-1/2 mt-8 md:mt-24 md:ml-24'>
            <p className='text-4xl md:text-9xl font-semibold mb-4'>พงศธร</p>
            <p className='text-4xl md:text-9xl font-semibold mb-4'>พิพัฒน์ไพฑูรย์</p>
            <p className='text-lg md:text-3xl mb-4 md:ml-24'>[โปรแกรมเมอร์ ,นักศึกษา]</p>
            <p className='text-lg md:text-3xl mb-4 md:ml-24'>ชื่อเล่น = “อั๋น”</p>
            <p className='text-lg md:text-3xl mb-4 md:ml-24'>สถานศึกษา = “มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี”</p>
            <p className='text-lg md:text-3xl mb-4 md:ml-24'>อีเมล = “unn.pongsathorn2@gmail.com”</p>
            <p className='text-lg md:text-3xl mb-4 md:ml-24' onClick={()=>{
              window.open("https://www.facebook.com/WhyExsinnot/", "_blank");
            }}>Facebook = “พงศธร ตาอั๋น”</p>
            <p className='text-lg md:text-3xl mb-4 md:ml-24' onClick={()=>{
              window.open("https://github.com/Exsinnot/", "_blank");
            }}>Github = “Exsinnot”</p>


          </div>
        </div>
        <div className='md:h-3 h-1 w-3/4 bg-black m-auto md:mt-12 md:mb-12 mt-6 mb-6 rounded-lg'>
        </div>
        <div>
          <div className='h-fit w-fit md:p-4 p-2 m-auto text-center bg-gray-300 justify-center text-black md:text-4xl text-xl rounded-full font-bold'>
            <p >ทักษะและความสามารถ</p>
          </div>
          <div className='w-3/4 m-auto flex flex-col'>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png" alt="" />
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="" />
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="" />
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uwLyomLuj-z2wdukzRfaViu2o_urpD0h8eOGOdtcLQ&s" alt="" />
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10'></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" alt="" />
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10'></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png" alt="" />
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10'></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" />
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10'></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            <div className='w-full flex flex-row mt-5 h-10 md:h-64'>
              <div className='w-10 mr-10 m-auto md:w-32'>
                <p className='text-black font-bold text-lg md:text-4xl'>Other</p>
              </div>
              <div className='m-auto w-full h-fit border-2 border-black rounded-full'>
                <table className='w-full m-auto'>
                  <tr>
                    <th className='rounded-l-full border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 bg-green-500'></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10 '></th>
                    <th className='border-r-2 border-black w-1/12 h-3 md:h-10'></th>
                    <th className='w-1/12 h-3 md:h-10'></th>
                  </tr>
                </table>
              </div>
            </div>
            
            
          </div>
        </div>
        <footer>

        </footer>
      </div>
    </>
  )
}

export default App
