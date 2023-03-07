window.addEventListener('keydown',function(e){
    const audio= this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key= this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(audio==null) return;
    key.classList.add('playing');
    audio.currentTime=0;
    audio.play();
})

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener('transitionend', function(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}))

window.addEventListener('keyup', function(e){
    const key= this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.remove('playing');
})