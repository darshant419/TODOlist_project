const inputEle = document.getElementById("todo-inputs");
const list = document.getElementById("list");


function addtsk(){
    if (inputEle.value === ''){
        alert("please enter atleast one task");
    }
    else{
        const li = document.createElement("li") ;
        li.innerHTML  = inputEle.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML  = "\u00d7"
        li.appendChild(span)
        //clear the textbox after adding to do item
        inputEle.value='';
        SaveData();
    }
}


list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.classList.add('fall');
      e.target.parentElement.addEventListener('transitionend', function () {
        e.target.parentElement.remove();
        // window.location.reload();
        SaveData();
      });
    
    }
    e.preventDefault();
  }, false);

function SaveData(){
    localStorage.setItem("data", list.innerHTML);
    // localStorage.clear();
}


// function SaveData(){
//     sessionStorage.setItem("data", list.innerHTML);
// }

function showTask(){
    // try {
    //     list.innerHTML  = localStorage.getItem("data");
    //   } catch (error) {
    //     console.error(error);
    //   }
    list.innerHTML  = localStorage.getItem("data");
}
showTask();



