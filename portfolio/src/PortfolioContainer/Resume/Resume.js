import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 65 },
    { skill: "React/Nextjs/Gatsby", ratingPercentage: 70 },
    { skill: "Adobe XD/Figma", ratingPercentage: 85 },
    { skill: "Adobe Suite", ratingPercentage: 45 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "Unity", ratingPercentage: 60 },
    { skill: "C#", ratingPercentage: 45 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "Present" },
      description:
        "A Personal Portfolio website to showcase all my details and projects in one place.",
      subHeading:
        "Technologies Used: React JS, Bootsrap, GSAP, Framer-Motion, THREE.js, SASS",
    },
    {
      title: "Unity Game Project",
      duration: { fromDate: "2020", toDate: "Present" },
      description: "On going project developing action adventure game",
      subHeading: "Technologies Used:  Unity",
    },
    // {
    //   title: "Ecommerce Website ",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description:
    //     "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
    //   subHeading:
    //     "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    // },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Arizona"}
        subHeading={"BACHELOR OF SCIENCE"}
        fromDate={"2011"}
        toDate={"2015"}
      />

      <ResumeHeading
        heading={"University of California, Irvine"}
        subHeading={"Full Stack Developer Certificate"}
        fromDate={"2019"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Coursera/Google "}
        subHeading={"UX Developer Certificate"}
        fromDate={"2021"}
        toDate={"2021"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Feedonomics/BigCommerce"}
          subHeading={"Marketplace Support Specialist"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working with large eCommerce businesses to manipulate and
            syndicate hundreds of thousands of data points across multiple
            channels.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Apply rules to data in accordance with marketplace API to ensure proper listing behavior.
          </span>
          <br />
          <span className="resume-description-text">
            - Resolve errors for dozens of clients over most major eCommerce platforms and marketplaces{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to identify and implement customizations or resolutions per client request. 
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Stocks/Crypto"
        description="I enjoy analysing data to find patterns or trends where meaningful information can be extrapolated.  It's even better when profit can be made by doing so."
      />
      <ResumeHeading
        heading="Lifting/Fitness"
        description="Fitness has always been a major part of my life.  I enjoy pushing my body to the limits and blasting past goals I set for myself"
      />
      <ResumeHeading
        heading="Food"
        description="There is little in life that is more enjoyable than food. I'm a massive 'foodie' and i'm proud to admit it."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
