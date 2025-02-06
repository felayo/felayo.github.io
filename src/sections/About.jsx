import { useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(" adrian@jsmastery.pro");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Hi, I’m Ayorinde Ajibaye</p>
              <p className="grid-subtext">
                Dynamic IT Manager with over 10 years of diverse experience in
                IT infrastructure management, web development, network
                administration, web server management, and cloud solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid5.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in leveraging modern technologies to deliver
                scalable solutions, including backend development with Node.js
                (Express.js) and Python (Flask), PHP (Laravel), and frontend
                development using React.js, HTML, and CSS. My expertise extends
                to server administration with WHM, cPanel, and SSL
                configuration, as well as cloud infrastructure with AWS (EC2,
                S3, RDS, Lambda) and Docker. I am proficient in managing
                databases such as PostgreSQL, MySQL, and MongoDB, and skilled in
                tools like Git, JIRA, and Trello for collaborative development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "Lagos, Nigeria",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Lagos, Nigeria and open to remote work
                worldwide.
              </p>
              <a
                href="https://flowcv.com/resume/l7p9m89vbs"
                target="_blank"
                rel="noreferrer">
                <Button name="My Resume" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Professional Certifications</p>
              <p className="grid-subtext">
                Driven by a passion for problem-solving, I earned certifications
                in Meta Frontend, Cloud Development, and Full Stack Development.
                Each milestone strengthened my expertise in building scalable
                applications, mastering modern tools like React, Docker, and
                CI/CD pipelines, and delivering end-to-end solutions. These
                achievements reflect my commitment to continuous growth and
                innovation.
              </p>
              <br />
              <a
                className="flex items-center gap-2 cursor-pointer text-white-700"
                target="_blank"
                rel="noreferrer"
                href="https://www.coursera.org/account/accomplishments/professional-cert/EGURMC48TBEZ">
                <p>- &nbsp; Meta Front-End Developer Certificate</p>
              </a>
              <a
                className="flex items-center gap-2 cursor-pointer text-white-700"
                target="_blank"
                rel="noreferrer"
                href="https://www.udacity.com/certificate/CDT6CUQT">
                <p>- &nbsp; Cloud Developer Nanodegree</p>
              </a>
              <a
                className="flex items-center gap-2 cursor-pointer text-white-700"
                target="_blank"
                rel="noreferrer"
                href="https://www.udacity.com/certificate/e/2b6f614e-d08d-11ec-ab2d-4bced679933c">
                <p>- &nbsp; Full Stack Developer Nanodegree</p>
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  ajibaye@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
