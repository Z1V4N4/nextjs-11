import React from 'react';

const HeaderButton = ({ children }) => {
  return (
    <button className="flex justify-center items-center w-10 h-10 rounded-3xl bg-muf-dark-blue-100 dark:bg-muf-general-black hover:bg-muf-dark-blue-90 hover:dark:bg-muf-light-black">
      {children}
    </button>
  );
};

export default HeaderButton;