import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Footer from "../src/components/Footer/Footer";

const Page = () => (
    <div>
        <Header />
        <Menu />
        <SpeakerSearchBar />
        <Speakers />
        <Footer />        
    </div>
);
export default Page;