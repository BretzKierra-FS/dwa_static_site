import React from 'react';

const Header = () => {
  return (
    <header className="m-auto">
      <img src="/tent.svg" className="w-full absolute" />
      <img
        src="/logo.png"
        className="m-auto relative p-10 top-10 mr-10
      "
      />
    </header>
  );
};
export default Header;
