var form =document.getElementById("myform")
var arr= []
form.addEventListener("submit",myFunc)

function myFunc(event){
        event.preventDefault();

        var name = document.getElementById('name').value
        var empID = document.getElementById('id').value
        var department = document.getElementById('department').value
        var exp = document.getElementById('experience').value
        var email = document.getElementById('email').value
        var mobile = document.getElementById('number').value

        var data = {
            Dname : name,
            DempID : empID,
            Ddepartment : department,
            Dexp : exp,
            Demail : email,
            Dmobile : mobile

        }

        arr.push(data)
        console.log(arr)
        display(arr);
        document.querySelector("form").reset();
}
function display(arr)
{
    document.querySelector("tbody").innerHTML = " ";


    arr.forEach(function (data){

        let tr = document.createElement("tr");
        // tr.style.height ="20px"
        tr.style.border ="2px gray solid"

        let name = document.createElement("td");
        name.innerText = data.Dname

        let id = document.createElement("td");
        id.innerText = data.DempID
       
        let department = document.createElement("td");
            department.innerText = data.Ddepartment

        let exp = document.createElement("td");
            exp.innerText = data.Dexp

        let email = document.createElement("td");
            email.innerText = data.Demail

        let mobile =document.createElement("td")
            mobile.innerText = data.Dmobile 

        let role = document.createElement("td");
        let textrole = giverole(data.Dexp)
        role.innerText = textrole


        let DeleteElement = document.createElement("td");
        DeleteElement.innerText = "Delete"

        DeleteElement.addEventListener("click",function(event){
                event.target.parentNode.remove()
        })
        DeleteElement.style.backgroundColor = "Red"
        

        tr.append(name,id,department,exp,email,mobile,role,DeleteElement);
        document.querySelector('tbody').append(tr)

         
    })





}
function giverole(Dexp){
    if(Dexp>5){
       return  "senior"
    }
    else if(Dexp>=2  && Dexp <=5){
        return "junior"
    }
    else if (Dexp<=1){
        return "fresher"
    }
}
