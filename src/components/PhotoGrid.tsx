import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useFlickrFeed } from "@/hooks/useFlickrFeed"
import PhotoCard from "./PhotoCard"

interface PhotoGridProps {
  tags: string
  trigger: number
}

/**
 * A grid of animated photos fetched from flickr with loading state implemented
 * @param tags The tags to include when fetching images
 * @param trigger A number that can be incremented to force re-fetch images
 */
export default function PhotoGrid({ tags, trigger }: PhotoGridProps) {
  const { photos, isLoading } = useFlickrFeed(tags, trigger)

  // Loading screen
  if (isLoading && photos.length === 0) {
    return (
      <div className="text-center p-10">
        <p className="text-gray-500 animate-pulse">Loading photos...</p>
      </div>
    )
  }

  // Grid of photo cards with animations (spring/opacity) on enter/exit
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <AnimatePresence>
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <PhotoCard photo={photo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
