import React from "react";
import FirstImg from "../../assets/barber.png";
import SecondImg from "../../assets/brow.png";
import ThirdImg from "../../assets/nail.png";
import FourthImg from "../../assets/parlorIcon.png";
import FifthImg from "../../assets/skincare.png";
import SixthImg from "../../assets/img3.png";
import SeventhImg from "../../assets/search-icon.png"
import "./body.css";

const Body = () => {
  return (
    <div>
      <div className="text-lg justify-center capitalize text-bold font-serif">
        Are you looking for
      </div>
      <div className="flex justify-center gap-8 my-7 w-90 m-auto max-width">
        <div className="bg-slate-100 flex flex-col p-7 w-40 items-center text-center rounded-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <img src={FourthImg} className="w-10 h-10 " />
          <h1 className="mt-3 text-md text-bold font-serif capitalize">
            Hair & salon
          </h1>
        </div>
        <div className="bg-slate-100  flex flex-col p-7 w-40 items-center text-center rounded-lg  hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <img src={ThirdImg} className="w-10 h-10 " />
          <h1 className="mt-3 text-md text-bold font-serif capitalize">
            Hair & salon
          </h1>
        </div>
        <div className="bg-slate-100  flex flex-col p-7 w-40 items-center text-center rounded-lg  hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <img src={SecondImg} className="w-10 h-10 " />
          <h1 className="mt-3 text-md text-bold font-serif capitalize">
            Hair & salon
          </h1>
        </div>
        <div className="bg-slate-100  flex flex-col p-7 w-40 items-center text-center rounded-lg  hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <img src={FirstImg} className="w-10 h-10 " />
          <h1 className="mt-3 text-md text-bold font-serif capitalize">
            Hair & salon
          </h1>
        </div>
        <div className="bg-slate-100  flex flex-col p-7 w-40 items-center text-center rounded-lg  hover:shadow-2xl transition-all duration-500 cursor-pointer">
          <img src={FifthImg} className="w-10 h-10 " />
          <h1 className="mt-3 text-md text-bold font-serif capitalize">
            Hair & salon
          </h1>
        </div>
      </div>

      {/* new section starts */}

      <div className="my-20">
        <div className="text-lg justify-center capitalize text-extrabold font-serif">
          Glosifi Recommended Parlors
        </div>
        {/* <div style={{backgroundImage: `url(${SixthImg})`}} className="w-10 h-10 flex justify-center gap-8 my-7 w-90">
          <div className="flex flex-col p-7 w-40 items-center text-center rounded-lg cursor-pointer">
            <h1 className="mt-3 text-md text-bold font-serif capitalize">
              Hair & salon
            </h1>
          </div>
        </div> */}
        <div className="flex items-center justify-center my-8">
          <div className=" h-full relative mx-5 ">
            <div className="w-full h-40 rounded-lg">
              <img
                src={SixthImg}
                className="w-full h-full rounded-lg object-cover object-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="absolute z-10 top-1/3 left-3 bg-white rounded-full px-3 py-2 w-[85%]">
              <h2>ABC Salon</h2>
            </div>
          </div>
          <div className=" h-full relative mx-5 ">
            <div className="w-full h-40 rounded-lg">
              <img
                src={SixthImg}
                className="w-full h-full rounded-lg object-cover object-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="absolute z-10 top-1/3 left-3 bg-white rounded-full px-3 py-2 w-[85%]">
              <h2>ABC Salon</h2>
            </div>
          </div>
          <div className=" h-full relative mx-5 ">
            <div className="w-full h-40 rounded-lg">
              <img
                src={SixthImg}
                className="w-full h-full rounded-lg object-cover object-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="absolute z-10 top-1/3 left-3 bg-white rounded-full px-3 py-2 w-[85%]">
              <h2>ABC Salon</h2>
            </div>
          </div>
          <div className=" h-full relative mx-5 ">
            <div className="w-full h-40 rounded-lg">
              <img
                src={SixthImg}
                className="w-full h-full rounded-lg object-cover object-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="absolute z-10 top-1/3 left-3 bg-white rounded-full px-3 py-2 w-[85%]">
              <h2>ABC Salon</h2>
            </div>
          </div>
          <div className=" h-full relative mx-5 ">
            <div className="w-full h-40 rounded-lg">
              <img
                src={SixthImg}
                className="w-full h-full rounded-lg object-cover object-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <div className="absolute z-10 top-1/3 left-3 bg-white rounded-full px-3 py-2 w-[85%]">
              <h2>ABC Salon</h2>
            </div>
          </div>
        </div>
      </div>

      {/* new section starts */}

      <div className="mx-5">
        <div className="justify-center max-width m-auto">
          <h1 className="text-4xl text-semibold capitalize font-serif">
            A simple way to your beauty search
          </h1>
          <p className="text-md mt-4 para-width font-sans text-bold">
            Discover and book appointments with top beauty and wellness
            professionals effortlessly with Glosifi. Whether you're looking for
            a relaxing massage, a rejuvenating facial, or a stylish haircut, our
            platform connects you with a wide range of trusted beauty and
            wellness organizations. Enjoy the convenience of browsing services,
            checking real-time availability, and securing your appointment in
            just a few clicks. With Glosifi, self-care has never been easier.
          </p>
        </div>
        <div className="flex mt-8 max-width m-auto">
        <div className="flex flex-col gap-3 items-center w-1/5 m-auto justify-center">
          <div className="flex gap-4">
            <img src={SeventhImg} className="w-8 h8"/>
            <h1 className="text-lg text-bold">Search</h1>
          </div>
          <div className="text-lg text-gray-500">
            <p>Choose a individual or a salon nearby for service.</p>
          </div>
          <div className="border-2 border-cyan-200">
          <h1 className="p-5 w-5 h-2.5 flex justify-center items-center bg-red-300 rounded-full">1</h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center w-1/5 m-auto justify-center">
          <div className="flex gap-4">
            <img src={SeventhImg} className="w-8 h8"/>
            <h1 className="text-lg text-bold">Search</h1>
          </div>
          <div className="text-lg text-gray-500">
            <p>Choose a individual or a salon nearby for service.</p>
          </div>
          <div className="border-2 border-cyan-200">
          <h1 className="p-5 w-5 h-2.5 flex justify-center items-center bg-red-100 rounded-full">2</h1>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center w-1/5 m-auto justify-center">
          <div className="flex gap-4">
            <img src={SeventhImg} className="w-8 h8"/>
            <h1 className="text-lg text-bold">Search</h1>
          </div>
          <div className="text-lg text-gray-500">
            <p>Choose a individual or a salon nearby for service.</p>
          </div>
          <div className="border-2 border-cyan-200">
          <h1 className="p-5 w-5 h-2.5 flex justify-center items-center bg-gray-200 rounded-full">3</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Body;
