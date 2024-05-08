import React from "react";
import { BiHappyAlt } from "react-icons/bi";
import { CgMore, CgMoreR } from "react-icons/cg";
import { IoHappy } from "react-icons/io5";
import Customer from "./Customer";

const About = () => {
  const reviews = [
    {
      name: "Saroj Kumar",
      imageURL:
        "https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg",
      review:
        "Using this real estate website was a breeze! I found my dream home quickly with its user-friendly interface and detailed listings. Highly satisfied with the seamless experience!",
    },
    {
      name: "Neha Kumari",
      imageURL:
        "https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/600w/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg",
      review:
        "This real estate website exceeded my expectations with its vast array of listings. The intuitive search filters made it simple to narrow down my options. Found my perfect home effortlessly!",
    },
    {
      name: "Satish Kumar",
      imageURL:
        "https://i.pinimg.com/564x/bd/da/b7/bddab779c1b5e0bded2f6e4face72dfd.jpg",
      review:
        "I'm thrilled with the exceptional service provided by this real estate website. The team's responsiveness and attention to detail made my home search stress-free. Highly recommended!",
    },
  ];

  return (
    <div>
      <div className="py-20 flex items-center justify-center">
        <div className="w-4/12 flex flex-col gap-3 ml-20">
          <h3 className="text-2xl font-bold uppercase tracking-widest ">
            About <span className="text-[#1B2A80]">Us</span>
          </h3>
          <p className="text-sm">
            Welcome to our real estate site, where your dream home is just a
            click away. From cozy cottages to modern apartments, we've got
            options for every taste. Explore our listings and let us help you
            find the perfect fit. With our friendly service and easy-to-use
            platform, your home search just got simpler. Start browsing now and
            find your ideal home sweet home. Experience the satisfaction of
            finding your perfect match as we assist you every step of the way.
            Your dream home is within reach – let's make it a reality together.
          </p>
          <button className="tracking-widest px-5 w-48 bg-[#1B2A80] text-white font-bold py-1 rounded-md custom-shadow uppercase tracking-widest">
            Learn more
            <CgMore className="inline text-lg -mt-[2px] ml-2" />
          </button>
        </div>
        <div className="w-7/12">
          <img
            src="https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?t=st=1712125972~exp=1712129572~hmac=9777eb90d8e8fbd8717d019f8b8dc8bff727e19f7d7b5eb0d41c2c81485b999c&w=996"
            alt="image"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <div className="tracking-widest font-semibold flex gap-2   uppercase text-center">
            <p className="text-xl">Our happy customers</p>
            <BiHappyAlt className="text-yellow-400 text-3xl" />
          </div>
        </div>

        <div className="flex  justify-center items-center mt-10 flex-wrap gap-5">
          {reviews.map(({ name, imageURL, review }) => {
            return (
              <Customer
                key={name}
                name={name}
                imageURL={imageURL}
                review={review}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
