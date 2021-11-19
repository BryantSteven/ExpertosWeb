//Toma de signos : 1.Frecuencia cardiaca 2.Temperatura 3.Tension arterial  4.Saturacion de oxigeno 5. Frecuencia respiratoria

//variables de control
var signo = 1;
var frecuenciaCardiaca;
var tensionArterial;
var saturacionOxigeno;
var frecuenciaRespiratoria;
var normal;
var funciona;
var electrocardiograma;
var tratamientoFrecuencia;
var temperatura;
var alta;
var baja;

// let variable = console.readline(); <- Input por teclado
console.log("¿ Que signo vital va a tomar primero \n 1.Frecuencia cardiaca \n  2.Temperatura \n  3.Tension arterial \n   4.Saturacion de oxigeno \n  5. Frecuencia respiratoria ?")
//Logica mediante un input field para que el usuario escoja y asignar valor numero a signo, esta inicializado en 1 por defecto, o por botones, como se prefiera
switch (signo) {
    case 1:
        console.log("¿Es normal la frecuencia cardiaca ?");
        //logica para asignar valor normal u otra cosa segun la respuesta con botones
        if (frecuenciaCardiaca != normal) {
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
        if (temperatura != normal) {

            console.log("Posible enfermedad cardiaca, virus o bacteria.");
            console.log("¿ La temperatura es alta o baja ?");
            //Logica en botones para cambio de temperatura
            if (temperatura == alta) {
                console.log("Aplicar compresiones frias.");
            } else {
                console.log("Sumministrar manta termica, en caso de mayor gravedad suminisitrar liquidos intravenosos tibios");
                console.log("Monitorizar temperatura");
                break;

            }

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }
        break;

    case 3:
        console.log("¿Es normal la Tension arterial ?");
        //logica para asignar valor normal u otra cosa segun la respuesta con boto
        if (tensionArterial != normal) {
            console.log("Posible enfermedad cardiaca");
            console.log("¿ Es alta o baja ?");
            if (tensionArterial == alta) {
                console.log("Suministrar medicamentos para la tension alta y monitorizar la tension");
                break;
            } else {
                console.log("Suministrar medicamentos para la tension baja y monitorizar la tension");
                break;
            }

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }

    case 4:
        console.log("¿ Es normal la saturacion de oxigeno ?");
        //Logica mediante botones para asignar valor normal o no a la saturacionOxigeno
        if (saturacionOxigeno != normal) {
            console.log("Posible enfermedad cardiaca");
            console.log("¿ Es la saturacion de oxigeno baja ? ");
            //logica mediante botones para cambiar valor de saturacionOxigeno
            if (saturacionOxigeno == baja) {
                console.log("Realizar oxigenacion y monitorizar la saturacion");
                break;
            } else {
                console.log("Posible desequilibrio acido-base , realizar tratamiento para ello");
                break;
            }

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }
    case 5:
        console.log("¿ Es normal la frecuencia respiratoria ?");
        if (frecuenciaRespiratoria != normal) {
            console.log("Posible enfermedad cardiaca");
            console.log("¿ Es alta o baja la frecuencia respiratoria ?");
            //realizar logica mediante botones para asignar valor a frecuenciaRespiratoria alta o baja
            if (frecuenciaRespiratoria == alta) {
                console.log("Realizar ventilacion para frecuencia alta y monitorizar la frecuencia cardiaca");
                break;
            } else {
                console.log("Realizar ventilacion para frecuencia baja y monitorizar la frecuencia cardiaca");
                break;

            }

        } else {
            console.log("Revisar otros signos vitales");
            break;
        }

    default:
        console.log("Signo vital no controlado");
        break;
}