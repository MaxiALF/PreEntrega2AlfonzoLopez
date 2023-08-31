alert(`Bienvenido!! Calculemos los mejores porcentajes de Victorias en combate`)

class Persona {
    constructor(nombre, TotaldeCombates, porcentajedeVictorias) {
        this.nombre = nombre
        this.TotaldeCombates = TotaldeCombates
        this.porcentajedeVictorias = porcentajedeVictorias
    }
}

function datoPersona() {
    const nombre = prompt ('ingrese nombre del peleador')
    const TotaldeCombates = parseInt(prompt(`Cuantos combates disputó?`));

    let CombatesVictorias = 0;
    for (let Num = 1; Num < TotaldeCombates; Num++) {
        const resp = prompt(`Ganó el combate numero` + Num + `?`);
        if (resp === `si`) {
            CombatesVictorias++;
        }
    }
    
    function Calculo(TotaldeCombates, CombatesVictorias) {
        const Formula = CombatesVictorias * 100 / TotaldeCombates;
        return Formula;
    }

    const porcentajedeVictorias = Calculo(TotaldeCombates, CombatesVictorias);

    alert ("el porcentaje de victoria es de %" + porcentajedeVictorias);

    return new Persona(nombre, TotaldeCombates, porcentajedeVictorias)
}

const Peleadores = []

let AgregarMásPeleadores = true
while (AgregarMásPeleadores) {
    const peleador = datoPersona()

    Peleadores.push(peleador)

    const resp = prompt('quiere agregar mas peleadores?')
    if (resp === 'no') {
        AgregarMásPeleadores = false
    }
}

const resultado = Peleadores.filter ((pv) => pv.porcentajedeVictorias > 50);

alert (resultado);