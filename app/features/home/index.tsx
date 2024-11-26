"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import ProductCard from "../../shared/cards/ProductCard";
import StatsCard from "../../shared/cards/StatsCard";
import Img from "../../shared/Img";
import {
  SvgArc,
  SvgFreeShipping,
  SvgMoney,
  SvgPayment,
  SvgSupport,
} from "../../svgs";
import clsx from "clsx";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import useHook from "./useHook";
import { ReactNode } from "react";
const Home = () => {
  const stats = [
    {
      title: "Free Shipping",
      subtitle: "Free Shipping for orders",
      icon: <SvgFreeShipping />,
    },
    {
      title: "Money Guarantee",
      subtitle: "Within 30 days",
      icon: <SvgMoney />,
    },
    {
      title: "Online Support",
      subtitle: "24 hours a day, 7 days a week",
      icon: <SvgSupport />,
    },
    {
      title: "Flexible Payment",
      subtitle: "Pay with Multiple Credit Cards",
      icon: <SvgPayment />,
    },
  ];
  const ArrowLeft = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="border border-tertiary bg-white absolute z-20 top-[45%] left-5 duration-300 h-10 w-10 cursor-pointer rounded-full flex justify-center items-center"
    >
      <IoIosArrowBack size={18} className="text-black mr-[2px]" />
    </div>
  );

  const ArrowRight = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="border border-tertiary bg-white absolute z-20 top-[45%] right-5 h-10 w-10 duration-300 cursor-pointer rounded-full flex justify-center items-center"
    >
      <IoIosArrowForward size={18} className="text-black ml-1" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };
  const HERO_VERTICAL_SETTING = {
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const InputFields: {
    label: string;
    placeholder: string;
    type: "text" | "tel" | "email";
    key: "name" | "phone" | "email" | "description";
    icon?: ReactNode;
    required: boolean;
    rows?: number;
  }[] = [
    {
      label: "Name",
      placeholder: "e.g. Rahul Mehra",
      type: "text",
      key: "name",
      icon: (
        <AiOutlineUser
          size={16}
          className="absolute top-3 left-4 text-gray-400"
        />
      ),
      required: true,
    },
    {
      label: "Phone",
      placeholder: "Enter phone number",
      type: "tel",
      key: "phone",
      icon: (
        <MdOutlineEmail
          size={16}
          className="absolute top-3 left-4 text-gray-400"
        />
      ),
      required: true,
    },
    {
      label: "Email Address",
      placeholder: "e.g. name@mango.com",
      type: "email",
      key: "email",
      icon: (
        <MdOutlineEmail
          size={16}
          className="absolute top-3 left-4 text-gray-400"
        />
      ),
      required: true,
    },
    {
      label: "Message",
      placeholder: "Type your message here",
      type: "text",
      key: "description",
      rows: 4,
      required: false,
    },
  ];
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useHook();
  return (
    <div className="container-sm mx-auto space-y-20 mt-10 px-5">
      <div className="md:text-6xl sm:text-5xl text-4xl font-semibold md:leading-[74px]">
        Elevate Your Lifestyle<br></br>{" "}
        <div className="flex max-[1100px]:block gap-x-3">
          with Our Next generation{" "}
          <Slider {...HERO_VERTICAL_SETTING} className="max-w-[310px]">
            {["Kitchen", "Wardrobes", "& More"]?.map((item, idx) => (
              <span className="text-primary" key={idx}>
                {item}
              </span>
            ))}
          </Slider>
        </div>
      </div>
      <div className="space-y-3 max-[640px]:!mt-10">
        <Slider {...settings} dots={false}>
          {[
            "/images/slide1.png",
            "/images/slide2.png",
            "/images/slide3.png",
          ].map((item, idx) => (
            <Img
              src={item}
              key={idx}
              alt={item}
              className="rounded-[20px] max-h-[490px] object-cover"
              height={490}
              width={1000}
              isLocal
            />
          ))}
        </Slider>
        <div className="grid grid-cols-12 gap-3">
          <div className="grid sm:grid-cols-2 gap-3 lg:col-span-8 col-span-12 h-full">
            <ProductCard
              data={{ image: "/images/kitchen.png", text: "Kitchen" }}
              className="h-[350px]"
            />
            <ProductCard
              data={{ image: "/images/wardrobes.png", text: "Wardrobes" }}
              className="h-[350px]"
            />
          </div>

          <div className="gap-3 lg:space-y-3 lg:block grid sm:grid-cols-2 lg:col-span-4 col-span-12">
            <ProductCard
              className="h-[168px]"
              data={{
                image: "/images/doors.png",
                text: "Doors & Windows",
              }}
            />
            <ProductCard
              className="h-[168px]"
              data={{
                image: "/images/barUnit.jpg",
                text: "Cabinetry & Bar Units",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-7" id="ourStory">
        <div className="relative">
          <Img
            src="/images/hero.gif"
            height={700}
            width={500}
            alt=""
            isLocal
            className="rounded-[20px] w-full md:h-[700px] h-[400px]"
          />
          <div className="absolute bottom-0">
            <div className="bg-white relative w-max uppercase font-medium py-3 px-7 rounded-tr-[20px]">
              <SvgArc
                className="z-50 bottom-12 absolute left-0 -rotate-90"
                width={20}
                height={20}
              />
              our founders
              <SvgArc
                className="z-50 -right-5 bottom-0 absolute -rotate-90"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-white sm:text-2xl text-xl font-medium py-3 px-7 rounded-tr-[20px] relative max-w-[calc(100%-50px)]">
              BHARAT CHOPRA & SHILPA TALREJA
              <SvgArc
                className="z-50 -right-5 absolute bottom-0 -rotate-90"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <div>WHO WE ARE</div>
          <div className="text-5xl font-semibold text-center">Our Story</div>
          <p className="text-xl leading-7 text-[#716154] text-center">
            NEXWorld began with a belief: luxury should be accessible, personal,
            and timeless. Founders Bharat and Shilpa, passionate about blending
            modern design with traditional warmth, brought their expertise from
            Canada to redefine luxury living in India.
          </p>
          <p className="text-xl leading-7 text-[#716154] text-center">
            Their vision goes beyond high-end materials—it’s about smart design,
            thoughtful choices, and creating spaces that truly reflect you. From
            bespoke kitchens to inspiring wall finishes, NEXWorld is here to
            bring elegance and functionality to every home.
          </p>
          <p className="text-xl leading-7 text-[#716154] text-center">
            At NEXWorld, we don’t just build homes – we craft lifestyles.
          </p>
          <button className="bg-primary text-white font-medium mt-5 px-8 py-3 rounded-full">
            Contact Us
          </button>
        </div>
      </div>
      <div className="relative flex flex-col justify-center">
        <Img
          src="/images/heroImage.jpeg"
          height={600}
          width={500}
          alt=""
          isLocal
          className="rounded-[20px] w-full md:h-full h-[400px]"
        />
        <div className="z-20 my-28 absolute flex justify-between h-full w-full top-0 px-10">
          {Array(4)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className={clsx(
                  "h-4 w-4 flex animate-ping justify-center items-center top-1/2 border border-white bg-transparent rounded-full",
                  idx % 2 === 0 && "mt-32"
                )}
              >
                <div className="h-[10px] w-[10px] bg-white rounded-full"></div>
              </div>
            ))}
        </div>
        <div className="absolute top-0 right-0 flex flex-col">
          <div className="bg-white relative w-max uppercase ml-auto font-medium py-3 px-7 self-end">
            <SvgArc
              className="z-50 absolute -left-5 top-0 rotate-90"
              width={20}
              height={20}
            />
            Craft Own Furniture
            <SvgArc
              className="z-50 absolute -left-5 bottom-0 -rotate-180"
              width={20}
              height={20}
            />
          </div>
          <div className="bg-white relative w-max sm:text-2xl text-xl font-medium py-3 px-7 rounded-l-full">
            Your new forever favorites are here
            <SvgArc
              className="z-50 absolute right-0 -bottom-5 rotate-90"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-7">
        <div className="relative">
          <Img
            src="/images/special1.png"
            height={600}
            width={500}
            alt=""
            isLocal
            className="rounded-[20px] w-full md:h-[570px] h-[400px]"
          />
          <div className="absolute top-0 left-0 flex flex-col">
            <div className="bg-white relative w-max uppercase font-medium py-[10px] px-5">
              <SvgArc
                className="z-50 -right-5 absolute top-0"
                width={20}
                height={20}
              />
              Even more special
              <SvgArc
                className="z-50 -right-5 absolute bottom-0 -rotate-90"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-white relative w-max sm:text-2xl text-xl font-medium py-3 px-7 rounded-r-full">
              The Personalization Shop
              <SvgArc
                className="z-50 absolute left-0 -bottom-[20px]"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="relative">
          <Img
            src="/images/special2.png"
            height={600}
            width={500}
            alt=""
            isLocal
            className="rounded-[20px] w-full md:h-[570px] h-[400px]"
          />
          <div className="absolute bottom-0">
            <div className="bg-white relative w-max uppercase font-medium py-3 px-7 rounded-tr-[20px]">
              <SvgArc
                className="z-50 absolute left-0 bottom-12 -rotate-90"
                width={20}
                height={20}
              />
              Create Exclusive
              <SvgArc
                className="z-50 -right-5 absolute bottom-0 -rotate-90"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-white sm:text-2xl text-xl font-medium py-3 px-7 rounded-tr-[20px] relative max-w-[calc(100%-40px)]">
              Automation for next generation homes
              <SvgArc
                className="z-50 -right-5 absolute bottom-0 -rotate-90"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {stats.map((item, idx) => (
          <StatsCard key={idx} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-12 gap-7">
        <div className="lg:col-span-4 flex flex-col justify-center col-span-12">
          <div className="text-4xl font-semibold lg:text-start text-center">
            Our Projects
          </div>
          <p className="text-lg text-secondary lg:text-start text-center">
            Visit our prestigious projects all over the world.
          </p>
          <button className="border border-primary font-medium mt-5 px-5 py-2 rounded-full">
            Visit Our Instagram
          </button>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 relative lg:col-span-8 col-span-12">
          <div className="space-y-4">
            <ProductCard
              data={{ image: "/images/social1.png", text: "Bedroom" }}
              className="md:h-[300px] h-[600px]"
              variant="social"
            />
            <ProductCard
              data={{ image: "/images/social4.png", text: "Bedroom" }}
              className="md:h-[162px] h-[300px]"
              variant="social"
            />
          </div>
          <div className="space-y-4">
            <ProductCard
              data={{ image: "/images/social2.png", text: "Bedroom" }}
              className="md:h-[162px] h-[300px]"
              variant="social"
            />
            <ProductCard
              data={{ image: "/images/social5.png", text: "Bedroom" }}
              className="md:h-[300px] h-[600px]"
              variant="social"
            />
          </div>
          <div className="space-y-4">
            <ProductCard
              data={{ image: "/images/social3.png", text: "Bedroom" }}
              className="md:h-[300px] h-[600px]"
              variant="social"
            />
            <ProductCard
              data={{ image: "/images/social6.png", text: "Bedroom" }}
              className="md:h-[162px] h-[300px]"
              variant="social"
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:gap-x-20 gap-10">
        <div className="space-y-6 my-auto">
          <div className="space-y-3">
            <div className="text-4xl font-semibold">Reach out to us</div>
            <p className="text-lg text-[#716154]">
              Contact us for questions, feedback, or inquiries.
            </p>
          </div>
          <div className="font-sans">
            {InputFields?.map((item, idx) => (
              <div className="space-y-1" key={idx}>
                <h4 className="text-xs font-medium">
                  {item?.label}{" "}
                  {item?.required && <span className="text-red-600">*</span>}
                </h4>
                <div className="relative">
                  {item?.rows ? (
                    <textarea
                      rows={5}
                      placeholder={item?.placeholder}
                      className={`rounded-md text-sm bg-transparent p-3 outline-none w-full border ${
                        errors?.[item?.key] && touched?.[item?.key]
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      onChange={handleChange(item?.key)}
                      onBlur={handleBlur(item?.key)}
                      value={values?.[item?.key]}
                    ></textarea>
                  ) : (
                    <input
                      type={item?.type}
                      placeholder={item?.placeholder}
                      className={`h-10 rounded-md bg-transparent text-sm pl-10 outline-none w-full border ${
                        errors?.[item?.key] && touched?.[item?.key]
                          ? "border-red-600"
                          : "border-gray-300"
                      }`}
                      onChange={handleChange(item?.key)}
                      onBlur={handleBlur(item?.key)}
                      value={values?.[item?.key]}
                    />
                  )}
                  {errors?.[item?.key] && touched?.[item?.key] ? (
                    <p className="text-red-500 text-[10px] text-right">
                      {errors?.[item?.key] as string}
                    </p>
                  ) : (
                    <p className="text-white text-[10px] text-right">.</p>
                  )}
                  {item?.icon}
                </div>
              </div>
            ))}
            <button
              onClick={() => handleSubmit()}
              className="bg-primary text-white font-medium mt-5 px-8 py-3 rounded-full"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5330327480133!2d77.08575007580005!3d28.493606490375363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b164d7ff3a3%3A0x693dbe0ab69b783e!2sDesign%20Krunch!5e0!3m2!1sen!2sin!4v1732653693881!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
