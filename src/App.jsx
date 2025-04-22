import { Typewriter } from "react-simple-typewriter";
function App() {
return (
  <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B192E]">
      <div className="text-base font-mono text-white justify-center sm:text-2xl md:text-3xl">
        <Typewriter
          words={[
            "Something cool is brewing...",
          ]}
          loop={20}
          cursor
          cursorStyle="_"
          typeSpeed={150}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </div>
      <div>
        
      <p className="text-xs sm:text-sm font-mono text-white justify-center mt-5">
        with ❤️ by {""}
        <a
          href="https://www.instagram.com/_pukarbajgain/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#64ffda] hover:animate-pulse"
        >
          Pukar
        </a>
      
      </p>
    </div>
    </div>
  
  </div>
);
}

export default App;
