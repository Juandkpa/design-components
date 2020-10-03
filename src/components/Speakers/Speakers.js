import React, { useContext } from 'react';
import { useSpeakersContext } from "./SpeakersContext";
import SpeakerForm from "../SpeakersForm/SpeakersForm";

const Speakers = () => {
    const { speakers } = useSpeakersContext();
    return (
        <div>
            <SpeakerForm />
            {speakers.map( ({ imageSrc, name, id }) => (                
                <img key={id} src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>                
                )
            )}
        </div>
    );
};

export default Speakers;
