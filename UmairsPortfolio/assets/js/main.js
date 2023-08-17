// menuShow
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

//showMenu
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//menuHidden
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// removeMenuMobile
const navLink = document.querySelectorAll('.nav-link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each Nav-link, we remove the show menu.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// EMAIL JS
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactProject = document.getElementById('contact-project'),
      contactMessage = document.getElementById('contact-message')
    
const sendEmail = (e) => {
    e.preventDefault()

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '')
    {
        //add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'Please Write all the Input Fields. '
    }else{
        emailjs.sendForm('service_9vrhfm8', 'template_cpjo3d2', '#contact-form', 'UuvGxi47GXnrdnf2t')
        .then(() => {
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent.'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        }, (error) => {alert('OPPS! Something wrong here.', error)
        })
        //clear inputfields
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
}
contactForm.addEventListener('submit', sendEmail)

// scroll Section 2:11:14
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav-menu a[href*=' +sectionId+ ']')

                if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                }else{
                    sectionsClass.classList.remove('active-link')
                }
    })
}
window.addEventListener('scroll', scrollActive)

//dark theme - start
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'ri-moon-foggy-line':'ri-sun-line'
//dark theme - half
if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-foggy-line'?'add': 'remove'](iconTheme)
}
    themeButton.addEventListener('click', function(){
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
// Change background header 
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('bg-header')
            :header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)