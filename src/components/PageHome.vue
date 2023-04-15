<template>
  <div>
    <h1>Top books</h1>

    <div class="featured-book">
      <div class="recommended">Recommended</div>

      <img src="@/assets/01-becoming.jpg" />

      <div class="book-info">
        <h2 class="title">Becoming</h2>
        <div class="author">Michelle Obama</div>

        <div class="synopsis">
          <p>
            In a life filled with meaning and accomplishment, Michelle Obama has
            emerged as one of the most iconic and compelling women of our era.
            As First Lady of the United States of America—the first African
            American to serve in that role—she helped create the most welcoming
            and inclusive White House in history, while also establishing
            herself as a powerful advocate for women and girls in the U.S. and
            around the world, dramatically changing the ways that families
            pursue healthier and more active lives, and standing with her
            husband as he led America through some of its most harrowing
            moments. Along the way, she showed us a few dance moves, crushed
            Carpool Karaoke, and raised two down-to-earth daughters under an
            unforgiving media glare.
          </p>
          <p>
            In her memoir, a work of deep reflection and mesmerizing
            storytelling, Michelle Obama invites readers into her world,
            chronicling the experiences that have shaped her—from her childhood
            on the South Side of Chicago to her years as an executive balancing
            the demands of motherhood and work, to her time spent at the world’s
            most famous address. With unerring honesty and lively wit, she
            describes her triumphs and her disappointments, both public and
            private, telling her full story as she has lived it—in her own words
            and on her own terms.
          </p>
        </div>
      </div>
    </div>

    <div class="top-voted">
      <h2>Top voted</h2>
      <BooksList />
    </div>
  </div>
</template>

<script>
import BooksList from "./BooksList.vue";
export default {
  name: "ReedsyHome",
  components: {
    BooksList,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
$yellowLight: #faf9f4;
$yellow: #efbe0c;
$white: #fff;

h1 {
  padding: 1em 0 1em 1em;
  margin: 0;
  text-align: left;
}
.featured-book {
  background: #faf9f4;
  display: flex;
  position: relative;
  gap: 20px;
  padding: 30px;

  .recommended {
    position: absolute;
    top: 0;
    right: 0;
    background: $yellow;
    color: $white;
    border-radius: 0 0 0 5px;
    padding: 5px 10px;
    font-size: 0.9em;
  }

  img {
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(#000, 0.1);
  }

  .book-info {
    .title {
      margin: 0;
      font-size: 1.5em;
    }
    .author {
      margin-bottom: 20px;
    }
  }
}

.top-voted {
  padding: 30px;
}
</style>
