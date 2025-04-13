import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import images from "../../../public/images/bg-2.png";
import { CiGift } from "react-icons/ci";
import { TbVectorBezierCircle } from "react-icons/tb";
import { BsFillSendFill } from "react-icons/bs";
import { MdSupport } from "react-icons/md";

function Home() {
  const card = [
    {
      icone: (
        <FaDownload className=" w-15 h-15 duration-300 text-white hover:translate-y-1" />
      ),
      title: "Download free",
      bio: "Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat ex his verear malorum, has repudiandae.",
    },
    {
      icone: (
        <IoSettingsSharp className=" w-15 h-15 duration-300 text-white hover:translate-y-1" />
      ),
      title: "Install software",
      bio: "Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat ex his verear malorum, has repudiandae.",
    },
    {
      icone: (
        <IoFolderOpenOutline className=" w-15 h-15 duration-300 text-white hover:translate-y-1" />
      ),
      title: "Buy licence",
      bio: "Unum liber commune in mel, ut pri tritani propriae menandri. Cum et magna porro intellegat ex his verear malorum, has repudiandae.",
    },
  ];

  return (
    <div>
      {/* main */}
      <div className="bg-[url('/images/bg.png')] bg-cover bg-center h-[300px]  sm:h-screen bg-gray-300">
        <div className=" flex justify-center items-center  py-0 sm:py-20 flex-col">
          <h1 className=" font-bold text-3xl text-gray-700 text-center  mb-5 ">
            Landing page and marketing website
          </h1>
          <p className=" mb-5 text-gray-700">
            Top marketing template in the bigest market place
          </p>
          <div className=" border-2 border-orange-500 mt-5 rounded-full flex justify-between shadow-xl min-w-md  bg-white  ">
            <input
              type="text"
              placeholder=" Enter your email"
              className=" focus:outline-none px-4  rounded-l-full text-gray-600 "
            />
            <div className="  bg-orange-500 rounded-r-full py-3  px-4 flex items-center j gap-1   ">
              <button className=" font-semibold text-white text-xl ">
                Get started
              </button>
              <span>
                <FaLongArrowAltRight className=" w-5 h-5 duration-300 text-white hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* mian2 */}
      <div className=" bg-gray-100 h-screen py-20">
        <div className=" flex justify-center items-center px-20 flex-col">
          <h1 className="  font-bold text-center mb-5  text-3xl text-gray-600 px-2   ">
            We are build awesome <br /> marketing template
          </h1>
          <p className="  md:px-40 text-center text-stone-600">
            Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut sed
            ornatus tibique, fabellas pertinax est cu. Te odio omittam mea, ea
            tractatos dissentiunt complectitur nec. Liber voluptatum ad vis.
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-10 mt-10">
          {card.map((item, index) => (
            <div
              key={index}
              className=" p-6 flex flex-col justify-center items-center px-10"
            >
              <div className="bg-orange-500 p-3 rounded-full text-white mb-5">
                {item.icone}
              </div>
              <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center">{item.bio}</p>
            </div>
          ))}
        </div>
        {/*  */}
        <div className=" bg-gray-50   px-20 py-10">
          <div className="  grid grid-cols-1 md:grid-cols-2 justify-center">
            <div>
              <img className=" w-[600px]" src={images} alt="pic" />
            </div>
            <div>
              <h1 className=" font-bold text-2xl mt-5 mb-5">
                landing page with lot features
              </h1>
              <p className=" text-gray-600 ">
                Et odio honestatis ius. Exerci numquam consequuntur no mei. Ut
                sed ornatus tibique, fabellas pertinax est cu. Te odio omittam
                mea, ea tractatos dissentiunt complectitur nec. Liber voluptatum
                ad vis, omnium perpetua at mel.
              </p>
              <div className=" flex justify-start mt-5 ">
                <div className=" grid  grid-cols-1 md:grid-cols-2 gap-5  min-w-sm ">
                  <span className=" flex items-center gap-2 font-semibold">
                    <CiGift className=" w-7 h-7" />
                    One package
                  </span>
                  <span className=" flex items-center gap-2 font-semibold">
                    <TbVectorBezierCircle className=" w-7 h-7" />
                    Vector included
                  </span>
                  <span className=" flex items-center gap-2 font-semibold">
                    <BsFillSendFill className=" w-7 h-7" />
                    Easy to use
                  </span>
                  <span className=" flex items-center gap-2 font-semibold">
                    <MdSupport className=" w-7 h-7" />
                    Support & Update
                  </span>
                </div>
              </div>
              <button className=" mt-5 bg-blue-500 text-white font-semibold rounded-full px-5 py-2 hover:bg-blue-600 duration-150 shadow-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
