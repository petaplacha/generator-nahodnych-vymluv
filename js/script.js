function generovatVymluvu() {
    var vymluvy = [
        'Ujel mi autobus', 
        'Už od rána nestíhám, tak mě neprovokuj', 
        'vždyť zrovna jsem to chtěl udělat',
        'Mám čas i jindy, není důvod proč uklidit dnes',
        'Jen jsem zapnul žehličku, vypli proud.',
        'U doktora v čekárně byly samé holky a od Vás vím, že dámy mají přednost!',
        'Mám na to silnou alergii',
        'Dnes nemůžu.. potřebuji se učit',
        'Uklizečka mne zamkla na veřejné toaletě',
        'Fronta na košíky byla tak dlouhá, že jsem místo jídla koupila kožich a kozačky.',
        'Říkala jsi přece, že musíš zhubnout!',
        'Né děkuji, jedla jsem před chvílí',
        'Mě nevadí že je horko.. vypadám dobře!',
        'Duchové v mém domě mi nedovolili usnout celou noc.',];    
    var rand = vymluvy[Math.floor(Math.random() * vymluvy.length)];
    var element = document.getElementById("generovane");
    element.classList.remove("generovane");
    document.getElementById("vymluva").innerHTML = rand;
}