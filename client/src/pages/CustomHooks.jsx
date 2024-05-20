import { useEffect, useRef, useState } from "react"

export const useWindowResizeThreshold = threshold => {
  const [isDesktopSize, setisDesktopSize] = useState(window.innerWidth >= threshold)
  const prevWidth = useRef(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth
      if (currWidth > threshold && prevWidth.current <= threshold) {
        setisDesktopSize(true)
      } else if (currWidth < threshold && prevWidth.current >= threshold) {
        setisDesktopSize(false)
      }
      prevWidth.current = currWidth
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isDesktopSize
}
