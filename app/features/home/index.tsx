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
  return (
    <div className="container-sm mx-auto space-y-20 mt-10 px-5">
      <div className="md:text-6xl sm:text-5xl text-3xl font-semibold md:leading-[74px] sm:text-start text-center">
        Elevate Your Lifestyle<br></br>{" "}
        <div className="flex gap-x-3">
          with Our Next generation{" "}
          <Slider
            {...HERO_VERTICAL_SETTING}
            className="sm:max-w-[475px] max-w-[230px]"
          >
            {["Kitchen", "Wardrobes", "& More"]?.map((item, idx) => (
              <span className="text-primary" key={idx}>
                {item}
              </span>
            ))}
          </Slider>
        </div>
      </div>
      <div className="space-y-3">
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
        <div className="grid grid-cols-12 gap-3 max-h-[350px]">
          <div className="grid sm:grid-cols-2 gap-3 lg:col-span-8 col-span-12 max-h-[350px]">
            <ProductCard
              data={{ image: "/images/kitchen.png", text: "Kitchen" }}
            />
            <ProductCard
              data={{ image: "/images/wardrobes.png", text: "Wardrobes" }}
            />
          </div>

          <div className="gap-3 lg:space-y-3 lg:block grid sm:grid-cols-2 lg:col-span-4 col-span-12">
            <ProductCard
              className="max-h-[168px]"
              data={{
                image: "/images/doors.png",
                text: "Doors & Windows",
              }}
            />
            <ProductCard
              className="max-h-[168px]"
              data={{
                image: "/images/barUnit.jpg",
                text: "Cabinetry & Bar Units",
                styleImage: "object-[0px_-100px]",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-7">
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
            <SvgArc
              className="z-50 bottom-[136px] absolute -rotate-90"
              width={20}
              height={20}
            />

            <div className="bg-white relative w-max uppercase font-medium py-3 px-7 rounded-tr-[20px]">
              asda
              <SvgArc
                className="z-50 -right-5 bottom-0 absolute -rotate-90"
                width={20}
                height={20}
              />
            </div>
            <div className="bg-white sm:text-2xl text-xl font-medium py-3 px-7 rounded-tr-[20px] relative max-w-[calc(100%-50px)]">
              Up to 30% off The Living Room Event{" "}
              <SvgArc
                className="z-50 -right-5 absolute bottom-0 -rotate-90"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <div className="text-5xl font-semibold text-center">
            The living room event up to 30% off
          </div>
          <p className="text-lg text-secondary text-center">
            The living room event up to 30% off
          </p>
        </div>
      </div>
      <div className="relative">
        <Img
          src="/images/heroImage.jpeg"
          height={600}
          width={500}
          alt=""
          isLocal
          className="rounded-[20px] w-full md:h-full h-[400px]"
        />
        <div className="h-4 w-4 flex animate-ping justify-center animate items-center top-1/2 border border-white absolute bg-transparent z-20 rounded-full">
          <div className="h-[10px] w-[10px] bg-white rounded-full"></div>
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
            src="/images/heroImage.jpeg"
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
            src="/images/heroImage.jpeg"
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
          <button />
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
    </div>
  );
};

export default Home;
