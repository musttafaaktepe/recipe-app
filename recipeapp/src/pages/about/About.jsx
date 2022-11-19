import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

const About = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <div>
            <div >
              <h2>Welcome To Mustafa AKTEPE Profile</h2>
              <a href="mailto:musttafaaktepe@gmail.com">
                <SiGmail
                  className="logo-gmail logo"
                  style={{ color: "#c5221f", cursor: "pointer" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/musttafaaktepe/"
                target="blank"
              >
                <SiLinkedin
                  className="logo-linkedin logo"
                  style={{ color: "#2868b2", cursor: "pointer" }}
                />
              </a>
              <a href="https://github.com/musttafaaktepe" target="blank">
                <SiGithub
                  className="logo-gitgub logo"
                  style={{ color: "#000", cursor: "pointer" }}
                />
              </a>
            </div>
          </div>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
