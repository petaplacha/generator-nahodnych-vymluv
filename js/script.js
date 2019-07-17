function generovatVymluvu() {
    var vymluvy = [
        'January', 
        'February', 
        'March'];    
    var rand = vymluvy[Math.floor(Math.random() * vymluvy.length)];
    var element = document.getElementById("generovane");
    element.classList.remove("generovane");
    document.getElementById("vymluva").innerHTML = rand;
}