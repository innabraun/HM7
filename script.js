
function createList(list,parent=document.body){
//let elem=document.createElement("ul")


    /*list.map((itemElem)=>{
        let li=document.createElement("li");
        li.innerText=itemElem
        elem.append(li)
    })
    parent.append(elem)
*/

    let resultArray=list.map((itemElem)=>{
       return `<li>${itemElem}</li>`

    })

    const newString=resultArray.join(" ");
    parent.insertAdjacentHTML("afterbegin",`<ul>${newString}</ul>`);




}





createList(["hello","today","is","beautiful","day"],document.body);