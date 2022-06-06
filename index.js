var obj = {
    friy_rice:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9t9BVbmx3tMkGftoaWOJSRSN49zYFzOkSg&usqp=CAU",
    Burger:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2pkYwwas_BecK34pxDbR0BLIpN3PX5lG5Hw&usqp=CAU",

    Momose: "https://th.bing.com/th/id/OIP.W_vYhH5VOqc1wDbKmM15YQHaEo?pid=ImgDet&rs=1",
    Nudle:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSbuiTiBs_2HKIvV5HqbYMMrpZ-5G60UsYA&usqp=CAU",
    Pizza:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oLlugHHsoilyEa_HEL2TWHGb1tSr16saKw&usqp=CAU",
    Ice_Cream:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuROHKS482Avp0qFepr-H3zGQZY5phGWwRRQ&usqp=CAU",
    Coca_Cola:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXFZZqOMM84Y1hKXGZ5gx4OKVkgcQtdrQJA&usqp=CAU",
}

document.getElementById("Submit").addEventListener("click",function(e){
    document.getElementById("show_food")

    e.preventDefault();
    let check = document.querySelectorAll('input[type = "checkbox"]:checked');

    let val =[];
    check.forEach(function(item){
        val.push(item.value)
    })
    for(let i=0;i<val.length;i++){
        order(val[i])
    }
});



function status(){
    return open;
}

async function order(food){
    let preparing_food = new Promise (function(resolve,reject){
        let s=status();
                let time= Math.floor(Math.random()*10000)
                console.log(time);
                
                if(s==open){
                    setTimeout(() => {
                        resolve(food)
                    }, time);
                    
                }
                else{
                    reject("sorry we are not able to deliver that food")
                }

    })
    preparing_food.then(function (message){
        // console.log(`Your order ${value} is ready plz taking it`)
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = obj[message];
        div.append(img);
        document.getElementById("show_food").append(div);
        document.getElementById("show_time").innerText = "";
        document.getElementById("form").reset();
    })
    .catch(function(message){
        alert(message);
     })

     document.getElementById("show_food").innerHTML = "";


}







