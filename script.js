var a = document.querySelector("input");
a.addEventListener("focus", () => {
    let b = a.parentElement;
    b.style.background = "white";
    b.style.boxShadow = "0px 1px 1px rgba(0,0,0,0.5)"
})
a.addEventListener("blur", () => {
    let b = a.parentElement;
    b.style.background = "var(--nav-search-bg-color)";
    b.style.boxShadow = "none"
})


var category = document.querySelectorAll(".category");
category.forEach(e=>{
    e.addEventListener("click",()=>{
        category.forEach(cate=>{
            cate.classList.remove("active_cate")
        })
        e.classList.add("active_cate");
	document.querySelector("title").textContent = e.querySelector("p").innerText + " - 32 New";
    })
})



var list = document.querySelectorAll(".list .icon");
list.forEach(e=>{
    e.addEventListener("click",()=>{
        list.forEach(cate=>{
            cate.classList.remove("active")
        })
        e.classList.add("active");
        console.log(e)
    })
})