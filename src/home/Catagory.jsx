import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core Swiper
import "swiper/css/navigation"; // optional
import "swiper/css/pagination"; // optional

import { Navigation, Autoplay, Pagination } from "swiper/modules"; // for modules

export default function Catagory() {
  const data = [
    {
      id: 1,
      catagory: "meat",
      url: "meat.png",
      color: "rgb(254, 244, 234)",
    },                         
    {
      id: 2,
      catagory: "Vegatables",
      url: "vagetable.png",
      color: "rgb(245, 245, 245)",
    },
    {
      
      id: 3,
      catagory: "Fruits",
      url: "fruits.png",
      color: "rgb(234, 245, 227",
    },
    {
      id: 4,
      catagory: "Dairy",
      url: "dairy.png",
      color: "rgb(234, 244, 244)",
    },
    {
      id: 5,
      catagory: "grains",
      url: "grains.png",
      color: "rgb(250, 249, 215)",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-extrabold pl-[30px]">Popular Categories</h1>
      <div className=" w-[1200px]  m-auto pt-[30px] flex flex-wrap itmes-center justify-center gap-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          className="py-4"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="flex flex-col rounded-2xl shadow-md p-6 items-center"
                style={{ backgroundColor: item.color }}
              >
                <img
                  src={`/src/assets/Categories/${item.url}`}
                  alt={item.catagory}
                  className="w-[50%] h-[50%] object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">
                  {item.catagory}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
