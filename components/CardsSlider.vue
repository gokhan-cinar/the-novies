<template>
  <div class="movies-slider">
    <h3>{{ title }}</h3>
    <template>
      <VueSlickCarousel v-bind="slickOptions">
        <template v-if="movies && movies.results">
          <div
            v-for="(movies, index) in movies.results"
            :key="index"
          >
            <Card :item="movies"/>
          </div>
        </template>
        <template v-if="castsContent">
          <div
            v-for="(cast, index) in castsContent"
            :key="index"
          >
            <Credits :item="cast"/>
          </div>
        </template>
      </VueSlickCarousel>
    </template>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

import Card from "./Card";
import Credits from "./Credits";

export default {
  name: "CardsSlider",
  components: {Card, Credits, VueSlickCarousel},
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
      slickOptions: {
        dots: false,
        focusOnSelect: true,
        infinite: false,
        speed: 600,
        slidesToShow: 6.5,
        slidesToScroll: 6,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: false,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              arrows: false,
              dots: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            }
          }
        ]
      },
    }
  },
  computed: {
    castsContent() {
      return this.credits && this.credits.cast.filter(m => m.profile_path !== null)
    }
  }
}
</script>
<style lang="scss">
.carousel-wrapper {
  padding: 40px;
}

.img-wrapper img {
  margin: auto;
  width: 200px;
  height: 100px;
  background-image: linear-gradient(gray 100%, transparent 0);
}

.slick-slider .slick-slide {
  padding: 0 15px 0 0;
}

.slick-prev, .slick-next {
  width: 40px;
  height: 40px;

  &::before {
    content: "";
    width: 40px;
    height: 40px;
    position: relative;
    display: block;
    background-image: url("../assets/images/icons/slider-arrow.png");
    background-size: cover;
    transform: rotate(90deg);
  }
}

.slick-next {
  right: -40px;
  &::before {
    transform: rotate(-90deg);
  }
}

.slick-prev {
  left: -40px;
}
</style>
