j=0
let b=["https://www.bookmyartistindia.com/wp-content/uploads/2023/03/Bma-banner-1-1.jpg",
        "https://www.bookmyartistindia.com/wp-content/uploads/2023/03/Mohit-Dudeja-Banner.jpg",
        "https://www.bookmyartistindia.com/wp-content/uploads/2023/03/Abhishek-Acharya-Banner-1-1.jpg",
        "https://www.bookmyartistindia.com/wp-content/uploads/2023/03/Vaibhav-Sethia-banner-1.jpg",
        "https://www.bookmyartistindia.com/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-18-at-16.41.20-1.jpg",
        "https://www.bookmyartistindia.com/wp-content/uploads/2023/03/Anu-Malik.jpg"]
function func(){
    let irf=document.getElementById("simg")
    let dref=document.getElementsByClassName("fa-circle")
    let cl=dref[j].classList
    cl.remove("fa-solid")
    cl.add("fa-regular")
    dref[j].classList=cl
    j++
    if(j>=b.length)
    {
        j=0
    }
    irf.src=b[j]
    let cl1=dref[j].classList
    cl1.remove("fa-regular")
    cl1.add("fa-solid")
    dref[j].classList=cl1
}
setInterval(func,3000)
function func1(){
    let irf=document.getElementById("simg")
    let dref=document.getElementsByClassName("fa-circle")
    let cl=dref[j].classList
    cl.remove("fa-solid")
    cl.add("fa-regular")
    dref[j].classList=cl
    j--
    if(j<0)
    {
        j=b.length-1
    }
    irf.src=b[j]
    let cl1=dref[j].classList
    cl1.remove("fa-regular")
    cl1.add("fa-solid")
    dref[j].classList=cl1
}
function func2(){
    let irf=document.getElementById("simg")
    let dref=document.getElementsByClassName("fa-circle")
    let cl=dref[j].classList
    cl.remove("fa-solid")
    cl.add("fa-regular")
    dref[j].classList=cl
    j++
    if(j>=b.length)
    {
        j=0
    }
    irf.src=b[j]
    let cl1=dref[j].classList
    cl1.remove("fa-regular")
    cl1.add("fa-solid")
    dref[j].classList=cl1
}
function func3(x){
    let irf=document.getElementById("simg")
    let dref=document.getElementsByClassName("fa-circle")
    let cl=dref[j].classList
    cl.remove("fa-solid")
    cl.add("fa-regular")
    dref[j].classList=cl
    j=x
    irf.src=b[j]
    let cl1=dref[j].classList
    cl1.remove("fa-regular")
    cl1.add("fa-solid")
    dref[j].classList=cl1
}
