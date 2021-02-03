
function createList(list,parent=document.body){
let elem=document.createElement("ul")


    list.map((itemElem)=>{
        let li=document.createElement("li");
        li.innerText=itemElem
        elem.append(li)
    })
    parent.append(elem)

}

createList(["hello","today","is","beautiful","day"],document.body);