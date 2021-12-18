<template>
  <div>
    <Hero :movie="featured"/>
    <CardsSlider
      class="mt-5"
      :movies="trendingMovies"
      title="Trending Movies"
    />
    <CardsSlider
      class="mt-3"
      :movies="popularMovies"
      title="Popular Movies"
    />
  </div>
</template>

<script>
import {getTrending, getMovie, getTvShow, getPopular} from '~/api';
import Hero from '~/components/Hero'
import CardsSlider from "~/components/CardsSlider";

export default {
  name: 'Index',
  components: {
    Hero,
    CardsSlider,
  },
  async asyncData({error}) {
    try {
      const trendingMovies = await getTrending('movie');
      const popularMovies = await getPopular();

      let featured;
      const items = [...trendingMovies.results, ...popularMovies.results];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      const media = randomItem.title ? 'movie' : 'tv';
      if (media === 'movie') {
        featured = await getMovie(randomItem.id);
      }
      return {trendingMovies, popularMovies, featured};
    } catch {
      error({statusCode: 504, message: 'Data not available'});
    }
  },
};
</script>
<style lang="scss" scoped>
.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    img {
      width: 100%;
    }
  }
}
</style>
