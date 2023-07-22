// const sub =(cit)=>{
//     const url = "http://api.weatherapi.com/v1/current.json?key=a7ff5fbc332f47aca8514233221507&q=${city}&aqi=no";
//             document.getElementById.get(url,function(response){
//                 document.getElementById("img").attr("src",response.current)
//                 document.getElementById("temp").text(response.current)
//             })
           
//     document.getElementById("#fo").submit(
//         function(e){
//             e.preventDefault();
//             const city = getElementById("tx").value();
//             sub(city)
//         }
//     )
    
//     }



    


var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dateTime ='Date: '+ date+' Time: '+time;
document.getElementById('date-time').innerHTML= dateTime;
// setInterval(dateTime, 1000);
// setTimeout(function(){
//    window.location.reload();
// }, 1000);


const sub= (cit)=>{
    const url = `http://api.weatherapi.com/v1/current.json?key=a7ff5fbc332f47aca8514233221507&q=${cit}&aqi=no`;
            $.get(url,function(response){
                
                document.getElementById("temp").innerText= response.current.temp_c;
                document.getElementById("city").innerText= document.getElementById("tx").value;
                document.getElementById("time").innerText = response.current.last_updated;
                // document.getElementById("img").innerHTML= <img src="${response.current.condition}"/>
                $("img").attr("src",response.current.condition.icon)
        })
    }

document.getElementById("fo").addEventListener("submit", (e)=>
{
    e.preventDefault();
    const city_name= document.getElementById("tx").value
    sub(city_name)
})



        


