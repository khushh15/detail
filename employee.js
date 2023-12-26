let form = document.getElementById("myform")
let arr = []


form.addEventListener('submit',myFunc)
function myFunc(event){
    event.preventDefault()

    let Name =document.getElementById("name").value

    let Employeeid =document.getElementById("employeeid").value

    let Ddepartment =document.getElementById("department").value

    let Exp =document.getElementById("exp").value

    let Email =document.getElementById("email").value

    let Mobile =document.getElementById("mbl").value
    

    let data ={
            
        DName:Name,
        DEmpid:Employeeid,
        DDepartment:Ddepartment,
        DExp:Exp,
        DEmail:Email,
        DMobile:Mobile,
        
    }
  arr.push(data)
  console.log(arr)
  display(arr)
  // document.querySelector("form").reset()

}

function display (arr){
  document.querySelector("tbody").innerHTML = " "

  arr.forEach(function(data){


    let tr =document.createElement("tr")

    let name =document.createElement("td");
    name.innerText = data.DName;

    let employeeID=document.createElement("td");
    employeeID.innerText = data.DEmpid;

    let  department =document.createElement("td");
    department.innerText =data.DDepartment;

    let exp =document.createElement("td");
    exp.innerText = data.DExp;
    
    let email =document.createElement("td");
    email.innerText = data.DEmail;

    let mobile= document.createElement("td");
    mobile.innerText = data.DMobile

    let role =document.createElement("td")
     let roletext =giveRole(data.DExp)
     role.innerText = roletext

     let DeleteElement =document.createElement("td")
     DeleteElement.innerText = "Delete"
     DeleteElement.style.cursor = "pointer"

     DeleteElement.addEventListener("click",function(event)
     {
      event.target.parentNode.remove()
     })

     DeleteElement.style.backgroundColor ="Red"
     
     tr.append(name,employeeID,department,exp,email,mobile,role,DeleteElement)
     document.querySelector("tbody").append(tr);
    

  })


}
      function giveRole(DExp)
      {
        if(DExp>5){
          return "senior"
        }
        else if(DExp >=2  &&  DExp<=5){
          return "junior"
        }
        else if(DExp <=1){
          return "fresher"
        }
      }