<template>
  <section>
    <article>
      <div class="max-w-3xl mx-auto space-y-6 py-24 text-center">
        <h1
          class="md:leading-14 text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl"
        >
          {{ article.title }}
        </h1>
        <p class="text-xl font-medium leading-6 text-gray-400">
          Published on {{ formatDate(article.updatedAt) }}
        </p>
        <p class="text-2xl text-gray-100">
          {{ article.description }}
        </p>
      </div>
      <nuxt-content
        :document="article"
        class="prose-dark prose-2xl max-w-5xl mx-auto pt-10 pb-8"
      />
    </article>
  </section>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.article.description,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://maliksvd.dev/articles/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://maliksvd.dev/articles/${this.$route.params.slug}`,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.article.banner,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.article.banner,
        },
        {
          property: 'article:published_time',
          content: this.article.createdAt,
        },
        {
          property: 'article:modified_time',
          content: this.article.updatedAt,
        },
        {
          property: 'article:tag',
          content: this.article.tags ? this.article.tags.toString() : '',
        },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: '@maliksvd' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://maliksvd.dev/articles/${this.$route.params.slug}`,
        },
      ],
    }
  },
}
</script>

<style>
.nuxt-content li {
  @apply text-neutral-200;
}
.nuxt-content h2 {
  @apply text-3xl font-bold underline text-neutral-200;
}

.nuxt-content h2 > a {
  @apply bg-transparent mx-0 px-0 py-0;
}
.nuxt-content h1 {
  @apply text-3xl font-bold text-neutral-200;
}
.nuxt-content p {
  @apply text-neutral-200 font-normal;
}
.nuxt-content a {
  @apply bg-[#13A0FA] mx-2 px-6 py-2 rounded-2xl text-neutral-200 hover:rotate-90 duration-500 ease-in;
}
pre[class*='language-'] {
  @apply bg-black border-4 rounded-2xl border-neutral-900;
}
</style>
