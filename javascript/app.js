//Togle Kelas Aktif
const NavigasiBar = document.querySelector('.navbar-nav');
//js saat hamburger menu di klik
document.querySelector('#hamburger-nav').onclick = () => {
    NavigasiBar.classList.toggle('active')
}
//untuk menghilangkan nav dengan klik di luarsidebar
const Hamburger = document.querySelector('#hamburger-nav');
document.addEventListener('click', function(e){
    if(!Hamburger.contains(e.target) && !NavigasiBar.contains(e.target)){
        NavigasiBar.classList.remove('active');
    }
}
)