<template>
  <div class="p-8 md:px-20">
    <div class="grid md:grid-cols-3 gap-x-16 py-8 border-ui-border border-t-2 border-b-2">
      <div>
        <div class="text-xl md:text-2xl text-ui-primary">
          {{ $t('home-features.edit.title') }}
        </div>
        <p class="text-sm md:text-base mt-4">
          {{ $t('home-features.edit.text') }}
        </p>
      </div>
      <div>
        <div class="text-xl md:text-2xl text-ui-primary">
          {{ $t('home-features.push.title') }}
        </div>
        <p class="text-sm md:text-base mt-4">
          {{ $t('home-features.push.text') }}
        </p>
      </div>
      <div>
        <div class="text-xl md:text-2xl text-ui-primary">
          {{ $t('home-features.publish.title') }}
        </div>
        <p class="text-sm md:text-base mt-4">
          {{ $t('home-features.publish.text') }}
        </p>
      </div>
    </div>
  </div>
</template>
