import { ImageWithFallback } from "@/components";

const Intro = () => {
  return (
    <div className="text-white mt-5 flex flex-wrap sm:flex-nowrap gap-5 w-full lg:w-[65%]">
      <ImageWithFallback
        src="https://img.ophim9.cc/uploads/movies/nhung-nguoi-dong-hanh-thumb.jpg"
        alt=""
        width={208}
        height={312}
        className="object-cover rounded-md flex-shrink-0 w-[184px] sm:w-[208px]"
      />

      <div className="w-full">
        <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">Phim bộ</span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">Vietsub</span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">HD</span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">55 phút/tập</span>
        </div>
        
        <div className="my-5">
          <span className="text-[#b4b4b4] mr-5 md:mr-8 lg:mr-10 text-xs md:text-sm lg:text-base">
            Thể loại:
          </span>

          <span className="capitalize py-1 px-2 rounded-md inline-block font-normal md:font-light text-[10px] md:text-xs lg:text-sm bg-secondary mr-2">
            Hành động
          </span>

          <span className="capitalize py-1 px-2 rounded-md inline-block font-normal md:font-light text-[10px] md:text-xs lg:text-sm bg-red-600 animate-bounce">sub độc quyền</span>
        </div>


        <div className="text-xs md:text-sm lg:text-base text-[#b4b4b4]">
          <p>
            Vào năm 202X, trong một tương lai xa hơn Initial D Nhật Bản rất
            phổ biến với các phương tiện tự hành nhưng trên thế giới này, đường
            công cộng được sử dụng cho các cuộc đua ô tô. Mọi người tụ tập từ
            khắp nơi trên thế giới để tham gia cuộc đua nổi tiếng được gọi là
            MFG. Porsche, Ferrari, Lamborghini. Những người tham gia được mời
            tham gia với những chiếc xe nhanh nhất của họ. Một trong những người
            tham gia như vậy, Kanata Rivington, tốt nghiệp trường đua xe người
            Anh, quay trở lại Nhật Bản để đạt được mục tiêu của mình.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
