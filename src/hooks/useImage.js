import React, { useState, useEffect, useRef } from 'react'

const useImage = ({ src, fallbackSrc }) => {
  const loadedImgs = useRef(new Set())
  const [, setUpdateCounter] = useState(0)

  useEffect(() => {
    if (!loadedImgs.current.has(src)) {
      const img = new Image()
      img.onload = () => {
        loadedImgs.current.add(src)
        setUpdateCounter(v => v + 1)
      }
      img.src = src;
    }
  }, [src]);

  return loadedImgs.current.has(src) ? src : fallbackSrc;
}

export default useImage
