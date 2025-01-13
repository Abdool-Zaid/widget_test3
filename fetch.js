window.addEventListener('load',()=>{
    // alert('page loaded')
    console.clear()
    fetch('https://raw.githubusercontent.com/Abdool-Zaid/widget_test3/main/staging.js')
    .then(res=> res.text())
    .then(data=> console.log(data) )
})