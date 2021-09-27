<template>
<div id="main">
  <h1>openBD viewr</h1>
  <div>openBDのAPIをコールして書影を表示します</div>
  <div class="form"> 
    <input type="text" class="border border-black w-80" v-model="isbn">
    <button class="search" @click="onClick">検索</button>
  </div>
  <div class="result">
    <p>画像をダウンロードするには、「画像を右クリック」「名前を付けて保存」で保存してください</p>
    <p>タイトル</p>
    <div class="title">{{ title }}</div>
    <p>画像</p>
    <span v-if="cover === ''">画像なし</span>
    <img v-else :src="cover">
  </div>
</div>
</template>

<script>
export default {

  data() {
    return {
      isbn: '',
      title: '',
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
