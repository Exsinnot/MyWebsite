import React, { useState } from 'react';
import './App.css';

function App() {
  const [qrCodeImage, setQrCodeImage] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');

  const handleInputChange = (event) => {
    setQrCodeData(event.target.value);
  };

  const handleGenerateQR = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://exsinnot.com:8080/GenQr?text=${encodeURIComponent(qrCodeData)}`, true);
    xhr.responseType = 'blob';
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        const imageUrl = URL.createObjectURL(xhr.response);
        setQrCodeImage(imageUrl);
      } else {
        console.error('Failed to generate QR code:', xhr.statusText);
      }
    };

    xhr.onerror = function() {
      console.error('Error fetching QR code');
    };

    xhr.send();
  };

  const handleDownload = () => {
    if (!qrCodeImage) {
      console.error('No QR code image to download');
      return;
    }
    const link = document.createElement('a');
    link.href = qrCodeImage;
    link.download = 'QR.png';
    link.click();
  };

  return (
    <div className='flex flex-col' style={{ fontFamily: 'Kanit, sans-serif', userSelect: 'none' }}>
      <div className='m-auto w-full text-center mt-20'>
        <input
          type="text"
          value={qrCodeData}
          onChange={handleInputChange}
          className='rounded-full w-3/4 h-fit p-4 drop-shadow-2xl border-2 border-black text-center text-2xl'
          placeholder='Enter Text'
        />
      </div>

      {qrCodeImage && (
        <div className='m-auto w-full text-center mt-5'>
          <img
            className='m-auto'
            src={qrCodeImage}
            alt="QR Code"
            style={{ width: '200px', height: '200px' }}
          />
        </div>
      )}

      <div className='m-auto w-full text-center mt-5'>
        <div
          onClick={handleGenerateQR}
          className='m-auto cursor-pointer bg-green-200 rounded-3xl w-fit h-fit text-4xl md:text-6xl p-4 drop-shadow-xl'
        >
          Gen QR
        </div>
      </div>

      {qrCodeImage && (
        <div className='m-auto w-full text-center mt-10'>
          <div
            className='m-auto cursor-pointer bg-green-200 rounded-3xl w-fit h-fit text-2xl md:text-6xl p-4 drop-shadow-xl mb-20'
            onClick={handleDownload}
          >
            Download QR
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
