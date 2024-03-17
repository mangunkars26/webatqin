//navbar interactiv
// Gunakan jQuery untuk menangani peristiwa klik pada tombol menu burger
$(document).ready(function () {
  var $burgerMenu = $('#burger-menu');
  var $mobileMenu = $('#mobile-menu');
  var isOpen = false;

  $burgerMenu.click(function (event) {
    isOpen = !isOpen;
    $mobileMenu.toggleClass('hidden', !isOpen); // Toggling class 'hidden'
    $burgerMenu.attr('aria-expanded', isOpen); // Update attribute 'aria-expanded'
    event.preventDefault(); // Mencegah perilaku default dari tautan
  });

  // Menutup menu saat pengguna mengklik di luar area menu
  $(document).click(function (event) {
    if (!$(event.target).closest('#mobile-menu, #burger-menu').length && isOpen) {
      $mobileMenu.addClass('hidden');
      $burgerMenu.attr('aria-expanded', false); // Update attribute 'aria-expanded'
      isOpen = false;
    }
  });

  // Efek hover yang dinamis untuk tautan menu pada tampilan seluler
  $mobileMenu.find('a').hover(
    function () {
      $(this).addClass('text-white hover:bg-gray-700'); // Efek hover masuk
    },
    function () {
      $(this).removeClass('text-white hover:bg-gray-700'); // Efek hover keluar
    }
  );
});
// Interaktif stats
$(document).ready(function () {
  var scrolled = false;
  $(window).scroll(function () {
    if (!scrolled && $('#scroll-section').is(':visible') && isScrolledIntoView('#scroll-section')) {
      animateNumber("#transactions", 1000); // Change to desired value
      animateNumber("#assets", 200); // Change to desired value
      animateNumber("#users", 5000); // Change to desired value
      scrolled = true;
    }
  });

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  function animateNumber(element, targetNumber) {
    $({ counter: parseInt($(element).text().replace(/,/g, '')) }).animate({
      counter: targetNumber
    }, {
      duration: 1000,
      easing: 'swing',
      step: function () {
        $(element).text(Math.ceil(this.counter).toLocaleString());
      }
    });
  }
});




// Fungsi untuk mengecek apakah elemen berada dalam viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}



//FORMULIR
document.getElementById('whatsappForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const nama = formData.get('nama');
  const no_whatsapp = formData.get('no_whatsapp');
  const asal_kota = formData.get('asal_kota');
  const isi_pesan = formData.get('isi_pesan');

  const message = `Assalamualaikum, saya ${nama} dari ${asal_kota}. ${isi_pesan}. ? Syukron.`;
  const whatsappLink = `https://wa.me/6289612679796?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappLink;
});

//back On Top
// Ketika dokumen telah dimuat sepenuhnya
$(document).ready(function () {
  // Saat pengguna menggulir jauh dari atas
  $(window).scroll(function () {
      // Jika posisi scroll adalah di atas 300px, tampilkan tombol kembali ke atas, jika tidak sembunyikan
      if ($(this).scrollTop() > 300) {
          $('#back-to-top').fadeIn();
      } else {
          $('#back-to-top').fadeOut();
      }
  });
});

// Fungsi untuk kembali ke atas
function backToTop() {
  // Gulir halaman kembali ke atas
  $('html, body').animate({
      scrollTop: 0
  }, 800);
}

//Testimonial

