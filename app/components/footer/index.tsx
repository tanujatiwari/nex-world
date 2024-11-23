"use client";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="sm:px-8 sm:pb-8 px-5 pb-5 mt-20">
      <div className="bg-[#171408] p-10 rounded-3xl text-white">
        <div className="md:flex justify-between gap-y-[10px] space-y-10">
          <div className="space-y-5 md:max-w-[300px]">
            <div className="space-y-[10px]">
              <div className="text-lg">Sign up to NexWorld</div>
              <p className="text-neutral-400">
                Your design partner to facilitate your growth journey.
              </p>
            </div>
            <div className="relative flex items-center">
              <input
                className="h-14 rounded-full pl-5 text-sm bg-white outline-none w-full"
                placeholder="your@email.com"
              />
              {/* <Button className="absolute right-0 h-11 mr-2">Sign Up</Button> */}
            </div>
          </div>
          <ul className="space-y-[10px] mr-20">
            {[
              { label: "About", link: "#About" },
              { label: "Contact", link: "#Contact" },
              { label: "Pricing", link: "#Pricing" },
              { label: "Testimonials", link: "#Testimonials" },
            ]?.map((item, idx) => (
              <li
                key={idx}
                className="text-neutral-400 hover:text-white duration-500 cursor-pointer"
              >
                <a href={item.link} className="block">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[1px] bg-neutral-600 w-full mt-20" />
        <div className="mt-5 flex justify-between md:items-center">
          <div className="text-white text-xs md:flex-row flex-col flex gap-3">
            <div> Design by Dk</div>
            <ul className="text-[#646464] gap-3 md:flex-row flex-col flex">
              <li>&copy; 2024 NexWorld</li>
              <li>All rights reserved</li>
              <li>All images are for demo purpose only</li>
            </ul>
          </div>
          <div className="flex gap-x-3">
            <Link href="" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram
                className="text-white hover:rotate-[360deg] duration-500 cursor-pointer"
                size={30}
              />
            </Link>
            {/* <FaTwitter
            className="text-white hover:rotate-[360deg] duration-500 cursor-pointer"
            size={20}
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
