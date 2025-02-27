import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; 2025 Koshish. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">Instagram</a>
        </div>
      </div>
   </footer>
  )
}

export default Footer