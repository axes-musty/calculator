import React, { useContext, useState } from 'react';
import '../App.css';
import { AppContext } from '../context/AppContext';



const CommandLine = () => {
    const { content } = useContext(AppContext);
    return (  
            <span>{content}</span>
        /* <input className='cmdline' placeholder='Operation'  type="text" value={content}></input> */
    )
}
export default CommandLine;