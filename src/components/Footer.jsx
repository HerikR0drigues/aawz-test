import React from 'react';

function Footer() {
  return (
    <footer className='bg-aawzBlack mt-auto'>
        <div className='text-center max-w-5xl mx-auto px-4 py-4 text-white'>
          Desafio estágio AAWZ Partners &copy; {new Date().getFullYear()} Herik.Dev
        </div>
    </footer>
  );
}

export default Footer;
