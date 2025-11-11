import React from "react"
import Image from "next/image"
import { CleanPhoto } from "@/lib/flickr.types"

interface PhotoCardProps {
  photo: CleanPhoto
}

/**
 * A simple, presentational component that renders a single photo.
 * Has no internal state or fetching logic.
 * @param photo The photo to display
 */
export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <a
      href={photo.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="aspect-w-1 aspect-h-1 relative w-full overflow-hidden">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          fill={true}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          className="transition-all duration-500 ease-in-out group-hover:scale-110 opacity-0 object-cover"
        />
      </div>
    </a>
  )
}
