import React, { useContext } from 'react';
import SpeakerContext from "./SpeakersContext";
import SpeakerSearchBar from '../SpeakerSearchBar/SpeakerSearchBar';

const Speakers = () => {
    const speakers = useContext(SpeakerContext);
    return (
        <div>
            {speakers.map( ({ imageSrc, name }) => (
              <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>)
            )}
        </div>
    );
};

export default Speakers;