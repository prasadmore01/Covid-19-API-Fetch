let cricket = new XMLHttpRequest()

let arrDisData = []
let testArr = []
let odiArr = []
let t20Arr = []


cricket.open("GET","cric.JSON",true)

cricket.send()

let table = document.querySelectorAll('table')

cricket.onload = function(){
    if(cricket.status==200){
    let table = document.querySelector('table')
    let response = this.responseText;
    let cricket = JSON.parse(response)
    
    let test = cricket.data[0].team

    
    for(let i = 0;i<test.length;i++){
        testArr.push(test[i])
    }
    testRanking()

    let odi = cricket.data[1].team

    for(let i = 0;i<odi.length;i++){
        odiArr.push(odi[i])
    }
    odiRanking()
    
    let t20 = cricket.data[2].team

    for(let i = 0;i<odi.length;i++){
        t20Arr.push(t20[i])
    }
    t20Ranking()
    }
}


function testRanking(){
    console.log(testArr)
    table[0].innerHTML="<tr><th>Ranking</th><th>Country </th><th>Rating</th><th>Flag</th></tr>"

    for(let i=0;i<testArr.length;i++){
        console.log(testArr[i].position)
        table[0].innerHTML+="<tr><td>"+testArr[i].position+"</td><td>"+testArr[i].name+"</td><td>"+testArr[i].ranking.rating+"</td><td><img src="+testArr[i].image_path+"></td><tr>"
    }


}

function odiRanking(){

    table[1].innerHTML="<tr><th>Ranking</th><th>Country</th><th>Rating</th><th>Flag</th></tr>"

    for(let i=0;i<odiArr.length;i++){
        console.log(odiArr[i].position)
        table[1].innerHTML+="<tr><td>"+odiArr[i].position+"</td><td>"+odiArr[i].name+"</td><td>"+odiArr[i].ranking.rating+"</td><td><img src="+odiArr[i].image_path+"></td><tr>"
    }

}

function t20Ranking(){

    table[2].innerHTML="<tr><th>Ranking</th><th>Country</th><th>Rating</th><th>Flag</th></tr>"

    for(let i=0;i<t20Arr.length;i++){
        console.log(t20Arr[i].position)
        table[2].innerHTML+="<tr><td>"+t20Arr[i].position+"</td><td>"+t20Arr[i].name+"</td><td>"+t20Arr[i].ranking.rating+"</td><td><img src="+t20Arr[i].image_path+"></td><tr>"
    }

}