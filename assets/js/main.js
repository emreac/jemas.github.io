/**
* Template Name: FlexStart - v1.11.1
* Template URL: https://bootstrapmade.com/flexstart-bootstrap-startup-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

$(document).ready(function() {

  var arrLang={
      
      'tr':{

          '0':'',
          '1':'Hakkımızda',
          '2':'Değerlerimiz',
          '3':'Çalışmalar',
          '4':'Hizmetler',
          '5':'Sondaj Makinaları',
          '6':'Müşteriler',
          '7':'İlestişim',
          '8':'Broşür İndir',
          '9':'Madencilik sektörü için modern çözümler sunuyoruz',
          '10':'Fark yaratan çalışkan bir ekibiz',
          '11':'Broşür İndir',
          '12':'BİZ KİMİZ',
          '13':'JEMAS Mühendislik; 1984 yılında jeoloji-jeoteknik mühendisliği alanında hizmet vermek üzere Ankara da kurulmuştur.',
          '14':'Bu tarihten itibaren karayolu, demiryolu ve diğer raylı sistemler, barajlar, göletler, hidroelektrik santraller, sulama alanları, havaalanları, köprüler, tüneller, mühendislik gibi birçok işin proje ve uygulama aşamalarında jeoloji-jeoteknik etütlerde faaliyet göstermektedir. yapılar, toplu konut alanları, yapı projeleri.',
          '15':'Daha Fazla',
          '16':'DEĞERLERİMİZ',
          '17':'Çevre ve Güvenlik Vizyonumuz',
          '18':'Sağlık ve Güvenlik',
          '19':'Doğru ve verimli çalışmanın ancak güvenli ve sağlıklı bir çalışma ortamında sağlanabileceğine inanırız.',
          '20':'Çevre',
          '21':'Çevre koruma konusunda sektörümüze özgü bilimsel ve teknolojik gelişmeleri takip ederek çevre kirliliğini ve çevre tahribatını önlemek',
          '22':'Çalışan Bağlılığı',
          '23':'Jemas Mühendislik olarak aile fertlerimizin her zaman güvenli ve mutlu bir ortamda olmasını sağlarız',
          '24':'Mutlu Müşteriler',
          '25':'Projeler',
          '26':'Makinalar',
          '27':'Ekibimiz',
          '28':'Çalışmalar',
          '29':'HİZMETLERİMİZ',
          '30':'Çalışma Alanlarımız',
          '31':'Maden Sondajı',
          '32':'2008 yılında faaliyet alanlarını genişleten JEMAS; Mevcut jeolojik-jeotekniklere ek olarak, ölçüm cihazları oluşturduk. 2008 den beri; JEMAS, kamu ve özel sektör işletmelerinin, tüm çalışmalarını başarıyla yürütmek için; güvenilirdir, araştırma-geliştirme ve geliştirme, ihtiyaca uzman ilişkisi ile hizmet vermektedir. olarak bu yolda gururla ilerlemektedir. Her yıl genişleyen makine parkı ile büyümektedir.',
          '34':'Daha Fazla',
          '35':'Jeoteknik Etüt',
          '36':'Uzmanlık olarak jeoteknik etütler kapsamında Türkiye de kurulan ilk firmalardan biridir. Bu tarihten itibaren karayolu, demiryolu ve diğer raylı sistemler, barajlar, göletler, hidroelektrik santraller, sulama alanları, havaalanları, köprüler, tüneller, mühendislik gibi birçok işin proje ve uygulama aşamalarında jeoloji-jeoteknik etütlerde faaliyet göstermektedir. yapılar, toplu konut alanları, yapı projeleri',
          '37':'Daha Fazla',
          '38':'MAKİNALAR',
          '39':'Sondaj Makinaları',
          '40':'6 Sondaj Makinası',
          '41':'KAPASİTE',
          '42':'2 Sondaj Makinası',
          '43':'KAPASİTE',
          '44':'8 Sondaj Makinası',
          '45':'KAPASİTE',
          '46':'4 Sondaj Makinası',
          '47':'KAPASİTE',
          '48':'MÜŞTERİLER',
          '49':'MADEN',
          '50':'MÜŞTERİLER',
          '51':'İnşaat',
          '52':'İLETİŞİM',
          '53':'BİZE ULAŞIN',
          '54':'Adres',
          '55':'Bizi Arayın',
          '56':'Email',
          '57':'Çalışma Saatleri',
          '58':'9:00 - 17:00',
          '59':'Yükleniyor',
          '60':'Mesajınız Başarıyla Gönderildi.',
          '61':'Gönder',
     


      },


      'en':{
          '0':'Home',
          '1':'About',
          '2':'OurValues',
          '3':'Works',
          '4':'Services',
          '5':'Drill Rigs',
          '6':'Clients',
          '7':'Contact',
          '8':'Get Documents',
          '9':'We offer modern solutions for mining industry',
          '10':'We are team of hard-working engineers make difference ',
          '11':'Get Documents',
          '12':'Who We Are',
          '13':'JEMAS Engineering; It was established in Ankara in 1984 to serve in the field of geology-geotechnical engineering.',
          '14':'Since this date, it has been active in geology-geotechnical studies in the project and application stages of many works such as highway, railway and other rail systems, dams, ponds, hydroelectric power plants, irrigation areas, airports, bridges, tunnels, engineering structures, mass housing areas, building projects.',
          '15':'Read More',
          '16':'Our Values',
          '17':'Our Enviromental and Safety Vision',
          '18':'Health and Safety',
          '19':'We believe that correct and productive work can only be attained in a safe and healthy working environment',
          '20':'Enviroment',
          '21':'Preventing environmental pollution and destruction of the environment by following industry-specific scientific and technological developments of our sector about environmental protection',
          '22':'Employee Engagement',
          '23':'As Jemas Engineering, we always make sure about our family members in safe and happy enviroment',
          '24':'Happy Clients',
          '25':'Projects',
          '26':'Machines',
          '27':'Hard Workers',
          '28':'Works',
          '30':'Services',
          '30':'Fields of Activity',
          '31':'Mine Drilling',
          '32':'Expanding its fields of activity in 2008, JEMAS; In addition to existing geological-geotechnicals, measuring devices have formed. since 2008; JEMAS, public and private sector business, to carry out all works successfully; It is reliable, research-development and developed, serving the need with expert relationship. It is proudly progressing on this road as it grows with its machinery park that expands every year',
          '34':'Read More',
          '35':'Geotechnical Services',
          '36':'It is one of the first companies established in Turkey within the scope of geotechnical studies, which is felt to be lacking. Since this date, it has been active in geology-geotechnical studies in the project and application stages of many works such as highway, railway and other rail systems, dams, ponds, hydroelectric power plants, irrigation areas, airports, bridges, tunnels, engineering structures, mass housing areas, building projects',
          '37':'Read More',
          '38':'Machines',
          '39':'Our Drill Rigs',
          '40':'6 Drill Rigs',
          '41':'CAPACITY',
          '42':'2 Drill Rigs',
          '43':'CAPACITY', 
          '44':'8 Drill Rigs',
          '45':'CAPACITY',
          '46':'4 Drill Rigs',
          '47':'CAPACITY',
          '48':'OUR CLIENTS',
          '49':'MINING',
          '50':'OUR CLIENTS',
          '51':'Constructions',
          '52':'Contact',
          '53':'Contact Us',
          '54':'Address',
          '55':'Call Us',
          '56':'Email',
          '57':'Open Hours',
          '58':'9:00AM - 05:00PM',
          '59':'Loading',
          '60':'Your message has been sent. Thank you!',
          '61':'Send Message',
      
      },
      
      
  };


  
$('.dropdown-item').click(function() {
  localStorage.setItem('dil', JSON.stringify($(this).attr('id'))); 
  location.reload();
});

  var lang =JSON.parse(localStorage.getItem('dil'));

  if(lang=="en"){
      $("#drop_yazı").html("English");
  }
  else{
      $("#drop_yazı").html("Türkçe");

  }

  $('a,h5,p,h1,h2,span,li,button,h3,label').each(function(index,element) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  
});

});

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    if (all) {
      select(el, all).forEach(e => e.addEventListener(type, listener))
    } else {
      select(el, all).addEventListener(type, listener)
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 10
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        aos_init();
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfokio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Animation on scroll
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})();