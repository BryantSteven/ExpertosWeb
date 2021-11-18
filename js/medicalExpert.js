//Toma de signos : 1.Frecuencia cardiaca 2.Temperatura 3.Tension arterial  4.Saturacion de oxigeno 5. Frecuencia respiratoria

var signo = 1;
var frecuenciaCardiaca;
var normal;
var funciona;
var electrocardiograma;
var tratamientoFrecuencia;

// let variable = console.readline(); <- Input por teclado

switch (signo) {
    case 1:
        console.log("¿Es normal la frecuencia cardiaca ?");
        //logica para asignar valor normal u otra cosa segun la respuesta con botones
        if (frecuenciaCardiaca == normal) {
            console.log("Posible enfermedad cardiaca");
            console.log("Proceda a tomar electrocardiograma para confirmar taquicardia | Bradicardia")
            //aqui input de normal o anormal para cardiograma electrocardiograma = normal
            if (electrocardiograma == normal) {
                console.log("Monitorizacion de signos vitales");
                break;
            } else {
                console.log("Realizar tratamiento para estabilizar la frecuencia");
                //Logica para ver si funciona, 2 botones que asignen a tratamiento frecuencia = funciona o cualquier otro valor
                if (tratamientoFrecuencia != funciona) {
                    console.log("Realizar Ecocardiografia y Pruebas de esfuerzo para descartar pericarditis o daño al miocardio");
                    console.log("Despues, realizar tratamiento para estabilizar frecuencia cardiaca");
                    console.log("¿ Mejoró el paciente ?");
                    //Aqui set valor de si o no expresado como true or false
                    if (mejoria != true) {
                        console.log("Realizar angiografia coronaria para descartar aneurisma o placa aterosclerotica");
                        console.log("Realizar nuevo tratamiento para estabilizar frecuencia cardiaca")
                        console.log("¿ Mejoró el paciente ?");
                        //Logica que asigne true or false a mejoria mediante botones
                        if (mejoria != true) {
                            console.log("Monitorizacion de todos los signos vitales debido a posible paro cardiaco, posible ingreso a cirugia")
                            break;
                        }
                    } else {
                        console.log("Monitorizacion de signos vitales");
                        break;
                    }

                } else {
                    console.log("Monitorizacion de signos vitales");
                    break;
                }
            }


        } else {
            console.log("Revisar otros signos vitales");
            break;
        }

        break;
    case 2:
        console.log("¿ Es normal la temperatura ?")
        if (normal != true) {

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }
        break;

    case 3:
        if (normal != true) {

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }

    case 4:
        if (normal != true) {

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }
        break;
    case 5:
        if (normal != true) {

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }

    default:
        console.log("Signo vital no controlado");
        break;
}