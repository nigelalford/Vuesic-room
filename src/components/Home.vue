<template>
  <div id="Home">
    <h1>Dev Music </h1>
    

    <md-field>
      <label>Youtube Video Url</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <youtube
      :video-id="videoId"
      v-if="initial.length > 0"
      ref="youtube"
    />

  </div>
</template>

<script>
import "vue-material/dist/vue-material.min.css";

export default {
  name: "Home",
  data: () => ({
    initial: "",
    videoId: "mF2lUnKRo0g",
    playNewVideo: false
  }),
  watch: {
    initial: {
      handler(val) {
        if (val) {
          this.videoId = this.$youtube.getIdFromUrl(val);
          this.playNewVideo = true;
        }
      }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  },
  updated() {
    if (this.player && this.playNewVideo) {
      this.player.playVideo();
      this.playNewVideo = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto);

h1 {
  text-align: center;
}

#Home {
  margin: 2em;
}
</style>
