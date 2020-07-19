document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav')
    const options = {
        edge: 'left',
    }
    var instances = M.Sidenav.init(elems, options)
})

let insertSoundcloud = document.getElementById('insert-soundcloud')
insertSoundcloud.innerHTML = soundcloudIframe

const splitUrl = document.location.href.split('/')
const currentLocation = splitUrl[splitUrl.length - 1]

if (currentLocation === 'index.html') {
    let insertHeader = document.getElementById('insert-header')
    insertHeader.innerHTML = header(headerOptions.LUXUS)
} else if (currentLocation === 'umsmyrsl.html') {
    let insertHeader = document.getElementById('insert-header')
    insertHeader.innerHTML = header(headerOptions.UMSMYRSL)
} else if (currentLocation === 'ferlid.html') {
    let insertHeader = document.getElementById('insert-header')
    insertHeader.innerHTML = header(headerOptions.FERLID)
} else if (currentLocation === 'upprunasaga.html') {
    let insertHeader = document.getElementById('insert-header')
    insertHeader.innerHTML = header(headerOptions.UPPRUNASAGA)
}

let insertFooter = document.getElementById('insert-footer')
insertFooter.innerHTML = footer
