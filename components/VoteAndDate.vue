<template>
  <div
    class="vote-and-date"
    v-if="content"
  >
    <div
      v-if="stars"
      class="stars-content">
      <span :style="{ width: `${stars}%` }"/>
    </div>
    <small v-if="voteType === 'voteCount'">{{ content.vote_count }} Reviews</small>
    <small v-if="voteType === 'voteAverage'">{{ content.vote_average }}</small>
    <small class="ml-1.5 border-text">
      {{ content.release_date ? content.release_date : content.first_air_date | dateFormat }}
    </small>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "VoteAndDate",
  props: {
    content: {
      type: [Object, Array],
      required: true,
    },
    voteType: {
      type: String,
      default: ''
    }
  },
  filters: {
    dateFormat(date) {
      return moment(date).format('Do MMMM YYYY');
    }
  },
  computed: {
    stars() {
      return this.content && this.content.vote_average * 10;
    },
  }
}
</script>
