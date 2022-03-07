<template>
  <section class="max-w-5xl mx-auto">
    <div class="my-12 md:space-y-5">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl"
      >
        Articles
      </h1>
      <p class="text-lg leading-7 text-gray-400">
        My lastest articles written publicly.
      </p>
    </div>
    <div class="w-full flex flex-col space-y-8">
      <NuxtLink
        :to="`/articles/${article.slug}`"
        v-for="article of articles"
        :key="article.slug"
        class="duration-300 rounded-2xl px-0 py-6 focus:outline-none"
      >
        <div class="flex flex-col space-y-6">
          <h4 class="text-2xl font-bold leading-8 tracking-tight text-gray-100">
            {{ article.title }}
          </h4>
          <p class="text-gray-100 font-light mt-4">{{ article.description }}</p>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
<script>
export default {
  layout: "default",
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .sortBy("createdAt", "desc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>
