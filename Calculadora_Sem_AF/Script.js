/* === AQUI VAI RECEBER OS NUMEROS === */
let Botao_1 = document.getElementById("bt_1");
let Botao_2 = document.getElementById("bt_2");
let Botao_3 = document.getElementById("bt_3");
let Botao_4 = document.getElementById("bt_4");
let Botao_5 = document.getElementById("bt_5");
let Botao_6 = document.getElementById("bt_6");
let Botao_7 = document.getElementById("bt_7");
let Botao_8 = document.getElementById("bt_8");
let Botao_9 = document.getElementById("bt_9");
let Botao_0 = document.getElementById("bt_0");
let Botao_Virgula = document.getElementById("bt_V");
/*=====================================*/

/* === DEFININDO O VALOR PARA USAR NO ARROW === */
let valor_1 = 1;
let valor_2 = 2;
let valor_3 = 3;
let valor_4 = 4;
let valor_5 = 5;
let valor_6 = 6;
let valor_7 = 7;
let valor_8 = 8;
let valor_9 = 9;
let valor_0 = 0;
/*=========================================*/

/* === AQUI VAI RECEBER OS OPERADORES === */
let Botao_Mais = document.getElementById("bt_Mais");
let Botao_Menos = document.getElementById("bt_Menos");
let Botao_Multiplicar = document.getElementById("bt_Mul");
let Botao_Divisao = document.getElementById("bt_Div");

let RESULTA = document.getElementById("bt_Resultado");
let Tela = document.getElementById("Resultado");
/*=====================================*/



/* AQUI VAI COMEÇAR O ARROW FUNCTIONS */
let a = "";
let b = "";
let operacao = null;
let resultado = null;

function selecionarNumero (numero) {
    if (operacao == null) {
        a = a + numero;
        Tela.textContent = a.replace(".", ",");
    }
    else {
        b = b  + numero;
        Tela.textContent = a.replace(".", ",") + " " + operacao + " " + b.replace(".", ",");

        switch (operacao) {
            case "+":
                resultado = somar(a, b);
                break;

            case "-":
                resultado = diminuir(a, b);
                break;

            case "x":
                resultado = multiplicar(a, b);
                break;

            case "/":
                resultado = dividir(a, b);
                break;
        }
    }
};

function limpar () {
    a = "";
    b = "";
    operacao = null;
};
/* ======================================== */


/* === AQUI VAI PEGAR O VALOR NOS NUMEROS PELO CLIQUE === */
Botao_1.addEventListener(
    "click", function () {
        numero = valor_1;
        selecionarNumero(valor_1);
    }
);

Botao_2.addEventListener(
    "click", function () {
        numero = valor_2;
        selecionarNumero(valor_2);
    }
);

Botao_3.addEventListener(
    "click", function () {
        numero = valor_3;
        selecionarNumero(valor_3);
    }
);

Botao_4.addEventListener(
    "click", function () {
        numero = valor_4;
        selecionarNumero(valor_4);
    }
);

Botao_5.addEventListener(
    "click", function () {
        numero = valor_5;
        selecionarNumero(valor_5);
    }
);

Botao_6.addEventListener(
    "click", function () {
        numero = valor_6;
        selecionarNumero(valor_6);
    }
);

Botao_7.addEventListener(
    "click", function () {
        numero = valor_7;
        selecionarNumero(valor_7);
    }
);

Botao_8.addEventListener(
    "click", function () {
        numero = valor_8;
        selecionarNumero(valor_8);
    }
);

Botao_9.addEventListener(
    "click", function () {
        numero = valor_9;
        selecionarNumero(valor_9);
    }
);

Botao_0.addEventListener(
    "click", function () {
        numero = valor_0;
        selecionarNumero(valor_0);
    }
);

Botao_Virgula .addEventListener(
    "click", function () {
        numero = ".";
        selecionarNumero(".");
    }
);
/*=====================================*/


/* === AQUI VAI PEGAR A OPERAÇÃO PELO CLIQUE === */
Botao_Mais.addEventListener(
    "click", function () {
        operacao = "+";
        Tela.textContent = a + " " + operacao;
    }
);

Botao_Menos.addEventListener(
    "click", function () {
        operacao = "-";
        Tela.textContent = a + " " + operacao;
    }
);

Botao_Multiplicar.addEventListener(
    "click", function () {
        operacao = "x";
        Tela.textContent = a + " " + operacao;
    }
);

Botao_Divisao.addEventListener(
    "click", function () {
        operacao = "/";
        Tela.textContent = a + " " + operacao;
    }
);

RESULTA.addEventListener(
    "click", function () {
        Tela.textContent = resultado;
        limpar();
    }
);
/*=======================================================*/


/* === AQUI VÃO SER FEITA AS OPERAÇÕES MATÉMATICAS === */

function somar(a, b) {
    return Number(a) + Number(b);
}

function diminuir (a, b) {
    return Number(a) - Number(b);
};

function multiplicar (a, b) {
    return Number(a) * Number(b);
};

function dividir (a, b) {
    return Number(a) / Number(b);
};
/*=====================================*/


/* === EXTRA === */
let OP = document.getElementById("bt_OvoPascoa");

OP.addEventListener(
    "click", function () {
        limpar();
        resultado = null;
        Tela.textContent = resultado;
    }
);
/*============================================*/