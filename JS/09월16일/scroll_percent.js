const tagWrap = document.querySelector('.wrapper');
const tagBar = tagWrap.querySelector('.progress > .bar');
const tagTxt = tagWrap.querySelector('.progress > .txt');

const render = (percent) =>{
    tagTxt.textContent = percent+'%';
    tagBar.style.width = percent+'%';
}
const handlerScroll = () => {
    const scrollHeight = tagWrap.offsetHeight;
    const realHeight = scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset;
    const percent = (scrollTop/realHeight)*100;
    const txtPercent = Math.floor(percent);
    render(txtPercent);
}
const init = () => {
    window.addEventListener('scroll',handlerScroll);
}
window.addEventListener('load',init);