
export default vueAwesomeSwiper;
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import move from 'move-js'

var vCarousel = document.getElementById('v-carousel');  
var caruselContent = vCarousel.querySelectorAll('.intro-section__content-carousel');
var contentItem = vCarousel.querySelector('.intro-section__content-item');

function vueAwesomeSwiper(){

  var v_carousel = new Vue({
    el: '#v-carousel',
    props: {
      screens: {
        type: Array,
        required: false
      }
    },
    methods:{
      btnPrev: function(){
       move('.intro-section__content-item').translate(0, 10).set('opacity', 0)
       .end(function(){
         move('.intro-section__content-item').translate(0, 0).duration('1s').set('opacity', 1).end();
       });
     },
     btnNext: function(){
       move('.intro-section__content-item').translate(0, -10).set('opacity', 0)
       .end(function(){
         move('.intro-section__content-item').translate(0, 0).duration('1s').set('opacity', 1).end();
       });
     }         
   },   
    data: function () {
      return {
        content: '',
        swiperOption: {
          direction: 'vertical',
          effect: 'fade',
          speed: 2000,
          scrollbar: {
            el: '.swiper-scrollbar',
            clickable: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return '<span class="item-slider">' + current + '</span>' + ' / ' + '<span class="total-sliders">' + total + '</span>';
            }
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }

      }

    },
    components: {
      swiper,
      swiperSlide,

    },
  });


  v_carousel._data.content = caruselContent[0].innerHTML
  v_carousel.$refs.swiper.swiper.on('slideChange', function () {
    v_carousel._data.content = caruselContent[v_carousel.$refs.swiper.swiper.activeIndex].innerHTML;
  }); 

}