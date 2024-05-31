import About from "./components/About";
import First from "./components/First";
import Header from "./components/Header";
import Project from "./components/Project";
import Project1 from "./components/Project1";
import Skill from "./components/Skill";
import "./index.css";
import { useRef } from "react";
function App() {
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const project1Ref = useRef(null);
  // mx-96
  // 컴포넌트 간 간격 16
  return (
    <div>
      <Header aboutRef={aboutRef} skillRef={skillRef} projectRef={projectRef} />
      <First />
      <About ref={aboutRef} />
      <Skill ref={skillRef} />
      <Project ref={projectRef} />
      <Project1 ref={project1Ref} />
    </div>
  );
}

export default App;
