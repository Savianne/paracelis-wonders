import StyledPage from "./styledPage";
import PageBanner from "../components/PageBanner";
import CenteredContent from "../components/CenteredContent";
import Accommodations from "./AccomodationList";

export default function Destination() {
  return (
    <StyledPage>
      <PageBanner>
        <CenteredContent>
            <h1>Accommodations</h1>
            <p>Discover a variety of locally-owned accommodations, from cozy homestays to charming inns. 
                Enjoy warm hospitality and a comfortable stay while experiencing the unique culture of the community.</p>
        </CenteredContent>
      </PageBanner>
      <CenteredContent>
        <Accommodations />
      </CenteredContent>
    </StyledPage>
  );
}
