import { ClockIcon } from "../assets/clock";
import { CardProductCustom } from "../components/cardProducts/cardProduct";

export const HomePage = () => {
  return (
    <>
      <section className="w-full">
        <div className="campanha flex-col sm:flex-row font-extrabold text-lg flex justify-between px-5 py-3 items-center bg-orange-400">
          <div>
            <h2>MEGA DAY JULHO GAMER</h2>
          </div>
          <div className="clocktime flex gap-2">
            <ClockIcon />
            <span>1D 18:20:00</span>
          </div>
        </div>
      </section>
      <main>
        <div className="flex gap-2 flex-wrap p-4 justify-between md:justify-normal ">
          <CardProductCustom />
          <CardProductCustom />
          <CardProductCustom />
          <CardProductCustom />
          <CardProductCustom />
          <CardProductCustom />
        </div>
      </main>
    </>
  );
};
