import { BestApp } from "./bestapp-showcase";
import { Navbar } from "./navbar";
import background from "./images/background.png";
import { OurCompany } from "./ourcompany";
import { AppsAndGames } from "./appsAndGames";
import { GameList } from "./gamelist";
import { SupportedDevices } from "./supporteddevices";
import { Support } from "./support";
import { FeedbackCarousel } from "./feedbackCarousel";
import Carousel from "./carousel";
import { useRef } from "react";

export function Starting() {
  const aboutUs = useRef<HTMLDivElement>(null);
  const ourApps = useRef<HTMLDivElement>(null);
  const deviceSupport = useRef<HTMLDivElement>(null);
  const screens = useRef<HTMLDivElement>(null);
  const feedback = useRef<HTMLDivElement>(null);
  const contractUs = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "About Us":
        aboutUs.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Our Apps":
        ourApps.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Device Support":
        deviceSupport.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "Screens":
        screens.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Feedback":
        feedback.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
      case "Contact Us":
        contractUs.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        break;
    }
  };

  return (
    <div>
      <Navbar
        onNavClick={(section) => {
          scrollToSection(section);
        }}
      />
      <img src={background} alt="Logo" className="object-contain absolute" />
      <BestApp />
      <OurCompany ref={aboutUs} />
      <AppsAndGames ref={ourApps} />
      <GameList />
      <SupportedDevices ref={deviceSupport} />
      <Carousel ref={screens} />;
      <FeedbackCarousel ref={feedback} />
      <Support ref={contractUs} />
    </div>
  );
}
