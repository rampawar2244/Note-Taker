 
let submitBtn= document.querySelector('#submitBtn');
const newLi = document.getElementById("list");
var arr = []
 //adding click event on button
submitBtn.addEventListener('click', e =>{
    e.preventDefault();
    const text = document.querySelector('#text-input').value
    const newTime = document.getElementById('text-time').value
    const checkBox = document.querySelector('#check').checked
 
   //store input val in object
   var items = {
     text:text,
     newTime:newTime,
     checked:checkBox,
   };
   arr.push(items)
   showElement();

   // clear after getting input
   document.querySelector("#text-input").value = "";
   document.querySelector("#text-time").value = "";
   document.querySelector("#check").checked = false;
  })
  
  //create a list when click on submit btn
   function showElement(){
    newLi.innerHTML = "";
    arr.forEach((items,i) => {
      newLi.innerHTML +=  ` <li class="card bg-light mb-3 li-item" id ='${i}'>
      <div class="card-item p-2">
        <div class="d-flex justify-content-between">
          <div class='h3'>${items.text} &nbsp;&nbsp; ${items.newTime}</div>
          <button id='${i}' class="button btn btn-outline-danger rounded" onclick="delBtn(this.id)">X</button>
        </div>
      </div>
</li>`;
 //change the border color green and red
setTimeout(() => {
  if (arr[i].checked) {
    document.getElementById(i).classList.add("plus");
   } else {
    document.getElementById(i).classList.add("minus");
   }
}, 0);
})
}

//del iten when click on btn
    function delBtn(i){
      arr.splice(i,1)
       showElement();
    }
   
    


    



  
//     const newLi = document.createElement('li')
//     newLi.setAttribute('class', 'h1 list-group-item')
//     const newGettime = document.createElement('span')
//     newGettime.setAttribute('class','span')
//     const delBtn = document.createElement('button') 
//     delBtn.setAttribute('class','del-btn')
//     delBtn.setAttribute('id','delBtn1')
//     newGettime.textContent = newTime
//     newLi.textContent = text;
//      newLi.appendChild(newGettime)
//      delBtn.innerText = ('X');
//      newLi.appendChild(delBtn)
//      setTimeout(()=>{colorCh(newLi,checkBox)},0)
//      document.querySelector('ul').appendChild(newLi)
//  // delete item from list
//      function delItem(){
//        newLi.parentNode.removeChild(newLi);
//      }
//      delBtn.addEventListener('click', delItem)
//  })
//     function colorCh(newLi,checkbox){
//     if(checkbox){
//     newLi.classList.add('plus')
//     }else{
//     newLi.classList.add('minus')
//     }}
    
//     function delBtn(arr){
//       arr.filter((key,index) => {
//         return index !== arr.key
//       })
//     }
    
//     if(document.getElementById('#delBtn1')){
//       document.getElementById('#delBtn1').addEventListener('click',()=>{
//         return 
//       })
//     }

    

   
       