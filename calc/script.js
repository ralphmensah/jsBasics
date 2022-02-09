document.getElementById("item").innerText;
console.log("heello")

let myArr = []

function btnClicked(num){
    myArr.push(num);
    console.log("clicked " + num)
    console.log(myArr)

    document.getElementById("item").innerHTML = num
}

function calculateSum(){
    let arr = myArr
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element !== '+'){
            console.log(element + " -->" + typeof(element))
            sum = sum + element;
        }  
    }
    console.log(sum)
    document.getElementById("item").innerHTML = sum
    myArr = []
}


