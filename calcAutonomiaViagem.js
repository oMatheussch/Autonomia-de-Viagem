function printTravel() {
    var viagem = document.getElementById("travelName").value;
    var dist = document.getElementById("travelKM").value;
    var lit = document.getElementById("liters").value;
    var valorLitro = document.getElementById("value").value;
    var autonomia = (dist/lit)
    document.getElementById("result").innerHTML = "Em sua viagem para " + viagem + " com a distância de " + dist + " foram gastos " + lit +" litros de combustível! Ao final da viagem você teve uma autonomia de " + autonomia + "Km/L, o valor gasto por KM foi de " + (valorLitro/autonomia);
}
