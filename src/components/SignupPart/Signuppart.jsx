import React from 'react';
import { Link } from 'react-router-dom';
import hug from '../../assets/hug.png';

const SignUp = () => {
  return (
    <section className="flex flex-col">
      <div className="px-20 mx-20 pb-20 grid place-items-center">
        <img className="w-60" src={hug} alt="" />
        <h2 className="text-2xl xl:text-4xl text-refubookBlue mb-4 text-center">
          Share your story, help others and get help from others
        </h2>
        <p className="text-center pt-7 pb-5 px-15 mx-15 text-refubookGray font-medium  text-l max-w-screen">
          “As a refugee myself, I know the challenges and struggles refugees
          face. Despite the challenges, I look back on my journey to a new
          country with gratitude and joy. I am grateful for the opportunities I
          received in my new country with the help of the wonderful community
          here.” – Nura, 32
        </p>

        <Link to="/signup">
          <button
            type="button"
            className="py-1 px-3 md:py-2 md:px-9 bg-refubookBlue text-refubookWhite font-bold text-lg md:text-xl  rounded-full shadow-lg hover:bg-refubookWhite hover:text-refubookBlack transition duration-500 ease-in-out"
          >
            Sign Up
          </button>
        </Link>
      </div>
    </section>
  );
};
export default SignUp;
