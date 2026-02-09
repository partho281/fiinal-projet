import React from 'react';

const NotFound= () => {
    return (
         <div className="min-h-screen flex items-center justify-center bg-[#34C9B6] px-4">
      <div className="text-center bg-white rounded-2xl shadow-lg p-6 sm:p-10 max-w-md w-full">
        
        <div className="text-6xl mb-4">🤔</div>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#34C9B6]">
          404
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mt-4">
          Uh-oh! The page you’re trying to reach isn’t here.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 w-full sm:w-auto px-6 py-3 bg-[#34C9B6] text-white rounded-lg font-medium hover:opacity-90 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
    );
};

export default NotFound;