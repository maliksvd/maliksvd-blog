<template>
  <main class="animate-in fade-in duration-3000">
    <Header />
    <div class="px-12 md:px-0 max-w-xl mx-auto">
      <Nuxt />
      <Footer />
    </div>
  </main>
</template>
<script>
export default {
  transition: {
    name: 'page',
    mode: 'out-in',
  },
}
</script>
