import { BestApp } from "./bestapp-showcase";
import { Navbar } from "./navbar";
import background from "./images/background.png";
import { OurCompany } from "./ourcompany";
import { AppsAndGames } from "./appsAndGames";
import { GameList } from "./gamelist";
import { SupportedDevices } from "./supporteddevices";
import { FeedbackList } from "./feedbacklist";
import { Support } from "./support";

export function Starting() {
  return (
    <div className="relative">
      <img src={background} alt="Logo" className="object-contain" />
      <div className="absolute inset-0 bg-opacity-50">
        <Navbar />
        <BestApp />
      </div>
      <OurCompany />
      <AppsAndGames />
      <GameList />
      <SupportedDevices />
      <FeedbackList />
      <Support />
    </div>
  );
}
