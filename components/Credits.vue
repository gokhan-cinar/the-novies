<template>
  <div class="credits-card">
    <div class="credits-card__poster">
      <img
        :data-src="imgUrl + item.profile_path"
        v-lazy-load
      >
    </div>
    <small>{{ item.name }}</small>
    <small class="character">{{ item.character }}</small>
  </div>
</template>


<script>
import {apiImgUrl} from '~/api';

export default {
  name: "Credits",
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
  }
}
</script>
