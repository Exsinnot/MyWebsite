import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://exsinnot.com/api/GetPrograms.php')
      .then(response => {
        const dataFromApi = response.data;
        const newData = [];
        for (let i = 0; i < dataFromApi.length; i += 2) {
          newData.push(
            
            <div key={i * 10} className='w-full h-full flex flex-col md:flex-row'>
              <div key={i} className='w-full h-full md:w-1/2 block'>
                <div className='flex flex-col w-3/4 h-3/4 bg-green-200 m-auto mt-4 mb-4 md:mt-6 md:mb-6 rounded-3xl pt-10 text-center' onClick={() => {
                  window.open(dataFromApi[i].Link, "_blank");
                }}>
                  <img src={dataFromApi[i].Image} alt="" className='h-4/6 rounded-3xl m-auto' />
                  <div className='m-auto'>
                    <p className='font-bold md:text-4xl'>{dataFromApi[i].Name}</p>
                  </div>
                </div>
              </div>
              {i + 1 < dataFromApi.length && (
                <div key={i + 1} className='w-full h-full md:w-1/2 block'>
                  <div className='flex flex-col w-3/4 h-3/4 bg-green-200 m-auto mt-4 mb-4 md:mt-6 md:mb-6 rounded-3xl pt-10 text-center' onClick={() => {
                    window.open(dataFromApi[i + 1].Link, "_blank");
                  }}>
                    <img src={dataFromApi[i + 1].Image} alt="" className='h-4/6 rounded-3xl m-auto' />
                    <div className='m-auto'>
                      <p className='font-bold md:text-4xl'>{dataFromApi[i + 1].Name}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        }
        setData(newData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='bg-white' style={{ fontFamily: 'Kanit, sans-serif', userSelect: 'none' }}>
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
      <div className='animate-fade h-svh block mt-20 md:mt-36 text-center md:text-left ' style={{ color: 'black' }}>
        {data}
      </div>
    </div>
  );
}

export default App;
