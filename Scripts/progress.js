// Write code for the Progress page here 

let progressArr=JSON.parse(localStorage.getItem("priority-list"))||[];

let doneArr=JSON.parse(localStorage.getItem("done-list"))||[];

displayrow(progressArr)

function displayrow(progressArr){
    document.querySelector("tbody").innerHTML=""
    
    progressArr.forEach(function(elem, index){
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
        col6.innerText="Add to done";
        col6.addEventListener("click", function(event){
            console.log(elem, index);
            doneArr.push(elem);
            localStorage.setItem("done-list",JSON.stringify(doneArr))
            progressArr.splice(index, 1);
            localStorage.setItem("task-list", JSON.stringify(progressArr))
            displayrow(progressArr)
        })
        
       
        row.append(col1, col2, col3, col4, col5, col6)

        document.querySelector("tbody").append(row);
    })
       
}
