

let nome, departamento, foto

const button = document.getElementById('enviar');
const loadingButton = () => {

    button.innerHTML = '<img src="./img/Loading.png" class="loading"></img>';
}
const loadingButtonRemove = () => {
    button.innerHTML = 'Cadastrar';
}


//Parte do codigo voltado a erro no preenchimento dos dados 
//função que testa se os campos foram preenchidos
const validarDados = (event) => {
    event.preventDefault();
    loadingButton();
    //Coletando os dados 
    nome = document.getElementById('nome');
    departamento = document.getElementById('departamento');
    foto = document.getElementById('foto');

    //Validando se todos os dados estão preenchidos
    if (!nome.value || !departamento.value || !foto.files[0]) {
        //Caso não preenchidos chama a função que mostra a mensagem de erro
        createErroMessages()
        //Dispara um evento para fechar a mensagem ao clicar no botão
        document.getElementById('fecharErro').addEventListener('click', removeErro);
    } else {
        //Caso os dados estejam completos e passa os dados do input para apresentação dos crachas
        localStorage.setItem(nome.value, departamento.value, URL.createObjectURL(foto.files[0]))
        CreateCracha(nome.value, departamento.value, URL.createObjectURL(foto.files[0]))
        nome.value = ""
        departamento.value = ""
        foto.value = ""

    }

    loadingButtonRemove();
}
//Função para criar a mensagem direto na tela
function createErroMessages() {

    let contador
    contador = document.querySelectorAll('.errorMensage')

    if (contador.length > 0) {


    } else {
        let erro = document.createElement('div');
        erro.className = 'errorMensage'

        let p = document.createElement("p")
        p.textContent = "OS DADOS NÃO FORAM INSERIDOS CORRETAMENTE, FAVOR VERIFICAR"

        let fechar = document.createElement('button')
        fechar.id = "fecharErro"
        fechar.textContent = "Fechar"

        erro.appendChild(p)
        erro.appendChild(fechar)

        let bodycad = document.querySelector('.overlayErro');
        bodycad.appendChild(erro)
    }

}
//função remover o botão 
const removeErro = (event) => {
    event.preventDefault();
    loadingButton();
    let contador
    contador = document.querySelectorAll('.errorMensage')


    let final = contador.length - 1


    contador[final].parentNode.removeChild(contador[final])
    loadingButtonRemove();

}
//Fim da parte do codigo voltado a erro no preenchimento dos dados 

//Função para criação da Div com os dados informado no input
function CreateCracha(nome, departamento, foto) {
    loadingButton;
    let cracha = document.createElement("div");
    cracha.className = "Cracha";

    let options = document.createElement("div");
    options.className = "optionVision";
    cracha.appendChild(options);

    let btndel = document.createElement("button");
    btndel.type = "button";
    btndel.className = "buttonOption";
    btndel.id = "botaoDel";
    options.appendChild(btndel);

    let delicon = document.createElement("img");
    delicon.id = "delcracha";
    delicon.src = "/img/Delete.svg";
    btndel.appendChild(delicon);

    let crachaBase = document.createElement("div");
    crachaBase.className = "crachaPreview";
    cracha.appendChild(crachaBase);

    let image = document.createElement("img");
    image.id = "imagemPreview";
    image.src = "./img/frente.png";
    crachaBase.appendChild(image);

    let imageVerso = document.createElement("img");
    imageVerso.id = "versoPreview";
    imageVerso.src = "./img/Verso.png";

    let divNome = document.createElement("div");
    divNome.className = "crachanome";
    crachaBase.appendChild(divNome);

    let nomeCracha = document.createElement("p");
    nomeCracha.className = "crachanome";
    nomeCracha.id = "crachanome";
    nomeCracha.textContent = nome;
    divNome.appendChild(nomeCracha);

    let divSetor = document.createElement("div");
    divSetor.className = "crachasetor"
    crachaBase.appendChild(divSetor);

    let setorCracha = document.createElement("p");
    setorCracha.className = "crachasetor"
    setorCracha.id = "crachasetor"
    setorCracha.textContent = departamento;
    divSetor.appendChild(setorCracha);

    let user = document.createElement("div");
    user.className = "crachauser";
    crachaBase.appendChild(user);

    let imageUser = document.createElement("img");
    imageUser.className = "crachauser";
    imageUser.id = "crachauser";
    imageUser.src = foto;
    user.appendChild(imageUser);


    let bodycad = document.getElementById("Organizer");
    bodycad.appendChild(cracha);
    bodycad.appendChild(imageVerso);
    delSelect();

    loadingButtonRemove;

}


const imprimeLista = (event) => {
    event.preventDefault();
    loadingButton();
    console.log("teste")
    window.print()

    loadingButtonRemove();
}

document.querySelector('#printAll').addEventListener('click', imprimeLista);



function delSelect() {

    let botoes = document.querySelectorAll('#botaoDel')
    let contcracha = document.querySelectorAll('.Cracha')
    let contverso = document.querySelectorAll('#versoPreview')



    for (let i = 0; i < botoes.length; i++) {
        botoes[i].addEventListener('click', function () {
            contcracha[i].parentNode.removeChild(contcracha[i])
            contverso[i].parentNode.removeChild(contverso[i])

        })
    }

}

delSelect();


//Evento que dispara a criação dos crachas 
document.getElementById('enviar').addEventListener('click', validarDados);

//Evento que dispara para apagar o ultimo cracha gerado
