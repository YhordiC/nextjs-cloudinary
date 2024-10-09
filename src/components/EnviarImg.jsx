import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { useState,createContext } from 'react';

export const Micontexto = createContext();

export function EnviarImg({children}) {
 
    const [resource, setResource] = useState({});
     return(
      <>
      <CldUploadWidget
    uploadPreset='next_cloudinary_app'
    onSuccess={(results) => {
      console.log(results.info)
      setResource(results.info)
    }}
    >
      {({ open , cloudinary, widget, result}) => {
        return (
            <button onClick={() => {open()}}>
              Upload an Image
            </button>
          );
          
        
        
      }}
    </CldUploadWidget>
    <Micontexto.Provider value={{ value: resource, setvalor: setResource }}>
    {children}
      </ Micontexto.Provider>
    </>
)}
