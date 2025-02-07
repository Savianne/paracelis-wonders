import StyledPage from "./styledPage";
import PageBanner from "../components/PageBanner";
import CenteredContent from "../components/CenteredContent";
import Journey from "./Journey";

export default function Destination() {
  return (
    <StyledPage>
      <PageBanner>
        <CenteredContent>
            <h1>Your Journey Starts Here</h1>
            <p>Our app was created to connect locals and travelers with the town's breathtaking landscapes, vibrant culture, and hidden treasures.</p>
        </CenteredContent>
      </PageBanner>
      <Journey />
    </StyledPage>
  );
}
