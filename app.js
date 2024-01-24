let covid = new XMLHttpRequest()

let arrDisData = []
let newArrs = []


covid.open("GET","cric.JSON",true)

covid.send()

covid.onload = function(){
    let response = this.responseText;
    let cricket = JSON.parse(response)
    console.log(cricket.data)
    let test = cricket.data[0].team

    let table = document.querySelector('table')

    for(let i=0;i<=test.length;i++){

    }

}
