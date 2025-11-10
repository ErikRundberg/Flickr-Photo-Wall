"use client"

import React, { useState } from "react"
import SearchForm from "./SearchForm"
import PhotoGrid from "./PhotoGrid"
import { INITIAL_IMAGE_TAG } from "@/app/api/flickr/route"

export default function PhotoWall() {
  const [tags, setTags] = useState(INITIAL_IMAGE_TAG)

  return (
    <>
      <SearchForm onSearch={(newTags) => setTags(newTags)} />
      <PhotoGrid tags={tags} />
    </>
  )
}
