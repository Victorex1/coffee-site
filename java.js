const search  = document.querySelector('.search');
const searchBox  = document.querySelector('.search-box');
const menueBar = document.querySelector('.menue-bar');
const list  = document.querySelector('header ul');
const lists  = document.querySelectorAll('header ul li');

search.addEventListener('click', () => {

   if(list.classList.contains('active')){

    searchBox.classList.toggle('active')
    list.classList.remove('active')

   }else{
    searchBox.classList.toggle('active')

   }
})

menueBar.addEventListener('click',() => {
    if(searchBox.classList.contains('active')){
        searchBox.classList.remove('active')
        list.classList.toggle('active'); 

    }else{
        list.classList.toggle('active'); 

    }
})

lists.forEach(liste => {
    liste.addEventListener('click', () => {
        list.classList.remove('active'); 

    })
})