<template>
  <div class="relative bg-img-dots">
    <div class="container">
      <div class="flex-center flex-col space-y-8 mt-8 mb-16 lg:mt-16 lg:mb-42">
        <div class="overline">
          {{ $t('home-team.overline') }}
        </div>
        <h2 class="text-center text-4xl font-semibold max-w-[600px]" v-html="$t('home-team.title')"></h2>
        <g-link class="btn btn-primary" to="/about-us/">
          {{ $t('home-team.button') }}
        </g-link>
      </div>
    </div>

    <div class="<lg:hidden absolute absolute-center-x bottom-0 flex justify-center items-baseline space-x-[-120px]">
      <img width="auto" height="180" src="/team/fatih.svg" alt="Fatih" />
      <img width="auto" height="180" src="/team/marcel.svg" alt="Marcel" />
      <img width="auto" height="180" src="/team/josua.svg" alt="Josua" />
      <img width="auto" height="180" src="/team/robert.svg" alt="Robert" />
      <img width="auto" height="180" src="/team/markus.svg" alt="Markus" />
      <img width="auto" height="180" src="/team/alexander.svg" alt="Alexander" />
      <img width="auto" height="180" src="/team/eric.svg" alt="Eric" />
      <img width="auto" height="180" src="/team/robin.svg" alt="Robin" />
      <img width="auto" height="180" src="/team/roman.svg" alt="Roman" class="pl-2 h-[185px]" />
    </div>
  </div>
</template>
