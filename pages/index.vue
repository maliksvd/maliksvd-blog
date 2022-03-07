<template>
  <section class="max-w-5xl mx-auto">
    <section class="my-44 flex flex-col space-y-12">
      <h1 class="text-6xl font-extrabold text-neutral-200">
        I'm building digital respectfully & beautifully.
      </h1>
      <p class="text-gray-400 font-normal text-xl">
        Personal blog deals with web design and web development.
      </p>
      <NuxtLink
        to="/about"
        class="focus:ring-4 focus:outline-none focus:ring-neutral-700 relative w-1/2 md:w-1/6 text-center text-black rounded-full bg-neutral-200 px-8 py-4"
        >Read about</NuxtLink
      >
    </section>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
    <NuxtLink to="/articles" class="my-12 text-neutral-600">
      Read more articles
    </NuxtLink>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
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
