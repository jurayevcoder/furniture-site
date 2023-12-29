<script setup></script>

<template>
  <div>
    <section class="bg-[#2A2A2A]">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1
            class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-400"
          >
            404
          </h1>
          <p
            class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white"
          >
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the home page.
          </p>
          <router-link
            to="/"
            class="inline-flex text-white bg-[#FF8C00] hover:bg-[#2A2A2A] hover:text-[#FF8C00] border-2 border-[#FF8C00] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-[#FF8C00] my-4"
            >Back to Homepage</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>