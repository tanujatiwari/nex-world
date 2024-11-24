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
      className="border border-tertiary bg-primary absolute z-20 top-[45%] left-5 duration-300 h-10 w-10 cursor-pointer rounded-full flex justify-center items-center"
    >
      <IoIosArrowBack size={18} className="text-black mr-[2px]" />
    </div>
  );

  const ArrowRight = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="border border-tertiary bg-primary absolute z-20 top-[45%] right-5 h-10 w-10 duration-300 cursor-pointer rounded-full flex justify-center items-center"
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
    nextArrow: <ArrowLeft />,
    prevArrow: <ArrowRight />,
  };
  return (
    <div className="container-sm mx-auto space-y-20 mt-10 px-5">
      <div className="md:text-6xl sm:text-5xl text-3xl font-semibold md:leading-[74px] text-center">
        Elevate Your Lifestyle with Our Next generation Kitchen, Wardrobes &
        More
      </div>
      <div className="space-y-3">
        <Slider {...settings} dots={false}>
          {["/images/slide1.mp4", "/images/slide2.mp4"].map((item, idx) => (
            <video
              key={idx}
              src={item}
              className="rounded-[20px] max-h-[490px] object-cover"
              autoPlay
              muted
              loop={true}
              height={490}
              width={600}
            ></video>
          ))}
        </Slider>
        <div className="grid grid-cols-12 gap-3 max-h-[350px]">
          <div className="grid sm:grid-cols-2 gap-3 lg:col-span-8 col-span-12 max-h-[350px]">
            <ProductCard
              data={{ image: "/images/wardrobes.png", text: "Wardrobes" }}
            />
            <ProductCard
              data={{ image: "/images/kitchen.jpg", text: "Kitchen" }}
            />
          </div>

          <div className="gap-3 lg:space-y-3 lg:block grid sm:grid-cols-2 lg:col-span-4 col-span-12">
            <ProductCard
              className="max-h-[168px]"
              data={{
                image: "/images/doors.jpg",
                text: "Doors & Windows",
              }}
            />
            <ProductCard
              className="max-h-[168px]"
              data={{
                image: "/images/barUnit.jpg",
                text: "Cabinetry & Bar Units",
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
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 relative lg:col-span-8 col-span-12">
          <div className="space-y-4">
            <ProductCard
              data={{ image: "/images/heroImage.jpeg", text: "Bedroom" }}
              className="md:h-[300px] h-[600px]"
              variant="social"
            />
            <ProductCard
              data={{ image: "/images/heroImage.jpeg", text: "Bedroom" }}
              className="md:h-[162px] h-[300px]"
              variant="social"
            />
          </div>
          <div className="space-y-4">
            <ProductCard
              data={{ image: "/images/heroImage.jpeg", text: "Bedroom" }}
              className="md:h-[162px] h-[300px]"
              variant="social"
            />
            <ProductCard
              data={{ image: "/images/heroImage.jpeg", text: "Bedroom" }}
              className="md:h-[300px] h-[600px]"
              variant="social"
            />
          </div>
          <div className="space-y-4">
            <ProductCard
              data={{ image: "/images/heroImage.jpeg", text: "Bedroom" }}
              className="md:h-[300px] h-[600px]"
              variant="social"
            />
            <ProductCard
              data={{ image: "/images/heroImage.jpeg", text: "Bedroom" }}
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
