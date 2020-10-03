import Header from "../src/components/Header/Header";
import Menu from "../src/components/Menu/Menu";
import Speakers from "../src/components/Speakers/Speakers";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import Footer from "../src/components/Footer/Footer";
import SpeakerContext from "../src/components/Speakers/SpeakersContext";

const speakers = [
    {
        imageSrc: 'speaker-component-1124',
        name: 'Douglas Crockford'
    },
    {
        imageSrc: 'speaker-component-1530',
        name: 'Tamara Baker'
    },
    {
        imageSrc: 'speaker-component-10803',
        name: 'Eugene Chuvyrov'
    }
];

const Page = () => (
    <div>
        <Header />
        <Menu />
        <SpeakerContext.Provider value={speakers}>
          <SpeakerSearchBar />
          <Speakers />
        </SpeakerContext.Provider>        
        <Footer />        
    </div>
);
export default Page;