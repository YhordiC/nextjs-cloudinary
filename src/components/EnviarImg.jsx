import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

export default function EnviarImg() {
 
    const [resource, setResource] = useState();
     return(
    <CldUploadWidget
    uploadPreset='next_cloudinary_app'
    >
      {({ open }) => {
        return (
            <button onClick={() => open()}>
              Upload an Image
            </button>
          );
          
        
        
      }}
    </CldUploadWidget>
)}
