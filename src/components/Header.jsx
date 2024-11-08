import React from 'react';

function Header() {
  return (
    <header className='bg-aawzBlack shadow-sm border-b-2 border-zinc-700'>
      <div className='justify-between max-w-5xl mx-auto px-4 py-4 flex items-center'>
        <i className='text-white font-pixelfy text-3xl font-bold'>Herik<span className='text-aawzMain'>.dev</span></i>
        
        <div className='hidden md:flex flex-col items-center'>
          <h1 className='text-white text-xl font-bold'>Desafio Estágio AAWZ Partners</h1>
          <h2 className='text-white font-bold'>React + Vite + Tailwind</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;
