<template>
  <div class="my-12 flex justify-between items-center w-full">
    <NuxtLink to="/" class="focus:outline-none"
      ><img
        src="/avatar.jpeg"
        alt=""
        class="animate-pulse duration-75 ease-out rounded-full w-16 h-16"
    /></NuxtLink>
    <div class="flex itens-center space-x-8">
      <NuxtLink to="/articles" class="text-neutral-200">Articles</NuxtLink>
      <NuxtLink to="/about" class="text-neutral-200">About</NuxtLink>
    </div>
  </div>
</template>
