import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  // faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function App() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B192E]">
        <div className="text-base font-mono text-white justify-center xs:text-xs sm:text-2xl md:text-3xl">
          <Typewriter
            words={["Something cool is brewing..."]}
            loop={20}
            cursor
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={80}
            delaySpeed={1000}
          />
        </div>

        <div className="flex text-lg sm:text-xl text-white gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/pukarbajgain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:-translate-y-0.5 transition-transform duration-300 hover:text-[#64ffda]"
            />
          </a>
          <a
            href="https://github.com/pukarbajgain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:-translate-y-0.5 transition-transform duration-300 hover:text-[#64ffda]"
            />
          </a>

          <a
            href="https://www.instagram.com/_pukarbajgain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:-translate-y-0.5 transition-transform duration-300 hover:text-[#64ffda]"
            />
          </a>
        </div>
        <div>
          <p className="text-xs sm:text-sm font-mono text-white justify-center mt-4">
            with ❤️ by <span className="text-[#64ffda]">Pukar</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
