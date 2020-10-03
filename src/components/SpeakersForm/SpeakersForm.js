import React, { useState } from 'react';
import { useSpeakersContext } from '../Speakers/SpeakersContext';

const SpeakersForm = () => {
    const [name, setName] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const { add } = useSpeakersContext();

    const handleSubmit = e => {
        e.preventDefault();                   
        add({ id: Math.floor(Math.random() * 100) + 1, name, imageSrc });
        setName('');
        setImageSrc('');
    };

    return (
        <form onSubmit={handleSubmit}>            
            <input 
                placeholder={'name'} 
                value={name} 
                onChange={ e => setName(e.target.value) }
            />
            <br></br>
            <input 
                placeholder={'image'} 
                value={imageSrc} 
                onChange={ e => setImageSrc(e.target.value) }
            />
            <button type="submit">save</button>
        </form>
    );
};

export default SpeakersForm;
