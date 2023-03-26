

let grid = document.querySelector(".products");
filterinput = document.getElementById("filterinput");

fetch('./database/mydb.json')
            .then(res=>res.json())
            .then(json=>{
                for (let value of json) {
                    addelement(grid,value)
                }
                  
            });

            //add event listner

filterinput.addeventlistner("keyup", filterProducts);
       //callback function
function filterProducts(){
  let filtervalue = filterinput.value.toUpperCase();
  let item = grid.querySelector(".item")
  for(let i =0; i <item.length; i++)
  {
    let span  =item[i].querySelector(".item");
     if(span.innerHTML.toUpperCase().indexOf(filtervalue) > -1)
     {
      item[i].style.display = "initial";
     }
     else{
      item[i].style.display = "none";
     }
  }
  console.log(filtervalue);

}
            function addelement(appendln, value){
                let div = document.createElement("div");
                div.className = "item justify-self-center";

                let{image,title,category, price} = value;

                div.innerHTML = 

                `
                  <img src="${image}" class="big-covering img"alt="images1">
                  <div class ="text-centery py-3 font-poppins">
                    <h1 class=""text-lg-title>${title}</h1>
                    <a href="#" class = "block"> <span class="text-sm text-red-400">${category}</span></a>
                    <span class="block py-3">$ <span class="text-md">${price}</span></span>
                    <button class="border-2 px-8 py-1 bg-yellow-400 border rounded-md">buy now</button>
                  </div>
                `

                appendln.appendChild(div);
                
            }