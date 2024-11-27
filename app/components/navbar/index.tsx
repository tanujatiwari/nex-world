"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Img from "../../shared/Img";
import ListItem from "../../shared/ListItem";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const slideNav = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY >= 100) {
          navbar.classList.add("active");
        } else {
          navbar.classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", slideNav);
    return () => window.removeEventListener("scroll", slideNav);
  }, []);

  const pathname = usePathname();
  const [isActive, setIsActive] = useState("");
  const routes = [
    { name: "Home", path: "/", key: "home" },
    { name: "Our Story", path: "#ourStory", key: "shop" },
    { name: "Our Services", path: "/", key: "pages" },
  ];

  return (
    <>
      <div className="sticky z-30 px-5" id="navbar">
        <div
          className={`flex items-center relative z-20 justify-between py-6 container-sm`}
        >
          <Img
            alt=""
            src="/images/logo.svg"
            isLocal
            height={40}
            width={100}
            role="button"
            className="h-10 object-cover"
            onClick={() => router.push("/")}
          />
          <div className="flex md:gap-x-8 gap-x-4 items-center">
            <ul className="lg:flex hidden w-fit gap-x-8 font-semibold">
              {routes.map((item, idx) => (
                <ListItem
                  key={idx}
                  name={item?.name}
                  isSelected={pathname
                    ?.toLowerCase()
                    .includes(item?.key?.toLowerCase())}
                  activeColor="text-primary2"
                  onClick={() => router.push(item.path)}
                />
              ))}
            </ul>
            <Link href={' '} className="flex items-center gap-x-2">
              <FaWhatsapp size={20} className="text-primary" />
              <span className="lg:block hidden"> Whatsapp</span>
            </Link>

            <GiHamburgerMenu
              className="sm:hidden"
              size={24}
              onClick={() =>
                setIsActive(isActive === "SIDEBAR" ? "" : "SIDEBAR")
              }
            />
          </div>
        </div>
        {/* {isActive === "ENQUIRY_MODAL" && (
          <EnquiryModal close={() => setIsActive("")} className="mx-5" />
        )} */}
      </div>
      {isActive === "SIDEBAR" && (
        <div
          className="bg-white h-screen w-full space-y-6 py-2 px-4 fixed top-0"
          id="sideBar"
        >
          <div className="flex justify-between items-center">
            <Img
              alt=""
              src="/images/logo.svg"
              isLocal
              height={40}
              width={100}
              role="button"
              className="h-10 object-cover"
              onClick={() => router.push("/")}
            />
            <div
              className="cursor-pointer text-4xl p-3"
              onClick={() => setIsActive("")}
            >
              &times;
            </div>
          </div>
          <div className={`space-y-5 font-extrabold mr-5`}>
            {routes?.map((item, idx) => (
              <div
                key={idx}
                className={`cursor-pointer animate-accordion ${
                  pathname?.toLowerCase().includes(item?.key?.toLowerCase()) &&
                  "text-primary2"
                }`}
                onClick={() => {
                  router.push(item.path);
                  setIsActive("");
                }}
              >
                {item?.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
