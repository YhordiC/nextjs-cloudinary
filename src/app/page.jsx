"use client";
import {EnviarImg} from '@/components/EnviarImg';
import VIewImg from '@/components/VIewImg';
import { CldImage, CldUploadButton } from 'next-cloudinary';

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
export default function Page() {
  return (
    <EnviarImg>
      <VIewImg/>
    </EnviarImg>
   
  );
}
  
