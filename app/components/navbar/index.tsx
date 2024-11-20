import { ProductContext } from "@/app/contexts/Context";
import Img from "@/app/shared/Img";
import ListItem from "@/app/shared/ListItem";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlBag } from "react-icons/sl";

const Navbar = () => {
  const router = useRouter();
  const { data, setData } = useContext(ProductContext);

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

  useEffect(() => {
    setData({
      cart: JSON.parse(window.localStorage.getItem("cart") || "[]"),
    });
  }, [setData]);
  const pathname = usePathname();
  const [isActive, setIsActive] = useState("");
  const routes = [
    { name: "Home", path: "/", key: "home" },
    { name: "Our Products", path: "/products", key: "products" },
    { name: "About", path: "/about", key: "about" },
    {
      name: "Contact Us",
      path: "/contact",
      key: "contact",
    },
  ];
  // useScrollHidden(isActive === "ENQUIRY_MODAL");

  return (
    <>
      <div className="sticky z-20 px-5" id="navbar">
        <div
          className={`flex items-center relative z-10 justify-between py-8 ${pathname?.includes("/products") ? "container sm:px-5 mx-auto" : "container-sm"}`}
        >
          <Img
            alt=""
            src="/images/icons/logo.png"
            isLocal
            height={20}
            width={202.21}
            role="button"
            onClick={() => router.push("/")}
          />
          <div className="flex gap-x-8 items-center">
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
            <div className="flex items-center gap-x-6">
              <div className="flex items-center w-fit gap-x-8">
                <div
                  className="relative cursor-pointer"
                  onClick={() => router.push("/cart")}
                >
                  <SlBag className="h-[34px] w-[22px]" />
                  <div className="h-[15px] w-[15px] bg-primary flex items-center justify-center text-[10px] text-white rounded-full absolute -right-1 font-bold bottom-0">
                    {data?.cart?.length}
                  </div>
                </div>
              </div>
              <GiHamburgerMenu
                className="sm:hidden"
                size={24}
                onClick={() =>
                  setIsActive(isActive === "SIDEBAR" ? "" : "SIDEBAR")
                }
              />
            </div>
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
              src="/images/icons/logo.png"
              isLocal
              height={20}
              width={202.21}
              role="button"
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
