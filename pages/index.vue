<template>
  <section>
    <section class="my-44 flex flex-col space-y-6">
      <h1 class="text-6xl font-medium text-white">Building digital respectfully & beautifully.</h1>
      <p class="text-[#999999] font-normal text-3xl">
        A personal part of Internet deals with web design and web development.
      </p>
    </section>
    <section>
      <NuxtLink to="/articles" class="text-white font-medium text-3xl">Articles </NuxtLink>
      <div class="w-full my-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <NuxtLink
          :to="`/articles/${article.slug}`"
          v-for="article of articles"
          :key="article.slug"
          class="bg-[#161616] px-8 py-6 duration-300 rounded-lg focus:outline-none"
        >
          <div class="flex flex-col space-y-6">
            <h4 class="text-3xl font-medium text-white">
              {{ article.title }}
            </h4>
            <p class="text-white font-light mt-4">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>
    <section class="my-16">
      <NuxtLink to="/articles" class="text-white font-medium text-3xl">Connect </NuxtLink>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 my-8">
        <a
          class="text-white bg-[#161616] rounded-lg px-6 py-4 flex items-center justify-center space-x-2"
        >
          <svg
            width="24"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 9L12 12.5L17 9"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>

          <span>Email</span></a
        >
        <a
          href="https://github.com/maliksvd"
          class="text-white bg-[#161616] rounded-lg px-6 py-4 flex items-center justify-center space-x-2"
          ><svg
            width="24"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            /></svg
          ><span>GitHub</span></a
        >
        <a
          href="https://twitter.com/maliksvd"
          class="text-white bg-[#161616] rounded-lg px-6 py-4 flex items-center justify-center space-x-2"
          ><svg
            width="24"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Twitter</span></a
        >
        <a
          href="https://www.figma.com/@maliksvd"
          class="text-white bg-[#161616] rounded-lg px-6 py-4 flex items-center justify-center space-x-2"
          ><svg
            width="24"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6C6 5.20435 6.31607 4.44129 6.87868 3.87868C7.44129 3.31607 8.20435 3 9 3H12V9H9C8.20435 9 7.44129 8.68393 6.87868 8.12132C6.31607 7.55871 6 6.79565 6 6Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 3H15C15.394 3 15.7841 3.0776 16.1481 3.22836C16.512 3.37913 16.8427 3.6001 17.1213 3.87868C17.3999 4.15726 17.6209 4.48797 17.7716 4.85195C17.9224 5.21593 18 5.60603 18 6C18 6.39397 17.9224 6.78407 17.7716 7.14805C17.6209 7.51203 17.3999 7.84274 17.1213 8.12132C16.8427 8.3999 16.512 8.62087 16.1481 8.77164C15.7841 8.9224 15.394 9 15 9H12V3Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 12C12 11.606 12.0776 11.2159 12.2284 10.8519C12.3791 10.488 12.6001 10.1573 12.8787 9.87868C13.1573 9.6001 13.488 9.37913 13.8519 9.22836C14.2159 9.0776 14.606 9 15 9C15.394 9 15.7841 9.0776 16.1481 9.22836C16.512 9.37913 16.8427 9.6001 17.1213 9.87868C17.3999 10.1573 17.6209 10.488 17.7716 10.8519C17.9224 11.2159 18 11.606 18 12C18 12.394 17.9224 12.7841 17.7716 13.1481C17.6209 13.512 17.3999 13.8427 17.1213 14.1213C16.8427 14.3999 16.512 14.6209 16.1481 14.7716C15.7841 14.9224 15.394 15 15 15C14.606 15 14.2159 14.9224 13.8519 14.7716C13.488 14.6209 13.1573 14.3999 12.8787 14.1213C12.6001 13.8427 12.3791 13.512 12.2284 13.1481C12.0776 12.7841 12 12.394 12 12V12Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 18C6 17.2044 6.31607 16.4413 6.87868 15.8787C7.44129 15.3161 8.20435 15 9 15H12V18C12 18.7956 11.6839 19.5587 11.1213 20.1213C10.5587 20.6839 9.79565 21 9 21C8.20435 21 7.44129 20.6839 6.87868 20.1213C6.31607 19.5587 6 18.7956 6 18Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 12C6 11.2044 6.31607 10.4413 6.87868 9.87868C7.44129 9.31607 8.20435 9 9 9H12V15H9C8.20435 15 7.44129 14.6839 6.87868 14.1213C6.31607 13.5587 6 12.7956 6 12Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Figma</span></a
        >
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  async asyncData({ $content, params }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch()
    return {
      articles,
    }
  },
}
</script>
