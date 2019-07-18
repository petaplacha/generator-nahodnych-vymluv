function generovatVymluvu(typId, casId) {

    var nejVymluva;
    var typ = document.getElementById(typId).selectedIndex;
    var cas = document.getElementById(casId).selectedIndex;

    if (0 === typ) {
        typ = Math.floor(Math.random() * 3) + 1;
    }

    if (0 === cas) {
        cas = Math.floor(Math.random() * 3) + 1;
    }

    
    var vymluvyTermMin = [
        'Ujel mi autobus.',
        'Musel jsem se ještě zastavit u babičky.',
        'Sousedka potřebovala pomoct s nákupem.',
        'Zasekli se mi dveře na záchodě.',
    ];

    var vymluvyTermHod = [
        'Byl jsem u doktora.',
        ,];

    var vymluvyTermRok = [
        'Unesli mě mimozemšťani.',
    ];

    var vymluvyPraceMin = [
        'Najednou se mi zatočila hlava.',
    ];

    var vymluvyPraceHod = [
        'Je mi strašně špatně.',
    ];

    var vymluvyPraceRok = [
        'Tys mi to asi musel zapomenout říct.',
    ];

    var vymluvyNeMin = [
        'Zrovna mi volá maminka.',
        'Musím na záchod.',
    ];
    var vymluvyNeHod = [
        'Musím jít k doktoru.',
        'Potřebuju se učit.',
        'Moje kočka má v ten den narozeniny',
    ];
    var vymluvyNeRok = [
        'Mám na to silnou alergii/fobii.',
        'Slíbil jsem mamince, že to neudělám.',
    ];


    switch (typ) {
        case 1:
                if (1 === cas) {
                    nejVymluva = vymluvyTermMin[Math.floor(Math.random() * vymluvyTermMin.length)];
                }

                if (2 === cas) {
                    nejVymluva = vymluvyTermHod[Math.floor(Math.random() * vymluvyTermHod.length)];
                }

                if (3 === cas) {
                    nejVymluva = vymluvyTermRok[Math.floor(Math.random() * vymluvyTermRok.length)];
                }
            break;
        case 2:
            if (1 === cas) {
                nejVymluva = vymluvyPraceMin[Math.floor(Math.random() * vymluvyPraceMin.length)];
            }              
            
            if (2 === cas) {
                nejVymluva = vymluvyPraceHod[Math.floor(Math.random() * vymluvyPraceHod.length)];
            }
            
            if (3 === cas) {
                nejVymluva = vymluvyPraceRok[Math.floor(Math.random() * vymluvyPraceRok.length)];
            }
            break;
        case 3:
            if (1 === cas) {
                nejVymluva = vymluvyNeMin[Math.floor(Math.random() * vymluvyNeMin.length)];
            }

            if (2 === cas) {
                nejVymluva = vymluvyNeHod[Math.floor(Math.random() * vymluvyNeHod.length)];
            }

            if (3 === cas) {
                nejVymluva = vymluvyNeRok[Math.floor(Math.random() * vymluvyNeRok.length)];
            }
            break;
        default:
            nejVymluva = 'Promiň, nemám pro tebe teď žádnou výmluvu...';
    }

    document.getElementById("vymluva").innerHTML = nejVymluva;

    var element = document.getElementById("generovane");
    element.classList.remove("generovane");
}

function zobrazitFiltr() {
    var element = document.getElementById("filtr");
    element.classList.remove("filtr");
}