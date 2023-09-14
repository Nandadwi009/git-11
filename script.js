//  const judul = document.getElementById('judul');
//  judul.style.backgroundColor = "purple";
//  judul.style.color = "white";
//  judul.innerHTML = "nanda"
//  const p = document.getElementsByTagName("p");
//  for (let i = 0; i < p.length; i++) 
//      p[i].style.backgroundColor = "grey";
//      ("h1")[0];
//    h1.style.fontSize = "28px";
//   const p1 = document.getElementsByClassName("p1")[0];
//   p1.innerHTML = "ini diubah dari javascript";
//   const h1 = document.getElementsByTagName("h1")[0];
//   h1.style.fontSize = "28px"; 



//  const link = document.getElementsByTagName("a")[0];
//  link.style.background = "black";

 

// querySelector -> element
const changeLink = document.querySelector("section#a a");
changeLink.style.color = "red";

const p3 = document.querySelector("section#a .p3");
p3.style.color = "purple";
p3.style.textAlign = "center";

const li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "lightblue";
}

// const sectionA = document.querySelector("section#a ");
// const getP = sectionA.querySelectorAll("p")[1];

// const p2 = document.querySelector("#a .p2");
// p2.style.color = "blue";

// const addTarget = document.querySelector("#a a");
// addTarget.setAttribute("target", "_blank");

const Li2 = document.querySelector("#b ul"); 
const addColorLi2 = Li2.querySelectorAll("li")[1];
addColorLi2.style.backgroundColor = "green";