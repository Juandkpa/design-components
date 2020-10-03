import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Footer from "../src/components/Footer/Footer";
import { SpeakersProvider } from "../src/components/Speakers/SpeakersContext";

const Page = () => {
    return (
        <div>
            <Header />
            <Menu />
            <SpeakersProvider>
              <SpeakerSearchBar />
              <Speakers />
            </SpeakersProvider>
            <Footer />
        </div>
    )
};
export default Page;
