import MobileHeader from "./components/MobileHeader";
import NavBar from "./components/NavBar";
import './styles/Home.css';

export default function Home () {
  return (
    <div className="home-container">
      <NavBar />

      {/* placeholders for wall and profile section */}
      <div className="wall-container">Wall</div>
      <div className="personal-container">Personal</div>
      <MobileHeader />
    </div>
  )
}