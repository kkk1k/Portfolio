import About from "./components/About";
import First from "./components/First";
import Header from "./components/Header";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Project1 from "./components/Project1";
import "./index.css"

function App() {
  // mx-96
  // 컴포넌트 간 간격 16
  return (
    <div>
      <Header />
      <First />
      <About />
      <Skill />
      <Project />
      {/* <Project1 /> */}
    </div>
  );
}

export default App;
