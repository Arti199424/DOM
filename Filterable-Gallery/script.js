const gadgetForm=document.getElementById('form');
const deleteButton=document.getElementById('delete_btn');
const displayItem=document.getElementById('display_item');
const error=document.getElementById('error');
const categoryFilter=document.getElementById('category_filter');
let currentFilter = "";
function display(gadgetArr){

  const displayItem=document.getElementById('display_item');
  displayItem.innerHTML="";

if (!gadgetArr) {
    gadgetArr = []; 
}

display(gadgetArr);

categoryFilter.addEventListener("click", (e) => {
    e.preventDefault();
  currentFilter = e.target.innerText;

//   console.log(e.target.innerText);
//  return;
  

  let filterCategory = gadgetArr;

//   console.log(filterCategory);
//   return;



  if (currentFilter == "Headphones") {
    filter = filterCategory.filter((item) => item.gadgetCategpry =="headphone");
  } else if (currentFilter == "Laptops") {
    filter = filterCategory.filter((item) => item.gadgetCategpry == "laptop");
  } else if (currentFilter == "Mobiles") {
    filter = filterCategory.filter((item) => item.gadgetCategpry == "Mobile");
  }
   

  if(currentFilter == "All"){
    display(gadgetArr);
  }else{
  display(filter);
  }
});



displayItem.addEventListener('mouseover', ()=>{

const delete_row=document.querySelectorAll('.delete_btn');

});