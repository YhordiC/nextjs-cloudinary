import { CldImage } from 'next-cloudinary'
import {Micontexto} from './EnviarImg'
import { useContext } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
export default function VIewImg() {

    const { value, setvalor } = useContext(Micontexto)
    const [idImg, setidMig] = useState('samples/man-on-a-street')
    useMemo(() =>{
        if(value !== 'Micontexto')
        { setidMig(value.public_id)}
    },[value])
  return(
  <CldImage
  priority
  src={idImg} // Use this sample image or upload your own via the Media Explorer
  width={value.width}
  height={value.height}
  replaceBackground="Zombies help me"
  crop = 'fill'
  restore
  alt=""
  sizes="100vw"
   
    
  />)
}
