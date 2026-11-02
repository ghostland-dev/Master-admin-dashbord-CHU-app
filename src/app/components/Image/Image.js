import React from 'react'
import { Image } from 'next/image';

function Img({ src ,note, h, w}) {
  return (
    <Image src={src} alt={note} width={w} height={w}  />
  )
}

export default Image