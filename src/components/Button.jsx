import React from 'react'

function Button({ title }) {
  return (
    <div>
        <button className="bg-white text-black w-full md:w-auto px-18 py-3 rounded-full mt-2 hover:cursor-pointer transition-colors duration-300">
            {title}
          </button>
    </div>
  )
}

export default Button
