<template>
  <div class="movie-detail">
    <div class="movie-detail__tabs">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.tadId"
          :class="{'active': activeTab === tab.tadId}"
        >
          <button @click="changeTab(tab.tadId)">{{ tab.name }}</button>
        </li>
      </ul>
    </div>
    <MovieOverview
      v-if="activeTab === 1"
      :movie="movie"
    />
    <MovieVideos
      v-if="activeTab === 2"
      :videos="movie.videos"
      :poster-path="movie.poster_path"
    />
    <MoviePhotos
      v-if="activeTab === 3"
      :photos="movie.images.posters"
    />
  </div>
</template>

<script>
import {apiImgUrl, getMovie} from '~/api';
import MovieOverview from "~/components/movie/MovieOverview";
import MovieVideos from "~/components/movie/MovieVideos";
import MoviePhotos from "~/components/movie/MoviePhotos";

export default {
  name: "MovieDetail",
  components: {MoviePhotos, MovieVideos, MovieOverview},
  data() {
    return {
      tabs: [
        {name: 'Overview', tadId: 1},
        {name: 'Videos', tadId: 2},
        {name: 'Photos', tadId: 3}
      ],
      activeTab: 1
    }
  },
  head() {
    return {
      title: this.movie.title,
    };
  },
  async asyncData({params, error}) {
    try {
      const movie = await getMovie(params.id);

      if (movie.adult) {
        error({message: 'This movie is not available'});
      } else {
        return {movie};
      }
    } catch {
      error({message: 'Page not found'});
    }
  },
  methods: {
    changeTab(id) {
      this.activeTab = id;
    }
  },
  computed: {
    imgUrl() {
      return apiImgUrl + 'w500/'
    },
    movieTitle() {
      return this.movie.title ? this.movie.title : this.movie.name;
    }
  }
}
</script>

