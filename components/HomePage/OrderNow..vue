<template>
  <div class="orderNow-component">
  <img src="../../assets/images/footer-img.png" alt="orderNow-image">
    <div class="container">
    <div class="content">
      <h2 class="orderNow-name">
        {{ $t('home.spicyZingerWrap') }}
      </h2>
      <b-button :to="localePath(`/menu?category=60`)">{{ $t('home.orderNow') }}</b-button>
    </div>

    </div>
  </div>
</template>
