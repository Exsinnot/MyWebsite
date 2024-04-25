import { useState } from 'react'

import './App.css'

function App() {
  var datapro = {
    "name": ['QRCode Generate',],
    "id": ['0',],
    "link": ['https://exsinnot.com/pro/QR_Gen.html',],
    "img": ['https://exsinnot.com/img/exsinnot.png',],
  }
  var data = [];
  var max = datapro['id'].length;
  for (let index = 0; index < max; index += 2) {
    let jsxElement = (
      <div key={index * 10} className='w-full h-full flex flex-col md:flex-row'>
        <div key={index} className='w-full h-full md:w-1/2 block'>
            <div className='flex flex-col w-3/4 h-3/4 bg-green-200 m-auto mt-4 mb-4 md:mt-6 md:mb-6 rounded-3xl pt-10 text-center' onClick={() => {
              window.open(datapro["link"][index], "_blank");
            }}>
              <img src={datapro["img"][index]} alt="" className=' h-4/6 rounded-3xl m-auto' />
              <div className='m-auto'>
                <p className='font-bold md:text-4xl'>{datapro["name"][index]}</p>
              </div>
            </div>
          </div>
          <div key={index+1} className='w-full h-full md:w-1/2 block'>
            <div className='flex flex-col w-3/4 h-3/4 bg-green-200 m-auto mt-4 mb-4 md:mt-6 md:mb-6 rounded-3xl pt-10 text-center' onClick={() => {
              window.open(datapro["link"][index+1], "_blank");
            }}>
              <img src={datapro["img"][index+1]} alt="" className='h-4/6 rounded-3xl m-auto' />
              <div className='m-auto'>
                <p className='font-bold md:text-4xl'>{datapro["name"][index+1]}</p>
              </div>
            </div>
          </div>
      </div>
    );

    if (index + 2 > max) {
      jsxElement = (
        <div key={index * 10} className='w-full h-1/2 md:h-full flex flex-col md:flex-row'>
          <div key={index} className='w-full h-full md:w-1/2 block'>
            <div className='flex flex-col w-3/4 h-3/4 bg-green-200 m-auto mt-4 mb-4 md:mt-6 md:mb-6 rounded-3xl pt-10 text-center' onClick={() => {
              window.open(datapro["link"][index], "_blank");
            }}>
              <img src={datapro["img"][index]} alt="" className='h-4/6 rounded-3xl m-auto' />
              <div className='m-auto'>
                <p className='font-bold md:text-4xl'>{datapro["name"][index]}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    data.push(jsxElement);
  }

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
  )
}

export default App
