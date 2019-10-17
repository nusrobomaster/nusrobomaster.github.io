---
#sidebar: false
home: true
heroImage: /rm-logo.png
heroText: NUS RoboMaster Team 2020
tagline: Onboarding The 7-vs-7 Robot Battle
actionText: Register as Team
actionLink: /nav-teams/#team-registration
features:
- title: Our Teams
  details: A great place to get to know our teams and what we are up to now! We will update our design methodologies and build progress here. Join us :)
- title: Our RoboMaster Room
  details: Conveniently located in NUS Engineering, there is a dedicated workshop to develop and test the robots. Contribute your ideas to make our room better and cosier!
- title: Our Documentation
  details: We promise to share our design files, and strive to write good documentation, for the benefits of new team mates and wider robotics community.
footer: MIT Licensed | Copyright © 2019 NUS Engineering
---

<h1 id="main-title">NUS RoboMaster Team 2020</h1>

 

<!-- swiper -->
<template>
    <swiper style="height: 200px;" :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'progressbar'
          },
          navigation: {
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>