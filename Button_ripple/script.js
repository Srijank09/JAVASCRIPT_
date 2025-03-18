const btnele = document.querySelector(".btn")

btnele,addEventListener("mouseover", (e)=>{
    //console.log(e.pageX, e.pageY)
    //console.log(btnele.offsetLeft, btnele.offsetTop)

    const x = e.pageX - btnele.offsetLeft
    const y = e.pageY - btnele.offsetTop
    // console.log(x)

    btnele.style.setProperty("--posX", x + "px")
    btnele.style.setProperty("--posY", y + "px")
})