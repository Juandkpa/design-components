import React from 'react';
import SpeakerSearchBar from '../SpeakerSearchBar/SpeakerSearchBar';
import SpeakersRenderProps from './SpeakersRenderProps';

const Speakers = () => {
    return (
        <SpeakersRenderProps>
            {({ speakers }) => {
                return (
                    <div>
                        {speakers.map(({ imageSrc, name }) => {
                            return <img src={`/images/${imageSrc}.png`} alt={name} key={imageSrc}></img>;
                        })}
                    </div>
                );
            }}
        </SpeakersRenderProps>
    );
};

export default Speakers;
