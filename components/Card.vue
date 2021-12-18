<template>
  <div class="movie-card">
    <nuxt-link :to="`/movie/${item.id}`">
      <div class="movie-card__poster">
        <img
          :data-src="imgUrl + item.poster_path"
          v-lazy-load
        >
      </div>
      <small>{{ item.title ? item.title : item.name }}</small>
      <VoteAndDate
        :content="item"
        vote-type="voteAverage"
      />
    </nuxt-link>
  </div>
</template>

<script>
import {apiImgUrl} from '~/api';
import VoteAndDate from "./VoteAndDate";

export default {
  name: "Card",
  components: {VoteAndDate},
  props: {
    item: {
      type: [Array, Object],
      default: null
    }
  },
  computed: {
    imgUrl() {
      return apiImgUrl + 'w500/'
    },
    stars() {
      return this.item && this.item.vote_average * 10;
    },
  }
}
</script>
