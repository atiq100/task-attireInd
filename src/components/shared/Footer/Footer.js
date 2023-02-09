import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-100 ">
        <div className="justify-items-center">
          <img
            src="https://static.wixstatic.com/media/303f84_ea2515f22ca44e7ea2c5a190e52230d9~mv2.png/v1/fill/w_218,h_218,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ai%20(3).png"
            alt=""
          />
          <p className="-mt-16 text-2xl font-bold text-[#2A7C6F]">
            "You Always Desires"
          </p>
        </div>
        <div className="justify-items-center text-lg">
          <a className="link link-hover underline text-[#2A7C6F]">Home</a>
          <a className="link link-hover underline text-[#2A7C6F]">About us</a>
          <a className="link link-hover underline text-[#2A7C6F]">
            Western Sets
          </a>
          <a className="link link-hover underline text-[#2A7C6F]">Dresses</a>
          <a className="link link-hover underline text-[#2A7C6F]">
            All Attires
          </a>
          <a className="link link-hover underline text-[#2A7C6F]">
            Return & Exchange Policies
          </a>
          <a className="link link-hover underline text-[#2A7C6F]">
            Terms & Conditions
          </a>
          <a className="link link-hover underline text-[#2A7C6F]">
            Privacy Policies
          </a>
          <a className="link link-hover underline text-[#2A7C6F]">Contact Us</a>
          <div className="flex gap-2 text-xl">
            <FaInstagram></FaInstagram>
            <FaYoutube></FaYoutube>
            <FaWhatsapp></FaWhatsapp>
            <FaFacebook></FaFacebook>
          </div>
        </div>
        <div className="justify-items-center">
          <span className="font-extralight text-[#2A7C6F] text-3xl mb-3">
            Join the Club
          </span>
          <p className="text-[#2A7C6F]">
            Join our email list and get access to specials <br></br>
          </p>
          <span className="text-[#2A7C6F]">
            deals exclusive to our subscribers.
          </span>
          <span className="mt-2 mr-[34%] text-[#2A7C6F]">
            Enter your email here *
          </span>
          <form>
            <input
              type="text"
              name=""
              id=""
              className=" lg:w-60 py-3 pl-10 text-sm rounded-md sm:w-auto focus:outline-none border-2 border-[#2A7C6F] text-gray-900 "
            />
            <br></br>
            <button className=" ml-[24%] btn btn-primary w-32 mt-2 bg-[#2A7C6F] border-[#2A7C6F] hover:bg-white hover:border-2 hover:text-[#2A7C6F] hover:border-[#2A7C6F]">
              Sign Up
            </button>
          </form>
        </div>
      </footer>
      <div className="text-center text-[#2A7C6F] text-lg">
        <p>©2022 Attireind By Kirnesh</p>
      </div>
    </div>
  );
};

export default Footer;
