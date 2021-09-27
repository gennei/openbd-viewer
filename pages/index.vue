<template>
<div id="main">
  <h1>openBD viewr</h1>
  <div>openBDのAPIをコールして書影を表示します</div>
  <div class="form"> 
    <input type="text" class="border border-black w-80" v-model="isbn">
    <button class="search" @click="onClick">検索</button>
  </div>
  <div class="result">
    <div class="title">{{ title }}</div>
    <img :src="cover">
  </div>
</div>
</template>

<script>
export default {

  data() {
    return {
      isbn: '',
      title: 'title...',
      cover: ''
    }
  },
  methods: {
    onClick: async function() {
      console.log('click')

      const data = await fetch('https://api.openbd.jp/v1/get?isbn=' + this.isbn)
        .then(function (response) {
          return response.json()
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log(data[0].summary)
      console.log(data[0].summary.title)
      this.title = data[0].summary.title
      this.cover = data[0].summary.cover
    }
  }
}
</script>
