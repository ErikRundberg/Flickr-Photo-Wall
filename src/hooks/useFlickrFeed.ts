import { useState, useEffect } from "react"
import { CleanPhoto } from "@/lib/flickr.types"

const POLLING_INTERVAL = 10000 // 10 seconds

/**
 * Hook to fetch photos and handle loading state from flickr
 * @param tags The tags to include when fetching images
 * @param trigger A number that can be incremented to force re-fetch images
 */
export function useFlickrFeed(tags: string, trigger: number) {
  const [photos, setPhotos] = useState<CleanPhoto[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchPhotos = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/flickr?tags=${tags}`)
      if (!response.ok) throw new Error("Failed to fetch photos")

      const data: CleanPhoto[] = await response.json()

      setPhotos(data.slice(0, 12))
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Fetch photos immediately on tag change
    fetchPhotos()

    // Start polling
    const intervalId = setInterval(fetchPhotos, POLLING_INTERVAL)

    // Cleanup on unmount or tag change
    return () => clearInterval(intervalId)
  }, [tags, trigger])

  return { photos, isLoading }
}
