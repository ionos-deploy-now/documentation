<template>
  <div class="relative bg-dark-midnight bg-img-dots">
    <div class="container">
      <div class="flex-center flex-col space-y-8 text-white mt-8 mb-16 lg:mt-16 lg:mb-42">
        <div class="overline !text-white">
          {{ $t('home-team.overline') }}
        </div>
        <h2 class="text-center text-white text-4xl font-semibold max-w-[600px]" v-html="$t('home-team.title')"></h2>
        <g-link class="btn btn-primary" to="/about-us/">
          {{ $t('home-team.button') }}
        </g-link>
      </div>
    </div>

    <div class="<lg:hidden absolute absolute-center-x bottom-0 flex justify-center items-baseline space-x-[-120px]">
      <g-image width="auto" height="180px" src="/team/fatih.svg" />
      <g-image width="auto" height="180px" src="/team/marcel.svg" />
      <g-image width="auto" height="180px" src="/team/josua.svg" />
      <g-image width="auto" height="180px" src="/team/robert.svg" />
      <g-image width="auto" height="180px" src="/team/markus.svg" />
      <g-image width="auto" height="180px" src="/team/alex.svg" />
      <g-image width="auto" height="180px" src="/team/eric.svg" />
      <g-image width="auto" height="180px" src="/team/robin.svg" />
      <g-image width="auto" height="180px" class="pl-2 h-[185px]" src="/team/roman.svg" />
    </div>
  </div>
</template>
