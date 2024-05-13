import axios from "axios";
import { useEffect, useState } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaMarker } from "react-icons/fa";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Populer = () => {
  const [assign, setAssign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/populer`
        );
        setAssign(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the function to fetch data
  }, []);

  return (
    <div className="my-20">
      <div className="my-20 mx-auto lg:w-[70%] md:w-[80%] text-center space-y-3">
        <h1 className="md:text-4xl text-2xl font-semibold text-rose-500 ">
          Top Rated Assignments
        </h1>
        <p className="">Browse through our top rated assignments and discover the best learning opportunities!</p>
      </div>

      <div>
        <Swiper
          modules={[Pagination, FreeMode, Autoplay]}
        //   slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000
          }}

          breakpoints={{
            // when window width is >= 992px (lg)
            992: {
              slidesPerView: 3,
            },
            // when window width is >= 768px (md)
            768: {
              slidesPerView: 2,
            },
            // when window width is < 768px (sm)
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {assign.map((i) => (
            <SwiperSlide key={i._id}>
              <div
                className="h-[450px] space-y-3 bg-cover border p-5 rounded-xl text-white flex flex-col justify-end"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5)),url(${i.img})`,
                }}
              >
                <div>
                  <a className="flex justify-end items-center gap-3 font-semibold">
                    {" "}
                    <BsCalendarDateFill className="text-xl text-rose-500" />{" "}
                    {i.deadline}{" "}
                  </a>
                </div>
                <h1 className="text-gray-100  font-semibold"> {i.title}</h1>
                <hr />
                <h1 className="flex items-center gap-3">
                  {" "}
                  <BiSolidCategory className="text-rose-500 text-xl" />{" "}
                  {i.category}{" "}
                </h1>
                <p className="text-sm">{i.description.slice(0, 100)}.... </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="flex  items-center gap-3  ">
                      {" "}
                      <FaMarker className="text-xl text-rose-500" /> Marks:{" "}
                      {i.max_marks}{" "}
                    </p>
                  </div>
                  <button className="btn btn-ghost "> view Details </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Populer;
