


const hover = document.querySelectorAll(".hover");

const star = document.querySelector("#star")

const request = document.querySelectorAll(".request")

const meet = document.querySelector("#meet")







hover.forEach(element => {

  element.addEventListener("mouseover", ()=>{

    element.style.backgroundColor = "lightgray"

  })

});




hover.forEach(element => {

    element.addEventListener("mouseout", ()=>{

      element.style.backgroundColor = "transparent"

    })

  });




  star.addEventListener("click",(e)=>{

    if(e.target.style.color == "yellow"){

        e.target.style.color = "rgb(102, 96, 96)"

    }else{

        e.target.style.color = "yellow"

    }




  })




  request.forEach(ele=>{

    ele.addEventListener("mouseover", ()=>{

        ele.style.backgroundColor = "#e0e5eb"

      });

  });




  request.forEach(ele=>{

    ele.addEventListener("mouseout", ()=>{

        ele.style.backgroundColor = "transparent"

      });

  });








