function generovatVymluvu() {
    var vymluvy = [
        'January', 
        'February', 
        'March'];    
    var rand = vymluvy[Math.floor(Math.random() * vymluvy.length)];
    document.getElementById("vymluva").innerHTML = rand;
}