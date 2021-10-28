let params = window // содержит get параметры из url
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );
let lang = params.lang ? params.lang : "en"
const languageElements = document.querySelectorAll('.language')

function changeLangForDataLang(){
  document.querySelectorAll('[data-' + lang+']').forEach((item)=>{
    // console.log(item, item.getAttribute('data-' + lang))
    item.innerText = item.getAttribute('data-' + lang)
  })
}

languageElements.forEach((item)=>{
  item.addEventListener('click',(e)=>{
    if(e.target.classList.contains('select-ru') || e.target.classList.contains('select-en'))
      lang = e.target.innerText.toLowerCase()
      // localStorage.setItem('lang', e.target.innerText.toLowerCase())
      changeLangForDataLang()
  })
})

changeLangForDataLang()
if(lang === "ru")
  document.querySelector(".select-ru").click()