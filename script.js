/* GASTRONOMÍA v2 — menú móvil y pestañas de menú (filtran por data-cat) */
document.addEventListener('DOMContentLoaded',function(){
  var b=document.getElementById('burger'),n=document.getElementById('nav');
  b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded','false')})});

  var tabs=document.querySelectorAll('.tab'),items=document.querySelectorAll('.item');
  tabs.forEach(function(t){t.addEventListener('click',function(){
    tabs.forEach(function(x){x.setAttribute('aria-selected',x===t)});
    var c=t.getAttribute('data-cat');
    items.forEach(function(i){i.hidden=!(c==='todo'||i.getAttribute('data-cat')===c)})})});
});
