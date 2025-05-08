let inputvalue=document.querySelector(" form input");
let addtask=document.querySelector(" form button");
let list=document.querySelector('.notes ul')


let data=[];
startfunction();

function startfunction()
{
    if(localStorage.getItem('data')!=null)
    {
        data=JSON.parse(localStorage.getItem('data'));
        showlements();
    }
    else{
        data=[];
    }
}


    list.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete'))
        {
            let ID=e.target.id;
           data=data.filter((el,index)=>{
             return index!=ID;
           })
           localStorage.setItem("data",JSON.stringify(data))
           showlements();
        }
    })
    list.addEventListener('click',(e)=>{
        if(e.target.classList.contains('toggle'))
        {
            let ID=e.target.id;
            console.log(document.querySelectorAll('ul li')[ID].classList.toggle('toggle'));
            
        }
    })


addtask.addEventListener('click',(e)=>{
    e.preventDefault()
    if(inputvalue.value!=="")
    {
        data.push(inputvalue.value);
        inputvalue.value=""
    }
    showlements();
    localStorage.setItem("data",JSON.stringify(data));
})

function showlements()
{
    list.innerHTML="";
    data.map((el,index)=>{
        let li=document.createElement('li');
        li.innerHTML=`<p>${el}</p><div class="buttons"><button id=${index} class="toggle">Toggle</button> <button class="delete" id=${index} >Delete</button></div>`
        list.appendChild(li);
    })
}



