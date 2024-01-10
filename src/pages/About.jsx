import dog from "../images/bath2.jpg";
import { AiFillHeart } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div className=" mx-8 mb-8 flex flex-col pt-10 font-medium md:mx-16 lg:mx-96 text-[#000]">
        <p className="text-[64px] font-bold text-center "> About </p>

        <div className="flex  mt-10 gap-4 flex-col md:flex-row">
          <div>
            <h2 className="text-[30px] border-b-2 border-r-2 border-black">
              {" "}
              Who We Are{" "}
            </h2>

            <div>
              <p className="text-[20px] mt-4"> Cairo Dogs Salone </p>
              <p>
                {" "}
                you're looking for help with dog grooming in maadi and the
                surrounding areas, get in touch with Blooming Grooming. As
                experienced dog groomers, you can count on our professionalism
                and excellent pricing. For professional dog grooming and claw
                clipping, give us a call! Here at Blooming Grooming, we provide
                a professional dog grooming service covering all aspects of
                grooming for your dog. Including: Bathing, Clipping and Styling,
                Handstripping, Ear Cleaning, Nails Clipped.
              </p>
            </div>

            <div>
              <p className="text-[20px] mt-4">
                All done with kind and gentle handling
              </p>
              <p>
                You can also visit the studio before bringing your dog. So what
                are you waiting for? Whatever size or breed your dog may be,
                I''m sure that I can help. So when you need help with claw
                clipping or pet styling, make sure you give us a call. Blooming
                Grooming are a friendly business offering dog grooming and
                clipping in Wedmore, Somerset. We are open to all breeds and
                sizes of dog, so give us a call today and see how we can help.
              </p>
            </div>
            <div>
              <img
                src={dog}
                className="h-96 w-full mt-10 cover object-cover border-2 border-black"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="  text-center flex items-center justify-center text-[50px] h-20 mt-10 bg-black text-white font-normal">
        We <AiFillHeart className="text-red-600 mx-4" /> dogs
      </div>
    </div>
  );
};

export default About;
