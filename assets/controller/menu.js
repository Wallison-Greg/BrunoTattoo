
window.onload = () => {
    document.querySelector(".menu_open").addEventListener("click", () =>{
        if(document.querySelector(".menu nav ul").style.display === 'flex'){
            document.querySelector(".menu nav ul").style.display = 'none'
        }
        else{
            document.querySelector(".menu nav ul").style.display = 'flex'
        }
    })
    document.querySelector(".btn").addEventListener("click", () =>{
        if(document.querySelector(".intimo").style.display === 'flex'){
            document.querySelector(".intimo").style.display = 'none'
        }
        else{
            document.querySelector(".intimo").style.display = 'flex'
        }
    })
}
