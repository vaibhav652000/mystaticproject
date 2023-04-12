i=0
let a=["https://www.bookmyartistindia.com/wp-content/uploads/2019/02/sb-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/satya-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/icsi-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/honda-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/class-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/asian-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/aba-corp-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/shivaji-college.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/proptiger.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/zeenews-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/aravali-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/ambuja-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/kdb-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/indore-public-school-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/galgotias-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/samsung-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/hdfc-bank-logo.png",
    "https://www.bookmyartistindia.com/wp-content/uploads/2019/02/paytm-logo.png"]
function fun()
{
    let iref=document.getElementsByClassName("logoimg")
    i++
    i=i%18
    iref[0].src=a[i%18]
    iref[1].src=a[(i+1)%18]
    iref[2].src=a[(i+2)%18]
    iref[3].src=a[(i+3)%18]
    iref[4].src=a[(i+4)%18]
    iref[5].src=a[(i+5)%18]
}
setInterval(fun,4000)
function fun1()
{
    let iref=document.getElementsByClassName("logoimg")
    i--
    if(i<0)
    {
        i=a.length-1
    }
    iref[0].src=a[i%18]
    iref[1].src=a[(i+1)%18]
    iref[2].src=a[(i+2)%18]
    iref[3].src=a[(i+3)%18]
    iref[4].src=a[(i+4)%18]
    iref[5].src=a[(i+5)%18]
}