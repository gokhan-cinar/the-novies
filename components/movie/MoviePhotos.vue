<template>
  <div class="movie-photos">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex">
      <div class="container mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
          <div
            class="flex p-2"
            v-for="photo in photos"
            :key="photo.id">
            <img
              :data-src="imgUrl + photo.file_path"
              v-lazy-load
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {apiImgUrl} from '~/api';

export default {
  name: "MoviePhotos",
  props: {
    photos: {
      type: [Object, Array],
      default: null
    },
  },
  computed: {
    imgUrl() {
      return apiImgUrl + 'w500/'
    },
  }
}
</script>
