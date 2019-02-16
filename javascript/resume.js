var query=window.location.search.substring(1).split("?");
var parent;
query.map((data)=>{
  let splitdata=data.split("=");
  parent=parseInt(splitdata[1]);

});

var indexedDB=window.indexedDB||window.mozIndexedDB||window.webKitIndexedDB||window.msIndexedDB;

 //ternaray operator
 indexedDB?console.log("Success"):console.log("browser Not Supported");


//creating database
 var request=indexedDB.open("DBMS",1);
 var result;
 var store;
 console.log(request);

//upgradeneeded
request.onupgradeneeded=function(e){
result=e.target.result;
store=result.createObjectStore("resume",{keyPath:"Id",autoIncrement:true});
}


//success
 request.onsuccess=function(e){
   console.log("reached successfully");
   result=e.target.result;
   var tx=result.transaction("resume","readwrite");
   store=tx.objectStore("resume");
   var getExact = store.get(parent);
    getExact.onsuccess=function (get) {
    console.log(get.target.result);
    pro(get.target.result);
    Edu(get.target.result.Education);
    skills(get.target.result);

   }
   var left=document.querySelector(".left");
   var right=document.querySelector(".right");

   function pro(profile) {
     var image=document.createElement("img");
     image.src="image/download.png";
     left.appendChild(image);

     var h1=document.createElement("h1");
     h1.textContent=profile.Name;
     left.appendChild(h1);

     var h3=document.createElement("h3");
     h3.textContent=profile.Branch;
     left.appendChild(h3);

     var h4=document.createElement("h4");
     h4.textContent=profile.Phno;
     left.appendChild(h4);

     var h5=document.createElement("h5");
     h5.textContent=profile.Email;
     left.appendChild(h5);

     var carrer=document.createElement("h1");
     carrer.textContent="Carrer Object";
     right.appendChild(carrer);
     right.appendChild(document.createElement("hr"));

     var p=document.createElement("p");
     p.textContent=profile.co;
     right.appendChild(p);


   }
   function Edu(edu) {
     var education=document.createElement("h1");
     education.textContent="Education Information";
     right.appendChild(education);
     right.appendChild(document.createElement("hr"));


     for(i in edu){
       let degree=document.createElement("h3");
       degree.textContent=edu[i].Degree;
       right.appendChild(degree);

       // let board=document.createElement("h3");
       // board.textContent=edu[i].Board;
       // right.appendChild(board);

       let ul=document.createElement("ul");
       right.appendChild(ul);

       //create lists(l1,l2,l3)
       let li1=document.createElement("li");
       li1.textContent="College: "+edu[i].College;
       ul.appendChild(li1);

       let li2=document.createElement("li");
       li2.textContent="Branch: "+edu[i].Branch;
       ul.appendChild(li2);

       let li3=document.createElement("li");
       li3.textContent="Marks: "+edu[i].Marks;
       ul.appendChild(li3);

     }
      }
     function skills(skill) {
       var sk=document.createElement("h1");
       sk.textContent="Technical Skills";
       right.appendChild(sk);
      right.appendChild(document.createElement("hr"));

      var skills=document.createElement("p");
      skills.textContent=skill.skills;
      right.appendChild(skills);
   }







}
