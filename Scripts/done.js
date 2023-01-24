// Write code related to Done page here

let doneArr=JSON.parse(localStorage.getItem("done-list"))||[];

displayrow(doneArr);

function displayrow(doneArr){
    document.querySelector("tbody").innerHTML=""
    
    doneArr.forEach(function(elem, index){
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

        row.append(col1, col2, col3, col4, col5)

        document.querySelector("tbody").append(row);
    })
       
}
