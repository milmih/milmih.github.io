<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()

</script>

<template>
  <div class="xl:divide-y xl:divide-gray-200 dark:xl:divide-slate-200/5">
    <div class="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {{ frontmatter.title }}
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-white">
        {{ frontmatter.subtext }}
      </p>
    </div>

    <div
      class="divide-y xl:divide-y-0 divide-gray-200 dark:divide-slate-200/5 xl:grid xl:grid-cols-4 xl:gap-x-10 pb-16 xl:pb-20"
      style="grid-template-rows: auto 1fr">
      <div class="divide-y divide-gray-200 dark:divide-slate-200/5 xl:pb-0 xl:col-span-3 xl:row-span-2">
        <Content class="prose dark:prose-invert max-w-none pt-10 pb-8" />
      </div>
    </div>
  </div>
</template>
