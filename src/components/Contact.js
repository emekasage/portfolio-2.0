import React from "react";

function Contact() {
  const today = new Date();
  const date = today.getFullYear();
  return (
    <div
      className="mx-auto py-20 px-8 md:px-16 block lg:flex justify-between bg-black overflow-hidden"
      id="contact"
    >
      <div className="flex flex-col">
        <h2
          className="font-bold w-80 text-white worksHeading"
          style={{ fontSize: "60px" }}
        >
          Let&#39;s Work Together!
        </h2>
        <div className="divide-y-2 divide-white max-w-3xl space-y-8">
          <div></div>
          <div className="flex justify-between items-center pt-6">
            <a
              className="p-5 bg-gray-50 rounded-full cursor-pointer"
              href="mailto:emeka.ikelee@gmail.com"
            >
              <svg
                width="20px"
                height="20px"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Gmail icon</title>
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
              </svg>
            </a>
            <div className="text-white font-medium text-lg">
              <a href="mailto:emeka.ikelee@gmail.com">emeka.ikelee@gmail.com</a>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6">
            <a
              className="p-5 bg-gray-50 rounded-full cursor-pointer"
              href="https://twitter.com/emekachuckbazz"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <title>Twitter icon</title>
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>
            </a>
            <a
              className="p-5 bg-gray-50 rounded-full cursor-pointer"
              href="https://www.linkedin.com/in/emeka-ikele/"
            >
              <svg
                width="20px"
                height="20px"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn icon</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
            <a
              className="p-5 bg-gray-50 rounded-full cursor-pointer"
              href="https://github.com/emekasage"
            >
              <svg
                width="20px"
                height="20px"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="title-font font-medium text-white mt-6 md:mt-8 hidden lg:block">
          <a href="#about" className="text-lg font-semibold" id="footer-name">
            © {date} Emeka Ikele. All rights reserved.
          </a>
        </div>
      </div>
      <div
        className="max-w-3xl border-2 border-white p-24 rounded-full flex items-center object-contain mt-11 lg:mt-0 contactCircle mx-auto lg:mx-0"
        style={{ width: "464px", height: "464px" }}
      >
        <div className="flex justify-center items-baseline underline text-white w-full">
          <span className="text-base">Hire me...</span>
          {/* <hr /> */}
          <a
            className="right-14 cursor-pointer"
            href="https://calendly.com/emeka-ikele/discovery-meeting"
          >
            <img
              src="../../assets/img/Group-692.svg"
              alt="Group"
              className="hover:rotate-45 transition duration-300 ease-in-out transform"
            />
          </a>
        </div>
      </div>
      <div className="title-font font-medium text-white mt-6 md:mt-8 block lg:hidden">
        <a href="#about" className="text-lg font-semibold" id="footer-name">
          © {date} Emeka Ikele. All rights reserved.
        </a>
      </div>
    </div>
  );
}

export default Contact;
