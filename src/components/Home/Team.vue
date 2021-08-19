<template>
  <div class="relative bg-dark-midnight bg-img-dots">
    <div class="container">
      <div class="flex-center flex-col space-y-8 text-white mt-8 mb-16 lg:mt-16 lg:mb-42">
        <div class="text-sm uppercase">
          {{ $t('home-team.overline') }}
        </div>
        <div class="text-4xl text-center font-bold max-w-[600px]" v-html="$t('home-team.title')"></div>
        <g-link class="btn btn-primary" to="/about-us/">
          {{ $t('home-team.button') }}
        </g-link>
      </div>
    </div>

    <div class="<lg:hidden absolute absolute-center-x bottom-0 flex justify-center items-baseline space-x-[-120px]">
      <g-image src="/team/fatih.svg" />
      <g-image src="/team/marcel.svg" />
      <g-image src="/team/josua.svg" />
      <g-image src="/team/robert.svg" />
      <g-image src="/team/markus.svg" />
      <g-image src="/team/alex.svg" />
      <g-image src="/team/eric.svg" />
      <g-image src="/team/robin.svg" />
    </div>
  </div>
</template>
