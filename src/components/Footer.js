import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const backgroundColor = '#1B998B';

  const footerStyle = {
    backgroundColor,
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    marginTop: '30ch',
  };

  return (
    <footer style={footerStyle}>
      &copy; {currentYear} Created by Kierra Bretz
    </footer>
  );
};

export default Footer;
