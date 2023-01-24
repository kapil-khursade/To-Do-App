// Write code related to Home page here 
let dataArr=JSON.parse(localStorage.getItem("task-list"))||[];
let keys=document.querySelector("form")
document.querySelector("form").addEventListener("submit", function (event){
event.preventDefault();
let obj={
    name:keys.name.value,
    desc:keys.desc.value, 
    start:keys.start.value,
    end:keys.end.value,
    prior:keys.priority.value
}
dataArr.push(obj);
localStorage.setItem("task-list", JSON.stringify(dataArr));
alert("task added");

})