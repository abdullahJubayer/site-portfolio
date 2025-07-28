import { BestApp } from "./bestapp-showcase";
import { Navbar } from "./navbar";
import background from "./images/background.png";
import { OurCompany } from "./ourcompany";
import { AppsAndGames } from "./appsAndGames";
import { GameList } from "./gamelist";
import { SupportedDevices } from "./supporteddevices";
import { Support } from "./support";
import Carousel from "./Carousel";
import { FeedbackCarousel } from "./feedbackCarousel";

export function Starting() {
  return (
    <div>
      <Navbar />
      <img src={background} alt="Logo" className="object-contain absolute" />
      <div className="relative">
        <BestApp />
      </div>
      <OurCompany />
      <AppsAndGames />
      <GameList />
      <SupportedDevices />
      <Carousel />;
      <FeedbackCarousel />
      <Support />
    </div>
  );
}
