import { NextResponse } from "next/server"
import type { CleanPhoto, FlickrResponse } from "@/lib/flickr.types"

export const INITIAL_IMAGE_TAG = "landscape"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const tags = searchParams.get("tags") || INITIAL_IMAGE_TAG

  const API_URL = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&tags=${tags}`

  try {
    const response = await fetch(API_URL)
    if (!response.ok) {
      throw new Error("Failed to fetch from Flickr API")
    }

    const data: FlickrResponse = await response.json()

    const cleanPhotos: CleanPhoto[] = data.items.map((item, index) => ({
      id: item.link + index,
      title: item.title || "Untitled",
      imageUrl: item.media.m.replace("_m.jpg", "_b.jpg"), // _b is 1024px, _m is 240px. Could optimize for mobile phones
      link: item.link,
    }))

    return NextResponse.json(cleanPhotos)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error fetching from Flickr" },
      { status: 500 },
    )
  }
}
