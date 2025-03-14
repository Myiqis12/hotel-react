import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { RoomDetails } from "./components/RoomDetails";
import { RoomImpressions } from "./components/RoomImpressions";
import { BookingForm } from "./components/BookingForm";
import { Reviews } from "./components/Reviews";
import { Rules } from "./components/Rules";
import { Cancellation } from "./components/Cancellation";
import "./styles/global.css";
import { Footer } from "./components/Footer";
import { Room } from "./components/Room"
import { RulesAndCancellation } from "./components/RulesAndCancellation";

function App() {
  return (
    <div className="app">
      <Header/>
      <Gallery/>
      <Room/>
      <RulesAndCancellation/>
      <Footer />
    </div>
  );
}

export default App;
