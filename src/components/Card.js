import React from 'react'

function Card() {
  return (
    <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden glassmorphism-bg " style={{color: "white"}}>
    <div class="p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4" style={{color: 'white'}}>Our Services</h2>
      <ul class="space-y-2 mb-4">
        <li class="flex items-start">
          <svg class="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L9 10.586 5.707 7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-600">Showcase Your Work</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L9 10.586 5.707 7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-600">Attract Potential Clients</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L9 10.586 5.707 7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-600">Professional Branding</span>
        </li>
        <li class="flex items-start">
          <svg class="w-6 h-6 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 4.293a1 1 0 00-1.414 0L9 10.586 5.707 7.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
          <span class="text-gray-600">Easy Updates</span>
        </li>
      </ul>
      <button class="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
        View Examples
      </button>
    </div>
  </div>
  )
}

export default Card