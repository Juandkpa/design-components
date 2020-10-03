import React, { useContext, useState } from 'react';
const SpeakerContext = React.createContext();

const SpeakersProvider = (props) => {
    const [speakers, setSpeakers] = useState([]);

    const addSpeaker = (speaker) => {
        setSpeakers([...speakers, speaker]);
    };

    const speakerData = { speakers, add: addSpeaker };
    return <SpeakerContext.Provider value={speakerData} {...props} />;
};

const useSpeakersContext = () => {
    return useContext(SpeakerContext);
}

export { SpeakersProvider, useSpeakersContext };

