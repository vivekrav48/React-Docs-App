import React, { useRef, useState } from 'react'
import Card from './Card'

function Forground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repudiandae id quae placeat!",
      filesize: ".3mb,",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repudiandae id quae placeat!",
    filesize: ".2mb,",
    close: true,
    tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
  },
  {
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repudiandae id quae placeat!",
    filesize: ".4mb,",
    close: false,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green"},
  },
  {
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta repudiandae id quae placeat!",
    filesize: ".9mb,",
    close: false,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
  }
  ];
  // useState()
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full flex gap-7 flex-wrap p-6'>
        {data.map((item, index)=>(
          <Card data={item} reference={ref} />
        ))}
      </div>
  )
}

export default Forground