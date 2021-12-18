<template>
  <div class="hero-wrapper">
    <transition
      appear
      name="hero">
      <div class="movie-information">
        <div>
          <nuxt-link :to="`/movie/${movie.id}`">
            <h2>{{ movieTitle }}</h2>
          </nuxt-link>
          <VoteAndDate
            :content="movie"
            vote-type="voteCount"
          />
          <p>{{ movie.overview }}</p>
          <a
            target="_blank"
            :href="youtubeLink + movieTrailer.key"
            class="movie-trailer-link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M3 22v-20l18 10-18 10z"></path></svg>
            Watch Trailer
          </a>
        </div>
      </div>
    </transition>
    <div class="movie-bg-content">
      <img
        :data-src="imgUrl + movie.backdrop_path"
        v-lazy-load
      >
    </div>
  </div>
</template>

<script>
import {apiImgUrl} from '~/api';
import VoteAndDate from "./VoteAndDate";

export default {
  name: "Hero",
  components: {VoteAndDate},
  props: {
    movie: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      youtubeLink: 'https://www.youtube.com/watch?v=',
    }
  },
  computed: {
    imgUrl() {
      return apiImgUrl + 'original/'
    },
    movieTitle() {
      return this.movie.title ? this.movie.title : this.movie.name;
    },
    movieTrailer() {
      return this.movie.videos && this.movie.videos.results.find(f => f.type === 'Trailer')
    }
  }
}
</script>

<style scoped lang="scss">
.hero-wrapper {
  margin: 65px 0 0;
  height: 65vh;
  width: 100%;
  background-color: #000;
  position: relative;

  .movie-information {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 5rem 4rem;
    width: 45%;
    color: #fff;

    h2 {
      font-size: 38px;
      font-weight: 400;
    }

    p {
      font-size: 15px;
      font-weight: 300;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    .movie-trailer-link {
      font-size: 17px;
      font-weight: 500;
      line-height: 1;
      color: #fff;
      letter-spacing: .05em;
      font-weight: 400;
      padding: 10px 15px;
      cursor: pointer;
      display: flex;
      width: fit-content;
      transition: all .2s;
      background-color: #202124;
      margin-top: 20px;
      svg {
        margin-right: 10px;
      }
    }
  }

  .movie-bg-content {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 71.1%;
    height: 100%;
    z-index: 9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      content: "";
      background-image: linear-gradient(90deg, #000 0, transparent 70%, transparent);
    }
  }
}

@media screen and (max-width: 764px) {
  .hero-wrapper {
    .movie-information {
      padding: 0 20px;
      width: 100%;
      h2 {
        font-size: 20px;
      }
    }
    .movie-bg-content {
      width: 100%;
    }
  }
  .vote-and-date {
    display: grid;
  }
}

.hero-enter-active,
.hero-leave-active {
  transition: transform .75s cubic-bezier(.4, .25, .3, 1), opacity .3s cubic-bezier(.4, .25, .3, 1);
}

.hero-enter,
.hero-leave-to {
  opacity: 0;
  transform: translate3d(0, 2rem, 0);
}

.hero-enter-to,
.hero-leave {
  opacity: 1;
  transform: translateZ(0);
}
</style>
