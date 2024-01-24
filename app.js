let cricket = new XMLHttpRequest()

let arrDisData = []
let newArrs = []


cricket.open("GET","cric.JSON",true)

cricket.send()

cricket.onload = function(){
    let response = this.responseText;
    let cricket = JSON.parse(response)
    
    let test = cricket.data[0].team
    console.log(test)
    let table = document.querySelector('table')
    table.innerHTML="<tr><td>Ranking</td><td>Country Name</td><td>Rating</td><td>Flag</td></tr>"


    for(let i=0;i<=test.length;i++){
        table.innerHTML+="<tr><td>"+test[i].position+"</td><td>"+test[i].name+"</td><td>"+test[i].ranking.rating+"</td><td><img src="+test[i].image_path+"></td><tr>"
    }

}
