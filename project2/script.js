let buttonStatus = false;
document.getElementById("cont1").onclick=function() {
    document.getElementById("picDiv1").innerHTML = '<figure> <img src="media/future.jpg" alt="infrastructure" width="600" height="360"> <figcaption>Fig 1. Limited access to modern hardware or cloud data centers.</figcaption> </figure>';
    document.getElementById("picDiv2").innerHTML='<figure> <img src="media/costs.jpg" alt="Costs" width="600" height="360"> <figcaption>Fig 2. Imported hardware and software are costly due to taxes and weak local currency..</figcaption> </figure>';
    document.getElementById("picDiv3").innerHTML= '<figure> <img src="media/chart.webp" alt="charts" width="600" height="360"><figcaption>Fig 3. Summary of profit associated with IT companies.</figcaption> </figure>';
    document.getElementById("description").innerHTML = "Unreliable electricity supply affects uptime and productivity. Slow or expensive internet in many rural and even urban areas. Limited access to modern hardware or cloud data centers.";
    document.getElementById("h1").innerHTML="Some of Challenges ";
    document.getElementById("p1").innerHTML="Images below depicts many of the challenges faced by the infrastructure in Africa. The first image shows the future of advance infrastructure we need in Africa, while the second image emphasizes the costs involved in building and maintaining this infrastructure.";
    document.getElementById("h2").innerHTML="";
    document.getElementById("p2").innerHTML="";
    document.getElementById("h3").innerHTML="";
    document.getElementById("p3").innerHTML="";
    document.getElementById("h4").innerHTML="";
    document.getElementById("p4").innerHTML="";
    document.getElementById("h5").innerHTML="";
    document.getElementById("p5").innerHTML="";
    buttonStatus = true;
    if (buttonStatus) {
    this.textContent = "Still more to be done...";
    }

    ;
    
//'<img src="media/costs.jpg" alt="Costs" width="600" height="360">';

//'<img src="media/future.jpg" alt="infrastructure" width="600" height="360">'

//Imported hardware and software are costly due to taxes and weak local currency.

}



