import PhotoWall from "@/components/PhotoWall"

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Flickr Photo Wall
      </h1>

      <PhotoWall />
    </main>
  )
}
