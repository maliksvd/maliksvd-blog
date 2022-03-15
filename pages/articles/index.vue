<template>
  <section>
    <div class="my-12 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-[#eaf5ea] sm:text-4xl sm:leading-10 md:text-6xl"
      >
        Articles
      </h1>
      <p class="text-lg leading-7 text-[#eaf5ea]">
        My lastest articles written publicly.
      </p>
    </div>
    <div class="w-full grid grid-cols-1 gap-12 md:grid-cols-2">
      <NuxtLink
        :to="`/articles/${article.slug}`"
        v-for="article of articles"
        :key="article.slug"
        class="duration-300 rounded-xl px-0 py-6 focus:outline-none"
      >
        <div class="flex flex-col space-y-6">
          <h4
            class="text-2xl font-bold leading-8 tracking-tight text-[#D2D2D2]"
          >
            {{ article.title }}
          </h4>
          <p class="text-[#D2D2D2] font-light mt-4">
            {{ article.description }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  layout: 'default',
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles,
    }
  },
}
</script>
