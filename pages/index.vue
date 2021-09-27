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
