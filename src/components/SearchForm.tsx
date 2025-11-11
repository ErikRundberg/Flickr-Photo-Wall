import React, { useState } from "react"

interface SearchFormProps {
  onSearch: (tags: string) => void
  initialTags: string
}

export default function SearchForm({ onSearch, initialTags }: SearchFormProps) {
  const [tags, setTags] = useState(initialTags)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(tags)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4">
      <label
        htmlFor="search-tags"
        className="block text-sm font-medium text-gray-700"
      >
        Search Flickr by Tags
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          name="search-tags"
          id="search-tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="flex-1 block w-full rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-3 py-2"
          placeholder="e.g., landscape, sunset"
        />
        <button
          type="submit"
          className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Search
        </button>
      </div>
    </form>
  )
}
