// FORMULARIO PRINCIPAL CALCULO
function Calcular() {
    // RECIBIR LOS VALORES A VARIABLES
    let an1 = $("#txtAn1").val();
    let la1 = $("#txtLa1").val();
    let an2 = $("#txtAn2").val();
    let la2 = $("#txtLa2").val();
    let an3 = $("#txtAn3").val();
    let la3 = $("#txtLa3").val();

    // CONDICIONES DE VALORES Y RESULTADOS

    if (an1 != "" && la1 != "") {
        let rpta1 = MathMultiplicar(an1, la1);
        $("#inp1").val(rpta1);
    }
    else { $("#inp1").val("") }

    if (an2 == "" && la2 == "") {
        $("#inp2").val("");
    } else if (an2 != "" && la2 != "") {
        let rpta2 = MathMultiplicar(an2, la2);
        $("#inp2").val(rpta2);
    } else { $("#inp2").val(""); }

    if (an3 == "" && la3 == "") {
        $("#inp3").val("");
    } else if (an3 != "" && la3 != "") {
        let rpta3 = MathMultiplicar(an3, la3);
        $("#inp3").val(rpta3);
    } else { $("#inp3").val(""); }

    CalcularTipo();
}
// CALCULAR TIPO FORM1
function CalcularTipo() {
    // RECIBIR LOS VALORES A VARIABLES
    let supCubierta = Number($("#inp2").val());
    let supSemiCubierta = Number($("#inp3").val());

    // CONDICIONES DE VALORES Y MOSTRAR
    if (supCubierta == "" && supSemiCubierta == "") {
        $("#inp4").val("");
        $("#txtTipo").val("");
    } else if (supCubierta != "" || supSemiCubierta != "") {
        let resultado = Number(supCubierta + supSemiCubierta);
        $("#inp4").val(resultado);
        if (resultado == "") {
            $("#txtTipo").val("");
        } else if (resultado <= 60) {
            $("#txtTipo").val("MINIMO");
        } else if (resultado <= 130 && resultado > 60) {
            $("#txtTipo").val("MEDIO");
        } else if (resultado <= 200 && resultado > 130) {
            $("#txtTipo").val("ELEVADO");
        } else if (resultado > 200) {
            $("#txtTipo").val("SUPERIOR");
        } else { $("#txtTipo").val(""); }

    } else { $("#inp4").val(""); }
}
//CALCULAR MULTIPLICACION
function MathMultiplicar(a, b) {

    return a * b;
}

