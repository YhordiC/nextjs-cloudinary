"use client";
import EnviarImg from '@/components/EnviarImg';
import { CldImage, CldUploadButton } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
  return (
    <>
    <EnviarImg/>
<CldImage
    priority
    src="samples/man-on-a-street" // Use this sample image or upload your own via the Media Explorer
    width="960"
    height="600"
    replaceBackground="Zombies help me"
    crop = 'fill'
    restore
    alt=""
    sizes="100vw"
     
      
    />
    </>
   
  );
}
  
