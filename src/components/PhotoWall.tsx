"use client"

import React, { useState } from "react"
import SearchForm from "./SearchForm"
import PhotoGrid from "./PhotoGrid"
import { INITIAL_IMAGE_TAG } from "@/app/api/flickr/route"

/**
 * Container component which combines the search form and the photo grid
 */
export default function PhotoWall() {
  const [tags, setTags] = useState(INITIAL_IMAGE_TAG)
  const [trigger, setTrigger] = useState(0)

  const handleSearch = (newTags: string) => {
    setTags(newTags)
    setTrigger((t) => t + 1)
  }

  return (
    <>
      <SearchForm onSearch={handleSearch} />

      <PhotoGrid tags={tags} trigger={trigger} />
    </>
  )
}
