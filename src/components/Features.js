import React from 'react'
import Personalization from '../assets/images/personalization.svg'
import Innovation from '../assets/images/innovative.svg'
import Efficient from '../assets/images/efficient.svg'
function Features() {
  return (
    <>
    
    <section class="container mx-auto px-12 py-28 feature-container" data-aos="fade-zoom-in"
       >
        <div className="text-center">
<h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                Best Benefits for <span class="text-indigo-600">small and medium businesses</span>
            </h3>
            </div>
        <div class="flex flex-col space-y-24 sm:flex-row sm:space-y-0 sm:space-x-8 mt-20">
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Personalized"
                class="mx-auto mb-4 h-16 t"
                src={Personalization}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 black-feature-text md:text-xl">
                Personalized
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                  Each project designed to ensure a personalized experience for your brand/company
              </p>
            </div>
            
          </div>
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Multi layer security"
                class="mx-auto mb-4 h-16 "
                src={Efficient}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl black-feature-text">
                Efficient
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Swift project delivery, meeting dealines without compromising on quality
              </p>
            </div>
            
          </div>
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Meaningful insight"
                class="mx-auto mb-4 h-16 "
                src={Innovation}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
                Meaningful insight
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Visualize transactions with multiple chart option to get insight
                as you need.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    
    </>
  )
}

export default Features