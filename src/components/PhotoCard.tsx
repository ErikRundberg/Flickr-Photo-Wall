import React from "react"
import Image from "next/image"
import { CleanPhoto } from "@/lib/flickr.types"

interface PhotoCardProps {
  photo: CleanPhoto
}

/**
 * A simple, presentational component that renders a single photo.
 * It receives its data via props and has no internal state or fetching logic.
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

      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-110 transition-opacity duration-300">
        <h3 className="text-white text-sm font-semibold truncate">
          {photo.title}
        </h3>
      </div>
    </a>
  )
}
