/* === PEGANDO AS COISAS DO HTLM === */
const Tarefa = document.getElementById("Nova_Tarefa");
const btAdd = document.getElementById("bt_add");
const Lista = document.querySelector(".Base_Lista");
const Total = document.getElementById("Total_Tarefas");
/*====================================================*/


/* === ADICIONAR A TAREFA NA LISTA === */
const adicionarTarefa = () => {
    const texto = Tarefa.value.trim();
    if (texto === "") {
        return;
    }
    
    const NovaTarefa = document.createElement("div");
    NovaTarefa.classList.add("Tarefas");

    const NomeTarefa = document.createElement("div");
    NomeTarefa.classList.add("Nome_Tarefa");

/* -=- MARCAR TAREFA COMO COMPLETADA -=- */
/**/    const Checkbox = document.createElement("input");
/**/    Checkbox.type = "checkbox";
/**/
/**/    Checkbox.addEventListener("change", () => {
/**/        if (Checkbox.checked) {
/**/            NovaTarefa.classList.add("Concluida");
/**/        } else {
/**/            NovaTarefa.classList.remove("Concluida");
/**/        }
/**/    });
/*------------------------------------------------------------*/

    const Nome = document.createElement("h2");
    Nome.textContent = texto;

    const Botoes = document.createElement("div");
    Botoes.classList.add("img_Tarefas");

/* -=- AQUI VAI SER O BOTÃO DE EDITAR -=- */
/**/    const btLapis = document.createElement("button");
/**/    btLapis.innerHTML = `<img src="./imagens/Lapis.png" alt="Editar">`;
/**/    
/**/    btLapis.addEventListener(
/**/        "click", () => {
/**/            const novoNome = prompt("Digite: ", Nome.textContent);
/**/            if (novoNome === null) {
/**/                return;
/**/            }
/**/            if (novoNome.trim() === "") {
/**/                return;
/**/            }
/**/            Nome.textContent = novoNome.trim();
/**/        }
/**/    );
/*------------------------------------------------------------*/

/* -=- BOTÃO DE EXCLUIT -=- */
/**/    const btLixeira = document.createElement("button");
/**/    btLixeira.innerHTML = `<img src="./imagens/Lixeira.png" alt="Excluir">`;
/**/    
/**/    btLixeira.addEventListener("click", () => {
/**/        NovaTarefa.remove();
/**/        atualizarTotal();
/**/    });
/*------------------------------------------------------------*/

/* -=- BOTÃO DE LIMPAR TUDO -=- */
/**/    const btLimpar = document.getElementById("bt_Limpar");
/**/
/**/    btLimpar.addEventListener("click", () => {
/**/    const tarefas = document.querySelectorAll(".Tarefas");
/**/
/**/    tarefas.forEach((tarefa) => {
/**/        tarefa.remove();
/**/    });
/**/
/**/    atualizarTotal();
/**/    });
/*------------------------------------------------------------*/

    NomeTarefa.append(Checkbox, Nome);
    Botoes.append(btLapis, btLixeira);
    NovaTarefa.append(NomeTarefa, Botoes);

    Lista.append(NovaTarefa);
    atualizarTotal();
    Tarefa.value = "";
};
/*====================================================*/


/* === BOTÃO DE ADICIONAR === */
btAdd.addEventListener(
    "click", adicionarTarefa
);
/*====================================================*/


/* === ATUALIZAR TOTAL DE TAREFAS === */
const atualizarTotal = () => {
    const tarefas = document.querySelectorAll(".Tarefas");
    Total.textContent = tarefas.length;
};
/*====================================================*/


/* === GAMBIARA === */
const btLixeiraInicial = document.getElementById("bt_Lixeira_Inicial");

btLixeiraInicial.addEventListener("click", () => {
    btLixeiraInicial.closest(".Tarefas").remove();
    atualizarTotal();
});


const btLapisInicial = document.getElementById("bt_Lapis_Inicial");

btLapisInicial.addEventListener("click", () => {
    const NomeInicial = document.querySelector(
        ".Tarefas .Nome_Tarefa h2"
    );

    const novoNome = prompt(
        "Digite o novo nome da tarefa:",
        NomeInicial.textContent
    );

    if (novoNome === null || novoNome.trim() === "") {
        return;
    }

    NomeInicial.textContent = novoNome.trim();
});


const CheckboxInicial = document.querySelector(
    ".Tarefas .Nome_Tarefa input[type='checkbox']"
);

const NomeInicial = CheckboxInicial
    .closest(".Nome_Tarefa")
    .querySelector("h2");



CheckboxInicial.addEventListener("change", () => {
    const tarefaInicial = CheckboxInicial.closest(".Tarefas");

    if (CheckboxInicial.checked) {
        tarefaInicial.classList.add("Concluida");
    } else {
        tarefaInicial.classList.remove("Concluida");
    }
});

/*====================================================*/