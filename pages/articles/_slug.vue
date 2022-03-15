<template>
  <section>
    <article>
      <div class="space-y-6 md:space-y-12 py-32 text-left">
        <h1 class="text-4xl text-white md:text-6xl">
          {{ article.title }}
        </h1>
        <p class="text-xl md:text-3xl text-white">
          Published on {{ formatDate(article.updatedAt) }}
        </p>
        <p class="text-xl md:text-3xl text-white">
          {{ article.description }}
        </p>
      </div>
      <nuxt-content
        :document="article"
        class="prose prose-2xl max-w-none prose-img:rounded-xl prose-a:text-indigo-500"
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
          content: `https://www.maliksvd.dev${this.article.banner}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://www.maliksvd.dev${this.article.banner}`,
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
pre[class*='language-'] {
  @apply bg-[#161616]  rounded-lg text-[#eaf5ea];
}
</style>
