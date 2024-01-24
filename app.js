let cricket = new XMLHttpRequest()

let arrDisData = []
let newArrs = []


cricket.open("GET","cric.JSON",true)

cricket.send()

let table = document.querySelector('table')

cricket.onload = function(){
    if(cricket.status==200){
    let table = document.querySelector('table')
    let response = this.responseText;
    let cricket = JSON.parse(response)
    
    let test = cricket.data[0].team
    
    for(let i = 0;i<test.length;i++){
        newArrs.push(test[i])
    }
  
    testRanking()
}
}


function testRanking(){
    console.log(newArrs)
    table.innerHTML="<tr><td>Ranking</td><td>Country Name</td><td>Rating</td><td>Flag</td></tr>"

    for(let i=0;i<newArrs.length;i++){
        console.log(newArrs[i].position)
        table.innerHTML+="<tr><td>"+newArrs[i].position+"</td><td>"+newArrs[i].name+"</td><td>"+newArrs[i].ranking.rating+"</td><td><img src="+newArrs[i].image_path+"></td><tr>"
    }


}