import React from 'react'
import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

export default function EnviarImg() {
 
    const [resource, setResource] = useState();
     return(
    <CldUploadWidget
    uploadPreset='next_cloudinary_app'
    >
      
        return (
            <button>
              Upload an Image
            </button>
          );
          
    </CldUploadWidget>
)}
