import StyledPage from "./styledPage";
import PageBanner from "./components/PageBanner";
import CenteredContent from "./components/CenteredContent";
import MainText from "./components/MainText";
import WatchVideoButton from "./components/WatchVideoButton";
import Story from "./components/Story";
import Journey from "./components/Journey";
import OurTeam from "./components/OurTeam";
import Testimonies from "./components/Testimonies";

export default function Home() {
  return (
    <StyledPage>
      <PageBanner>
        <CenteredContent>
          <MainText />
          {/* <WatchVideoButton /> */}
        </CenteredContent>
      </PageBanner>
      <Story />
      <Journey />
      <OurTeam />
      <Testimonies />
    </StyledPage>
  );
}
