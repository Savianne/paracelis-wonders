import StyledPage from "./styledPage";
import PageBanner from "../components/PageBanner";
import CenteredContent from "../components/CenteredContent";
import Mission from "./mission";
import Vision from "./Vision";
import AboutProvince from "./AbouProvince";
import AboutParacelis from "./AboutParacelis";
import CulturalFestival from "./CulturalFestival";

export default function About() {
  return (
    <StyledPage>
      <PageBanner>
        <CenteredContent>
            <h1>ABOUT US</h1>
            <p>Welcome to Paracelis Wonders! We are dedicated to making your discovery of Paracelis as seamless and inspiring as possible.</p>
        </CenteredContent>
      </PageBanner>
      <Mission />
      <Vision />
      <AboutProvince />
      <AboutParacelis />
      <CulturalFestival />
    </StyledPage>
  );
}
