/* DFD New Energy — shared site behaviour */
(function(){
  if(window.lucide) lucide.createIcons();

  // sticky nav
  var nav=document.querySelector('.nav');
  if(nav){
    var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>28);};
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  }

  // mobile menu
  var toggle=document.querySelector('.nav-toggle');
  var links=document.querySelector('.nav-links');
  if(toggle&&links){
    toggle.addEventListener('click',function(){
      var open=links.classList.toggle('open');
      toggle.innerHTML=open?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';
      if(window.lucide) lucide.createIcons();
    });
  }

  // reveal on scroll (staggered by data-d)
  var revs=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:0.14,rootMargin:'0px 0px -50px 0px'});
    revs.forEach(function(el){io.observe(el);});
  }else{revs.forEach(function(el){el.classList.add('in');});}

  // count-up for [data-count]
  function animateCount(el){
    var target=parseFloat(el.getAttribute('data-count'));
    var dec=(el.getAttribute('data-dec')||'0')|0;
    var suffix=el.getAttribute('data-suffix')||'';
    var prefix=el.getAttribute('data-prefix')||'';
    var dur=1400,start=null;
    function step(ts){
      if(!start)start=ts;
      var p=Math.min((ts-start)/dur,1);
      var eased=1-Math.pow(1-p,3);
      var val=target*eased;
      el.textContent=prefix+val.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suffix;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counts=document.querySelectorAll('[data-count]');
  if(counts.length&&'IntersectionObserver' in window){
    var cio=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){animateCount(e.target);cio.unobserve(e.target);}});
    },{threshold:0.6});
    counts.forEach(function(el){cio.observe(el);});
  }

  // demo RFQ submit
  var form=document.querySelector('form[data-rfq]');
  if(form){
    form.addEventListener('submit',function(ev){
      ev.preventDefault();
      var btn=form.querySelector('[type=submit]');
      if(btn){btn.textContent='Request received — we reply within 4 hours';btn.disabled=true;btn.style.opacity=.8;}
    });
  }
})();
