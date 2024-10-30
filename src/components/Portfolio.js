import React from "react";

function Portfolio() {
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-y-2 divide-white">
      <div className="hidden"></div>
      <div className="overflow-hidden">
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">The PALM Magazine</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website
            </p>
          </div>
          <a href="https://www.thepalmagazine.com/">
            <img
              src="../../assets/img/work-cta.svg"
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://www.thepalmagazine.com/">
          <img src="../../assets/img/The_PALM.png" alt="ThePALM placeholder" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Letbud</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Web Application
            </p>
          </div>
          <a href="https://letbud.com/">
            <img
              src="../../assets/img/work-cta.svg"
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://letbud.com/" className="w-96 max-h-96">
          <img src="../../assets/img/Letbud-min.png" alt="Letbud placeholder" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Godways</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website
            </p>
          </div>
          <a href="https://godwaysministry.com">
            <img
              src="../../assets/img/work-cta.svg"
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://godwaysministry.com" className="w-96 max-h-96">
          <img
            src="../../assets/img/Landing_Godways.png"
            alt="Godways placeholder"
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Vine Grove Academy
            </h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website
            </p>
          </div>
          <a href="https://vinegroveacademy.com/">
            <img
              src="../../assets/img/work-cta.svg"
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://vinegroveacademy.com/">
          <img
            src="../../assets/img/Vinegrove-min.png"
            alt="Vine grove academy"
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">SoDigify</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website
            </p>
          </div>
          <a href="https://sodigify.com/">
            <img
              src="../../assets/img/work-cta.svg"
              alt=""
              className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
            />
          </a>
        </div>
        <a href="https://sodigify.com/">
          <img src="../../assets/img/Sodigify.png" alt="Sodigify placeholder" />
        </a>
      </div>
      {/* <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">FeelBetr</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio5} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">
              Sam&#39;s Portfolio
            </h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio6} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">Squire</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Website &#40;Coming Soon&#41;
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio7} alt="Work-1" />
        </a>
      </div>
      <div>
        <div className="flex justify-between my-16 md:my-6">
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-3xl font-bold">EatBetr</h3>
            <p className="text-gray-500 opacity-75 font-normal text-2xl">
              Mobile Application
            </p>
          </div>
          <div>
            <a href="!#">
              <img
                src="../../assets/img/work-cta.svg"
                alt=""
                className="w-12 h-12 hover:rotate-45 transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
        <a href="!#">
          <img src={Portfolio8} alt="Work-1" />
        </a>
      </div> */}
    </div>
  );
}

export default Portfolio;
