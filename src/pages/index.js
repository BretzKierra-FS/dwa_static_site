import React, { useState } from 'react';

function HomePage() {
  const [showGifModal, setShowGifModal] = useState(false);

  const openGifModal = () => {
    setShowGifModal(true);
  };

  const closeGifModal = () => {
    setShowGifModal(false);
  };

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center bg-spaceCadet">
      <h1 className="text-5xl font-bold mb-4 text-persianGreen">
        Welcome to My Website
      </h1>
      <p className="text-xl mb-8 text-giantOrange">Professor!</p>
      <a
        onClick={openGifModal}
        href="#"
        className="bg-crimson rounded-full p-5"
      >
        Let's Get Started
      </a>
      <p className="mt-4 text-sm text-mindaro">
        Powered by React and Tailwind CSS
      </p>

      {showGifModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        >
          <div className="bg-white p-8 rounded-lg">
            <iframe
              src="https://giphy.com/embed/eoRw2qFBIxk1q"
              width="480"
              height="235"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/dancing-leonardo-dicaprio-eoRw2qFBIxk1q">
                via GIPHY
              </a>
            </p>
            <button
              onClick={closeGifModal}
              className="bg-crimson text-white px-4 py-2 mt-4 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
