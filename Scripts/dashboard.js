// Write code related to dashboard page here

let dashboardArr=JSON.parse(localStorage.getItem("task-list"))||[];
let priorityArr=JSON.parse(localStorage.getItem("priority-list"))||[]

displayrow(dashboardArr);

document.querySelector("#filter").addEventListener("click", function(){
       
})

function displayrow(dashboardArr){
    document.querySelector("tbody").innerHTML=""
    
    dashboardArr.forEach(function(elem, index){
        let row=document.createElement("tr");

        let col1=document.createElement("td");
        col1.innerText=elem.name;

        let col2=document.createElement("td");
        col2.innerText=elem.desc;
        
        let col3=document.createElement("td");
        col3.innerText=elem.start;

        let col4=document.createElement("td");
        col4.innerText=elem.end;

        let col5=document.createElement("td");
        col5.innerText=elem.prior;

        let col6=document.createElement("td");
        col6.innerText="Add";
        col6.addEventListener("click", function(event){
            console.log(elem, index);
            priorityArr.push(elem);
            localStorage.setItem("priority-list",JSON.stringify(priorityArr));
            dashboardArr.splice(index, 1);
            localStorage.setItem("task-list", JSON.stringify(dashboardArr))
            displayrow(dashboardArr)
        })
        
       
        row.append(col1, col2, col3, col4, col5, col6)

        document.querySelector("tbody").append(row);
    })
     
    document.querySelector("#task-count").innerText=dashboardArr.length;
}


