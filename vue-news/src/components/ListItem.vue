<template>
  <div>
    <ul class="all-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="all-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
                v-if="item.user"
                v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
  //   if (name === 'news') {
  //     this.$store.dispatch('FETCH_NEWS')
  //   } else if (name === 'ask') {
  //     this.$store.dispatch('FETCH_ASKS')
  //   } else if (name === 'jobs') {
  //     this.$store.dispatch('FETCH_JOBS')
  //   }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    listItems() {
      return this.$store.state.list
    }
  }
}
</script>

<style scoped>

.all-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b833;
}

.all-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>