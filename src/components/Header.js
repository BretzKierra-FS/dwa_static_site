import React from 'react';

const Header = () => {
  return (
    <header className="m-auto">
      <img src="/tent.svg" className="w-full absolute" />
      <img
        src="/logo.png"
        className="m-auto relative pt-20
      "
      />
    </header>
  );
};
export default Header;
