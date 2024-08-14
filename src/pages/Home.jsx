import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-28">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="flex justify-center">
          <img src={`${process.env.PUBLIC_URL}dist/img/avademoportfo.jpg`} alt="Image" className="rounded-full w-2/3 md:w-full"/>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl my-10 font-bold">Phạm Đình Văn</h1>
          <p className="text-lg md:text-2xl leading-relaxed text-justify">
            I'm Pham Dinh Van, a software developer, student at HUIT university specialized in 
            <strong> Software Technology</strong>. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Recusandae ducimus in dignissimos alias tempore provident soluta labore perspiciatis voluptate quis.
          </p>
          <button className="p-3 bg-green-700 text-white w-full md:w-96 h-16 md:h-20 mt-5 text-xl md:text-2xl">
            Let's Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
