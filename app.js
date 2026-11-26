
document.querySelectorAll('[data-audio]').forEach(function(b){
  var a=new Audio(b.getAttribute('data-audio'));a.preload='auto';
  b.addEventListener('click',function(){
    document.querySelectorAll('audio,[data-audio]').forEach(function(x){x.classList&&x.classList.remove('playing')});
    try{a.currentTime=0}catch(e){}
    b.classList.add('playing');
    var p=a.play();if(p&&p.catch)p.catch(function(){b.classList.remove('playing')});
  });
  a.addEventListener('ended',function(){b.classList.remove('playing')});
});