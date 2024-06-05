const toggler = document.getElementById('toggler');
const sidebar = document.getElementById('navbar_res');

toggler.addEventListener('click', ()=>{
    sidebar.classList.toggle('hidden');
})