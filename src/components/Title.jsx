import React from 'react'

export default function Title({title}) {
  return (
    <div className="mt-16 mb-8">
      <h1 className="font-bold drop-shadow-lg filter  text-left text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-slate-900 ">
        {title}
      </h1>
    </div>
  );
}
