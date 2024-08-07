import React from "react";

const Loading = () => {
  return (
    <div className="justify-center flex items-center">
      <div className="flex-1 flex-grow py-40 text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full spinner mx-auto"></div>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
