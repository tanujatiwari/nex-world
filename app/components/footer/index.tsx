import HoverText from "@/app/shared/HoverText";
import Social from "@/app/shared/cards/Social";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#151617] text-white">
      <div className="grid md:grid-cols-2 py-20 container-lg px-5 gap-x-5 gap-y-10">
        <div className="text-5xl max-w-[430px]">
          Crafting Excellence, One Hanger at a Time.
        </div>
        <div className="grid grid-cols-2 max-[450px]:grid-cols-1 gap-5 max-[450px]:gap-8">
          <div className="space-y-6 max-w-64">
            <div className="text-xl font-semibold">Address</div>
            <p className="text-lg text-[#d2d3d5]">
              695, Sector 37, Pace City 2, Gurugram, Haryana-122001
            </p>
            {/* <div className="flex gap-x-5">
              <Social link="">
                <FaFacebookF />
              </Social>
              <Social link="">
                <FaTwitter />
              </Social>
              <Social link="">
                <FaInstagram />
              </Social>
            </div> */}
          </div>
          <div className="space-y-6 max-w-64">
            <div className="text-xl font-semibold">Say Hello</div>
            <div>
              <HoverText
                text="kavihangbro@gmail.com"
                link="mailto:kavihangbro@gmail.com"
                styleBottomLine="group-hover:w-40"
              />
            </div>
            <div>
              <Link
                href="tel:+91 99102 33400"
                className="text-xl cursor-pointer font-semibold"
              >
                +91 99102 33400
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-neutral-600" />
      <div className="flex md:flex-row gap-y-4 flex-col items-center md:justify-between justify-center container-lg px-5 py-6">
        <div className="flex gap-x-6">
          {[
            { label: "About Us", link: "/about" },
            { label: "Our Products", link: "/products" },
            { label: "Contact", link: "/contact" },
          ]?.map((item, idx) => (
            <HoverText
              key={idx}
              text={item?.label}
              link={item?.link}
              styleBottomLine="!w-0 group-hover:!w-full"
            />
          ))}
        </div>
        <div className="sm:text-lg text-sm text-[#d2d3d5]">
          Kavi Hangers © 2024. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
