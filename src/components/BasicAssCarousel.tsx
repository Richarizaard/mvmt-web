import { useState } from 'react'

interface BasicAssCarouselProps {
  imgs: string[]
}

const BasicAssCarousel = ({ imgs }: BasicAssCarouselProps) => {
  const [images, setImages] = useState<string[]>(imgs)
  const activeIdx = 0

  const handleNext = () => {
    //Get first and add to the end of the list
    const temp = images.slice(1, images.length)
    const first = images[0]

    if (!temp || !first) return
    setImages([...temp, first])
  }

  const handlePrev = () => {
    // Get end and add to the front of the list
    const temp = images.slice(0, images.length - 1)
    const last = images[images.length - 1]
    if (!temp || !last) return
    setImages([last, ...temp])
  }

  return (
    <div className="h-[300px]">
      <div className="flex justify-end gap-2">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="flex max-w-[230px] gap-4 justify-between">
        {images.map((node, idx) => (
          <img
            key={idx}
            src={node}
            alt=""
            className={`${
              idx !== activeIdx ? 'grayscale-[90%]' : 'grayscale-0'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default BasicAssCarousel