<template>
  <div class="movie-overview">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex mobile-grid">
      <div class="movie-detail__poster">
        <img
          :data-src="imgUrl + movie.poster_path"
          v-lazy-load
        >
      </div>
      <div class="movie-detail__information">
        <h3>{{ movieTitle }}</h3>
        <p>{{ movie.overview }}</p>
        <ul>
          <li><small>Released:</small> {{ movie.release_date }}</li>
          <li><small>Revenue:</small> {{ formatCurrency(movie.revenue) }}</li>
          <li><small>Runtime:</small> {{ movie.runtime }} minute</li>
          <li><small>Vote:</small> {{ movie.vote_average }}</li>
          <li>
            <small>Spoken Languages:</small>
            <ul>
              <li
                v-for="(item, index) in movie.spoken_languages"
                :key="index"
              >
                {{ item.english_name }}
              </li>
            </ul>
          </li>
          <li>
            <small>Genre:</small>
            <ul>
              <li
                v-for="(item, index) in movie.genres"
                :key="index"
              >
                {{ item.name }}
              </li>
            </ul>
          </li>
          <li>
            <small>Production:</small>
            <ul>
              <li
                v-for="(item, index) in movie.production_companies"
                :key="index"
              >
                {{ item.name }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <CardsSlider
        class="mt-3"
        title="Cast"
        :credits="movie.credits"
      />
    </div>
  </div>
</template>

<script>
import {apiImgUrl} from '~/api';
import CardsSlider from "~/components/CardsSlider";

export default {
  name: "MovieOverview",
  components: {
    CardsSlider
  },
  props: {
    movie: {
      type: [Object, Array],
      default: null
    }
  },
  methods: {
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      return formatter.format(value);
    },
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
