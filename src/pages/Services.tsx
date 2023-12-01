import dog from "../images/dogbathing.jpg";

const Services = () => {
  return (
    <div>
      <div className=" mx-8 mb-8 flex flex-col pt-10 font-medium md:mx-16 lg:mx-32 text-[#000]">
        <h2 className="mb-4 text-[64px] font-bold text-center">Our Services</h2>
        <div className="flex flex-col justify-around flex-wrap ">
          <div className="my-5 ">
            <a href="#" className="">
              <img
                src={dog}
                className="h-96 w-full mt-10 cover object-cover border-2 border-black"
              />
              <div className="flex flex-col  p-4  border-black  border-b-2">
                <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white ">
                  Clipping
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                  We have a range of different blade lengths depending on how
                  long or short you would like.
                </p>
              </div>
            </a>
          </div>

          <div className="my-5">
            <a href="#" className="">
              <img
                className="object-cover  h-[400px] w-full rounded"
                src={dog}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 border-black  border-b-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bathing
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Using natural shampoos to suit a variety of coats, dogs enjoy
                  the comfort of our purpose built hydro-bath.
                </p>
              </div>
            </a>
          </div>

          <div className="my-5">
            <a href="#">
              <img
                className="object-cover  h-[400px] w-full rounded"
                src={dog}
                alt=""
              />

              <div className="flex flex-col justify-between p-4 border-black  border-b-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Safe Drying
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Each dog is dried by hand using a turbo blast drier enabling
                  us to see each part of your dogs skin.
                </p>
              </div>
            </a>
          </div>
          <div className="my-5">
            <a href="#">
              <img
                className="object-cover  h-[400px] w-full rounded"
                src={dog}
                alt=""
              />

              <div className="flex flex-col justify-between p-4 border-black  border-b-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Face Trim
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  If you can't see a dogs eyes they cannot see yours either!
                  Don’t wait for your next appt, pop in for a trim.
                </p>
              </div>
            </a>
          </div>
          <div className="my-5">
            <a href="#">
              <img
                className="object-cover  h-[400px] w-full rounded"
                src={dog}
                alt=""
              />

              <div className="flex flex-col justify-between p-4 border-black  border-b-2">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Ear Cleaning
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  We pride ourselves on only using ear cleaning products that
                  contain natural ingredients for each dog we groom.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
