"use client"

import PhotoCard from "@/components/photo/PhotoCard"

export default function PhotoWall() {
  return (
    <div className="w-full grid gap-3 grid-cols-2 md:grid-cols-3">
      <PhotoCard />
      <PhotoCard />
      <PhotoCard />
    </div>
  )
}
