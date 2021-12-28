<template>
<div id="main" class="m-auto max-w-2xl text-center mt-20">
  <h1 class="text-4xl font-bold text">openBD viewr</h1>

  <div class="shadow flex mt-16">
      <input class="w-full rounded p-4" type="text" placeholder="ISBN..." v-model="isbn">
      <button class="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400" @click="onClick">
          <i class="material-icons">search</i>
      </button>
  </div>

  <div class="result mt-8">
    <p class="text-3xl">タイトル</p>
    <div class="title mt-3">{{ title }}</div>
    <p class="text-3xl mt-5">書影</p>
    <p class="mt-3">
      <span v-if="cover === ''" class="">書影なし</span>
      <img v-else :src="cover" class="m-auto">
    </p>
    <p class="text-3xl mt-5">概要</p>
    <div class="mt-3">{{ description }}</div>
  </div>

</div>
</template>

<script>
export default {

  data() {
    return {
      isbn: '',
      title: '',
      cover: '',
      description: ''
    }
  },
  methods: {
    onClick: async function() {

      const data = await fetch('https://api.openbd.jp/v1/get?isbn=' + this.isbn)
        .then(function (response) {
          return response.json()
        })
        .catch(function (error) {
          console.log(error);
        });
      const book = data[0]
      if (book == null) {
        return
      }
      this.title = book.summary.title
      this.cover = book.summary.cover

      const content = book.onix.CollateralDetail.TextContent.find(a => a.TextType == "03")
      if (content === undefined) {
        return
      }

      this.description = content.Text.trim()
    }
  }
}
</script>
