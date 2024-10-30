import React from "react";

function About() {
  return (
    <div
      className="container mx-auto py-20 px-8 md:px-16 block lg:flex mb-10 overflow-hidden"
      id="about"
    >
      <div className="flex flex-col space-y-12 md:space-y-14 lg:space-y-20 mb-16 md:mb-0">
        <h2
          className="font-bold w-80 skillHeading"
          style={{ fontSize: "60px" }}
        >
          About me
        </h2>
        <img
          src="../../assets/img/me.jpg"
          className="max-w-full h-auto w-full lg:w-4/5"
          alt="Emeka"
        />
        {/* <div
          className="aboutImg mx-auto lg:mx-0"
          // style={{ width: "454px", height: "513px" }}
        ></div> */}
      </div>
      <div className="divide-y-2 divide-black space-y-12">
        <h5 className="text-2xl font-medium md:mt-28 lg:mt-8">
          Developer, learner, problem solver, visionary... and the rest”
        </h5>
        <p className="font-normal text-xl leading-7 py-10">
          I&#39;m a seasoned frontend developer with over five years of
          experience in collaborating with creative and development teams on the
          execution of ideas and projects. I&#39;m passionate about building
          scalable, user-centered frontend products that enhance digital
          experiences.
          <br /> <br /> When I&#39;m not writing code or deploying frontends,
          you&#39;ll find me cheering on my favorite football team (Chelsea FC),
          diving into the latest games, or catching up on new movies.
          <br />
          <br />
          My post-tech dream is to retire to a quiet little Island somewhere
          sunny, spend my days gaming on the latest next-gen consoles and
          soaking up the tranquility. <br />
          <br />
          Creating unforgettable digital experiences—on and off the screen—is
          what drives me.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default About;
