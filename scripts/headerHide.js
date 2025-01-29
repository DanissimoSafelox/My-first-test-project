let lastPos = 0

const hideOffset = 400
const header = document.querySelector('.header')

const scrollPos = () => document.documentElement.scrollTop
const containHide = () => header.classList.contains('hide')

window.addEventListener('scroll' , () => {

    if(scrollPos() > lastPos && !containHide() && scrollPos() > hideOffset) {
        header.classList.add('hide')
    }
    else if(scrollPos() < lastPos && containHide()) {
        header.classList.remove('hide')
    }

    lastPos = scrollPos()
})