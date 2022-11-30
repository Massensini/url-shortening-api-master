const menuMobile = document.getElementById('menu-mobile')
const headerMobile = document.getElementById('header')

menuMobile.addEventListener('click', () => {
    headerMobile.classList.toggle('vissible')
})

function verifyUrl() {
    let url = document.getElementById('url-text')
    const errorMsg = document.getElementById('error-message')
    const submitUrl = document.getElementById('submit-url')
    let regexUrl = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(regexUrl)
    

    submitUrl.addEventListener('click', () => {
        if(url.value.match(regex)) {
            url.classList.remove('error')
            errorMsg.style.display = 'none'
            console.log('certo')
        } else {
            url.classList.add('error')
            errorMsg.style.display = 'flex'
            console.log('errado')
        }
    })
}

verifyUrl()

