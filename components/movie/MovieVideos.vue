<template>
  <div class="movie-videos">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex">
      <div class="container mx-auto">
        <div class="grid grid-cols-6">
          <div
            class="p-2"
            v-for="video in videos.results"
            :key="video.id"
          >
            <a
              class="movie-videos--youtube-link"
              target="_blank"
              :href="youtubeLink + video.key"
            >
              <img
                :data-src="imgUrl + posterPath"
                v-lazy-load
              >
              <small>{{ video.name }}</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {apiImgUrl} from '~/api';

export default {
  name: "MovieVideos",
  props: {
    videos: {
      type: [Object, Array],
      default: null
    },
    posterPath: {
      type: [String, Object, Array],
      default: null
    }
  },
  data() {
    return {
      youtubeLink: 'https://www.youtube.com/watch?v=',
    }
  },
  computed: {
    imgUrl() {
      return apiImgUrl + 'w500/'
    },
  }
}
</script>
