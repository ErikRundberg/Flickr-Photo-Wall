export interface CleanPhoto {
  id: string // We'll derive this from the link
  title: string
  imageUrl: string
  link: string
}

export interface RawFlickrItem {
  title: string
  link: string
  media: { m: string } // This 'm' is the image URL
  author: string
  tags: string
}

export interface FlickrResponse {
  title: string
  items: RawFlickrItem[]
}
