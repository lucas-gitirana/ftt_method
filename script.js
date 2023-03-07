/* const btn = document.getElementById("organization_button")

btn.addEventListener("click", function(e) {
    const money = document.getElementById("input_money").value
    alert(money)
}); */

document.querySelector("#organization_button").onclick = function(){
    const money = parseFloat(document.querySelector("#input_money").value)
    const values = document.querySelectorAll(".org_value")

    conversion_1 = money * 0.5
    conversion_2 = money * 0.2
    conversion_3 = money * 0.3
    
    values[0].innerText = "$"+conversion_1.toFixed(2)
    values[1].innerText = "$"+conversion_2.toFixed(2)
    values[2].innerText = "$"+conversion_3.toFixed(2)
}