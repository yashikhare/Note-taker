var inputField = document.getElementById("inputField");
var addbtn = document.getElementById("addbtn");
var addNote = document.getElementById("addNote");
var note = document.getElementById("note");
var color= document.getElementById("color");

var list = [];

addbtn.addEventListener("click", function () {
    list.push(inputField.value);
    inputField.value="";
    console.log(list);
    renderNote();
});
 function color1(color){
     if(color.value === red){
         note.style.backgroundColor="red";
     }
 }


function renderNote() {
    var res = "";
    for (let i = 0; i < list.length; i++) {
        var single = list[i];
        var html = `<div class="note">
        <h3>Note ${i+1}: </h3>
        <p>${single}</p>
        <div class="delbtn1">
        <button class="delbtn" onclick=handleDelete(${i})>Delete</button>
        </div>
      </div>`
        res += html;
    }
    addNote.innerHTML = res;
}
function handleDelete(index){
    var newList =[];
    for(let i=0;i<list.length; i++){
        if(i!=index){
            newList.push(list[i]);
        }
    }
    list=newList;
     renderNote();

}