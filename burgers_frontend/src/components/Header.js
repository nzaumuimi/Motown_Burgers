import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#fff3e0]">
      <div className="logo text-2xl font-bold">Burger</div>
      <nav>
        <ul className="flex space-x-4">
          {['Popular', 'Delivery', 'Contact'].map((item) => (
            <li key={item}>
              <button className="px-4 py-2 text-gray-700 hover:bg-yellow-200 rounded-md transition duration-300">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;