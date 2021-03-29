function validar(e) {
    if (e.key == 0 || e.key == 1 || e.key == "Backspace") return true;
    else return false;
}

var app = new Vue({
    el: '#app',
    data: {
        binario: null,
        invalido: false
    },
    computed: {
        converter: function () {
            if (this.binario == null) return null;
            let lista = this.binario.split("");
            lista.reverse();

            let expoente = 0;
            let resultado = 0;
            for (expoente; expoente < lista.length; expoente++) {
                resultado += lista[expoente] * Math.pow(2, expoente);
            }
            return resultado;
        },
    }
})
