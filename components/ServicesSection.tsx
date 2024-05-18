import React from "react";
import { Meteors } from "./ui/meteors";

const cardData = [
  {
    title: "First Draft in 1-2 Business Days",
    description: "Keep your projects moving forward and reliably hit deadlines."
  },
  {
    title: "Unlimited Revisions",
    description: "Lengthy review cycles will be a thing of the past."
  },
  {
    title: "Real-Time Collaboration",
    description: "Never get left on 'read.' Your project manager responds to every message within an hour (US Central Time)."
  },
  {
    title: "Project Dashboard",
    description: "Easily view all your projects in one place."
  },
  {
    title: "Licensed Music & Stock Footage",
    description: "Forget about copyright claims or sourcing the right music, SFX, and stock."
  },
  {
    title: "Transparent Pricing",
    description: "Feel confident in staying on-budget."
  }
];


export function ServicesSection() {
  return (
    <div className="py-20 mx-auto flex items-center justify-center flex-col  max-w-6xl">
      <h1 className="text-4xl sm:text-7xl  drop-shadow-lg my-5 font-bold text-center">The Benefits of <span className="
       bg-gradient-to-l text-transparent bg-clip-text from-red-500 animate-shimmer transition-colors bg-[length:200%_100%] to-yellow-400
      ">Gha</span>Media</h1>
      <p className=" text-balance sm:text-2xl font-medium mb-6 text-gray-400">An on-demand team at your fingertips.</p>

      <section className="flex gap-5 items-center justify-center flex-wrap">

      {cardData.map((card, index) => (
        <div key={index} className="w-full relative max-w-xs mb-4">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              {card.title}
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              {card.description}
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      ))}

      </section>

     
    </div>
  );
}
