import React from "react";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

export default function Brief() {
  return (
    <section className="bg-gray-800 py-36" id="skills">
      <div className="hero_up container mx-auto flex px-10 py-10 flex-col items-center">
        <h1 className="h1-hero text-9xl text-gray-200 font-light px-20 antialiased">
          A well designed <br /> UI increases user <br />
          {/* <strong>engagement &amp; retention</strong> */}
          <span className="text-red-500 font-medium"> engagement</span> &amp;
          <span className="text-red-500 font-medium"> retention.</span>
        </h1>
      </div>
      <div className="sub__brief w-full max-w-2xl mx-auto">
        <p className="sub_text text-gray-200 text-lg">
          Through the combination of design, technology and programming, I
          develop and maintain the user interface, making it responsive for
          mobile devices, create tools that improve site interaction regardless
          of the browser, manage software workflow, follow SEO best practices,
          fix bugs and test for usability thereby optimizing the user
          experience.
        </p>
        <p className="sub_text2 text-gray-200 text-lg mt-6">
          I am proficient in using HTML, JavaScript, CSS as well as their
          corresponding frameworks such as Bootstrap and Tailwind for CSS and
          ReactJS for JavaScript. I also employ version control tools like Git
          and Content Management softwares such as WordPress and Wix to achieve
          the perfect UI for the project.
        </p>

        <a href="https://calendly.com/emeka-ikele/discovery-meeting">
          <button
            className="sub-btn bg-gray-200 text-gray-800 font-medium mt-8 w-full py-8 px-auto inline-flex items-center justify-center"
            onClick="window.location.href='';"
          >
            BOOK A FREE CONSULTATION
            <ArrowCircleRightIcon className="w-5 h-5 ml-1" />
          </button>
        </a>
      </div>
    </section>
  );
}
