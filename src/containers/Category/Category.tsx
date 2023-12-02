import useToggle from "@/hooks/useToggle";
import VerticalMovieCard from "@/components/Cards/VerticalMovieCard";
import Heading from "./components/Heading";
import Filter from "./components/Filter";

const Category = () => {
  const { toggleOff, toggleOn, on } = useToggle(false);

  return (
    <div className="wide text-white mt-8">
      <Heading />

      <Filter on={on} toggleOff={toggleOff} toggleOn={toggleOn} />

      {/* show list movie */}

      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-20 gap-x-6 gap-y-8">
        {Array(20)
          .fill(null)
          .map((el, idx: number) => {
            return (
              <VerticalMovieCard
                key={idx}
                name="Ác Quỷ Ma Sơ 2"
                time="09/03/2002"
                year="2023"
                poster_url="https://img.ophim9.cc/uploads/movies/nhat-niem-quan-son-thumb.jpg"
              />
            );
          })}
      </div>
    </div>
  );
};

export default Category;
