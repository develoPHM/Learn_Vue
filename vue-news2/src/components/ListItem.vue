<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <div class=points>
          {{ item.points || 0 }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
    const name = this.$route.name
    if (name === 'news') {
      this.$store.dispatch('FETCH_NEWS')
    } else if (name === 'asks') {
      this.$store.dispatch('FETCH_ASKS')
    } else if (name === 'jobs') {
      this.$store.dispatch('FETCH_JOBS')
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    listItems() {
      const name = this.$route.name
      if (name === 'news') {
        return this.$store.state.news
      } else if (name === 'asks') {
        return this.$store.state.asks
      } else if (name === 'jobs') {
        return this.$store.state.jobs
      }
    }
  }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>