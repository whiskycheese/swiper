const swiper01 = new Swiper(".swiper-01", {
});

const swiper02 = new Swiper(".swiper-02", {
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper03 = new Swiper(".swiper-03", {
  // 方向を垂直方向に変更
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper04 = new Swiper(".swiper-04", {
  // １画面あたりのスライドの量
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper05 = new Swiper(".swiper-05", {
  slidesPerView: 1,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3
    }
  },
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper06 = new Swiper(".swiper-06", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar" /* ページネーションの種類をプログレスバーに変更 */
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper07 = new Swiper(".swiper-07", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction" /* ページネーションの種類を分数に変更 */
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper08 = new Swiper(".swiper-08", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper09 = new Swiper(".swiper-09", {
  // ページネーションに特定のクラス名を付与した
  pagination: {
    el: ".swiper-pagination-09",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper10 = new Swiper(".swiper-10", {
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper11 = new Swiper(".swiper-11", {
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


// 必ず下のやつから読み込むこと
const swiperGalleryBottom = new Swiper(".swiper-gallery-bottom", {
  spaceBetween: 10,
  slidesPerView: 4
});
// 順番を変えると動かないよ
const swiperGallery = new Swiper(".swiper-gallery", {
  thumbs: {
    swiper: swiperGalleryBottom
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const swiper12 = new Swiper(".swiper-12", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
