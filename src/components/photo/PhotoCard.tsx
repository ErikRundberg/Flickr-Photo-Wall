import React, { useState, useEffect } from "react"
import Image from "next/image"

// Constants
const POLLING_INTERVAL = 3000 // 30 seconds
const FADE_DURATION = 1000 // 1 second (Must match the Tailwind transition duration-1000)

// Mock API function (Replace this with your actual API call)
const fetchNewImageUrl = async () => {
  console.log("Fetching new image URL...")
  // Simulate an API call delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  const randomId = Math.floor(Math.random() * 1000)
  return `https://picsum.photos/400/300?random=${randomId}`
}

/**
 * A Next.js component that fetches and displays a new image on a fixed interval,
 * using a smooth opacity transition and a loading spinner.
 */
export default function PhotoCard() {
  const [imageUrl, setImageUrl] = useState(null)
  const [isFading, setIsFading] = useState(false)
  const [isFetching, setIsFetching] = useState(true) // Starts as true for initial load

  /**
   * Orchestrates the image fetch, fade-out, URL swap, and fade-in process.
   */
  const updateImage = async () => {
    // 1. START: Set fetching true before the network request
    setIsFetching(true)

    let newUrl
    try {
      newUrl = await fetchNewImageUrl()
    } catch (error) {
      console.error("Error fetching image:", error)
      setIsFetching(false)
      return
    }

    // If there is a current image, we fade it out first
    if (imageUrl) {
      // 2. FADE-OUT: Set isFading to true (opacity-0)
      setIsFading(true)

      // 3. Pause for FADE_DURATION (wait for old image to fully fade out)
      await new Promise((resolve) => setTimeout(resolve, FADE_DURATION))
    }

    // 4. SWAP URL: Update the image URL state while still faded out
    setImageUrl(newUrl)

    // The spinner stays on until handleImageLoadComplete is called by the <Image /> component
  }

  /**
   * Called by the Next/Image component when the new source image has finished loading.
   */
  const handleImageLoadComplete = () => {
    // 5. FADE-IN: The new image is ready, trigger the fade-in (opacity-100)
    setIsFading(false)

    // 6. STOP SPINNER: The image is visible and loaded
    setIsFetching(false)
  }

  /**
   * useEffect Hook for Polling Logic (runs only on mount/unmount)
   */
  useEffect(() => {
    updateImage()
    const intervalId = setInterval(updateImage, POLLING_INTERVAL)

    // Cleanup function: clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex flex-col items-center gap-6 p-10 bg-gray-50 rounded-xl shadow-lg">
      {/* Fixed-size container for image and spinner to prevent layout shift */}
      <div className="w-[400px] h-[300px] shadow-xl rounded-lg overflow-hidden relative flex items-center justify-center bg-gray-200">
        {/* Conditional Spinner Display */}
        {isFetching && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Tailwind Spinner */}
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-t-blue-500 border-gray-400"></div>
          </div>
        )}

        {/* Conditional Image Display: Only render the image wrapper if we have a URL */}
        {imageUrl && (
          <div
            className={`
                    transition-opacity duration-1000 ease-in-out 
                    ${isFading || isFetching ? "opacity-0" : "opacity-100"}
                    w-full h-full
                `}
          >
            <Image
              src={imageUrl}
              alt="Polled Photo"
              width={400}
              height={300}
              // This is the key handler for reliable transitions
              onLoad={handleImageLoadComplete}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  )
}
