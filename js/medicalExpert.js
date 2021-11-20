function medicalExpert() {
    //Toma de signos : 1.Frecuencia cardiaca 2.Temperatura 3.Tension arterial  4.Saturacion de oxigeno 5. Frecuencia respiratoria
    //variables de control
    var signo;
    var Digisigno;
    var Digimejoria;
    var frecuenciaCardiaca;
    var tensionArterial;
    var saturacionOxigeno;
    var frecuenciaRespiratoria;
    var electrocardiograma;
    var tratamientoFrecuencia;
    var temperatura;



    Digisigno = prompt("¿ Que signo vital va a tomar primero \n 1.Frecuencia cardiaca \n 2.Temperatura \n 3.Tension arterial \n 4.Saturacion de oxigeno \n 5. Frecuencia respiratoria ?");
    signo = parseInt(Digisigno);

    // let variable = console.readline(); <- Input por teclado
    //Logica mediante un input field para que el usuario escoja y asignar valor numero a signo, esta inicializado en 1 por defecto, o por botones, como se prefiera
    switch (signo) {
        case 1:
            frecuenciaCardiaca = prompt("¿Es normal la frecuencia cardiaca? \n Digite NORMAL si la frecuencia cardiaca es normal de lo contrario digite NO ");
            //logica para asignar valor normal u otra cosa segun la respuesta con botones
            if (frecuenciaCardiaca != "normal") {
                alert("Posible enfermedad cardiaca");
                alert("Proceda a tomar electrocardiograma para confirmar taquicardia | Bradicardia");



                //aqui input de normal o anormal para cardiograma electrocardiograma = normal
                if (electrocardiograma == "normal") {
                    alert("Monitorizacion de signos vitales");
                    break;
                } else {
                    alert("Realizar tratamiento para estabilizar la frecuencia");
                    //Logica para ver si funciona, 2 botones que asignen a tratamiento frecuencia = funciona o cualquier otro valor
                    frecuenciaCardiaca = prompt("¿El tratamiento funciona? \n Digite FUNCIONA si el tratamiento funciona de lo contrario digite NO ");
                    if (tratamientoFrecuencia != "funciona") {
                        alert("Realizar Ecocardiografia y Pruebas de esfuerzo para descartar pericarditis o daño al miocardio");
                        alert("Despues, realizar tratamiento para estabilizar frecuencia cardiaca");

                        Digimejoria = prompt("¿ Mejoró el paciente ? \n Digite SI si el paciente mejoró, de lo contrario digite NO ");
                        //Aqui set valor de si o no expresado como true or false
                        if (Digimejoria == "si") {
                            mejoria = true
                        }
                        else {
                            mejoria = false
                        }

                        if (mejoria != true) {
                            alert("Realizar angiografia coronaria para descartar aneurisma o placa aterosclerotica");
                            alert("Realizar nuevo tratamiento para estabilizar frecuencia cardiaca")
                            Digimejoria = prompt("¿ Mejoró el paciente ? \n Digite SI si el paciente mejoró, de lo contrario digite NO ");
                            //Aqui set valor de si o no expresado como true or false
                            if (Digimejoria == "si") {
                                mejoria = true
                            }
                            else {
                                mejoria = false
                            }
                            if (mejoria != true) {
                                alert("Monitorizacion de todos los signos vitales debido a posible paro cardiaco, posible ingreso a cirugia")
                                break;
                            }
                        } else {
                            alert("Monitorizacion de signos vitales");
                            break;
                        }

                    } else {
                        alert("Monitorizacion de signos vitales");
                        break;
                    }
                }


            } else {
                alert("Revisar otros signos vitales");
                break;
            }

            break;
        case 2:
            temperatura = prompt("¿Es normal la temperatura? \n Digite NORMAL si la temperatura es normal de lo contrario digite NO ");
            if (temperatura != "normal") {

                alert("Posible enfermedad cardiaca, virus o bacteria.");
                //Logica en botones para cambio de temperatura
                temperatura = prompt("¿ La temperatura es alta o baja ? \n Digite ALTA si la temperatura es altal de lo contrario digite BAJA ");

                if (temperatura == "alta") {
                    alert("Aplicar compresiones frias.");
                } else {
                    alert("Sumministrar manta termica, en caso de mayor gravedad suminisitrar liquidos intravenosos tibios");
                    alert("Monitorizar temperatura");
                    break;

                }

            } else {
                alert("Revisar otros signos vitales");
                break;
            }
            break;

        case 3:
            //logica para asignar valor normal u otra cosa segun la respuesta con boto
            tensionArterial = prompt("¿Es normal la Tension arterial ? \n Digite NORMAL si la tension arterial es normal, de lo contrario digite NO ");
            if (tensionArterial != "normal") {
                alert("Posible enfermedad cardiaca");
                tensionArterial = prompt("¿Es alta o baja? \n Digite ALTA si la tension arterial es alta, de lo contrario digite BAJA ");
                if (tensionArterial == "alta") {
                    alert("Suministrar medicamentos para la tension alta y monitorizar la tension");
                    break;
                } else {
                    alert("Suministrar medicamentos para la tension baja y monitorizar la tension");
                    break;
                }

            } else {
                alert("Revisar otros signos vitales");
                break;
            }

        case 4:
            saturacionOxigeno = prompt("¿ Es normal la saturacion de oxigeno ? \n Digite NORMAL si la saturación es normal, de lo contrario digite NO ");

            //Logica mediante botones para asignar valor normal o no a la saturacionOxigeno
            if (saturacionOxigeno != "normal") {
                alert("Posible enfermedad cardiaca");
                //logica mediante botones para cambiar valor de saturacionOxigeno
                saturacionOxigeno = prompt("¿ Es la saturacion de oxigeno baja ? \n Digite BAJA si la saturación es baja, de lo contrario digite NO ");
                if (saturacionOxigeno == "baja") {
                    alert("Realizar oxigenacion y monitorizar la saturacion");
                    break;
                } else {
                    alert("Posible desequilibrio acido-base , realizar tratamiento para ello");
                    break;
                }

            } else {
                alert("Revisar otros signos vitales");
                break;
            }
        case 5:

            frecuenciaRespiratoria = prompt("¿ Es normal la frecuencia respiratoria ? \n Digite NORMAL si la frecuencia respiratoria es normal, de lo contrario digite NO ");

            if (frecuenciaRespiratoria != "normal") {
                alert("Posible enfermedad cardiaca");
                frecuenciaRespiratoria = prompt("¿ Es alta o baja la frecuencia respiratoria ? \n Digite ALTA si la frecuencia respiratoria es alta, de lo contrario digite BAJA ");

                //realizar logica mediante botones para asignar valor a frecuenciaRespiratoria alta o baja
                if (frecuenciaRespiratoria == "alta") {
                    alert("Realizar ventilacion para frecuencia alta y monitorizar la frecuencia cardiaca");
                    break;
                } else {
                    alert("Realizar ventilacion para frecuencia baja y monitorizar la frecuencia cardiaca");
                    break;

                }

            } else {
                alert("Revisar otros signos vitales");
                break;
            }

        default:
            alert("Signo vital no controlado");
            break;
    }
}