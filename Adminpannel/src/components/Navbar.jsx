import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl">
        <img src="https://media.licdn.com/dms/image/v2/D4D0BAQFQ6sFIgZncMg/company-logo_200_200/company-logo_200_200/0/1697705568505?e=2147483647&v=beta&t=s9tHs8Fq5xCuRpqXmO81GJcWElaWFs2JumQs82cPzpI" alt="Logo" className="h-8 inline-block mr-2" />
        Koshish Admin 
      </div>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </nav>
  )
}

export default Navbar