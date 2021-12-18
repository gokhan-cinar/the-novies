<template>
  <div class="movies-slider">
    <h3>{{ title }}</h3>
    <swiper
      ref="carousel"
      class="swiper"
      :options="swiperOption"
    >
      <template v-if="movies && movies.results">
        <swiper-slide
          v-for="(movies, index) in movies.results"
          :key="index"
        >
          <Card :item="movies"/>
        </swiper-slide>
      </template>
      <template v-if="castsContent">
        <swiper-slide
          v-for="(cast, index) in castsContent"
          :key="index"
        >
          <Credits :item="cast"/>
        </swiper-slide>
      </template>
    </swiper>
    <div class="swiper-button-prev" @click="prev()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              stroke-miterlimit="10" d="M17.9 23.2L6.1 12 17.9.8"></path>
      </svg>
    </div>
    <div class="swiper-button-next" @click="next()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              stroke-miterlimit="10" d="M6.1 23.2L17.9 12 6.1.8"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import Credits from "./Credits";

export default {
  name: "CardsSlider",
  components: {Card, Credits},
  props: {
    movies: {
      type: [Array, Object],
      default: null
    },
    credits: {
      type: [Array, Object],
      default: null
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        slidesPerGroup: 3,
        spaceBetween: 15,
        pagination: false,
        allowTouchMove: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          }
        }
      }
    }
  },
  methods: {
    prev() {
      this.$refs.carousel.$swiper.slidePrev();
    },
    next() {
      this.$refs.carousel.$swiper.slideNext();
    }
  },
  computed: {
    castsContent() {
      return this.credits && this.credits.cast.filter(m => m.profile_path !== null)
    }
  }
}
</script>
