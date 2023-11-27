let nome, departamento, foto

const button = document.getElementById('enviar');
const loadingButton = () => {

    button.innerHTML = '<img src="./img/Loading.png" class="loading"></img>';
}
const loadingButtonRemove = () => {
    button.innerHTML = 'Cadastrar';
}

const importarForm = (event) => {
    console.log("oi")
    event.preventDefault();
    loadingButton();

    // alert("Voce está aqui");
    nome = document.getElementById('nome').value
    departamento = document.getElementById('departamento').value
    foto = document.getElementById('foto').files[0];


    localStorage.setItem(nome, departamento, URL.createObjectURL(foto))
    
    CreatPrint(nome, departamento, URL.createObjectURL(foto))
    loadingButtonRemove();



}




function CreatPrint(nome, departamento, foto) {
    console.log(foto)
    let cracha = document.createElement("div")
    cracha.className = "Cracha"

    let crachaBase = document.createElement("div")
    crachaBase.className = "crachaPreview"

    let image = document.createElement("img")
    image.id = "imagemPreview"
    image.src = "./img/frente.png";

    let divNome = document.createElement("div")
    divNome.className = "crachanome"

    let nomeCracha = document.createElement("p")
    nomeCracha.className = "crachanome"
    nomeCracha.id = "crachanome"
    nomeCracha.textContent = nome;

    let divSetor = document.createElement("div")
    divSetor.className = "crachasetor"

    let setorCracha = document.createElement("p")
    setorCracha.className = "crachasetor"
    setorCracha.id = "crachasetor"
    setorCracha.textContent = departamento;

    let user = document.createElement("div")
    user.className = "crachauser"

    let imageUser = document.createElement("img")
    imageUser.className = "crachauser"
    imageUser.id = "crachauser"
    imageUser.src = foto;

    cracha.appendChild(crachaBase);

    crachaBase.appendChild(image);
    crachaBase.appendChild(divNome);
    divNome.appendChild(nomeCracha);
    crachaBase.appendChild(divSetor);
    divSetor.appendChild(setorCracha);
    crachaBase.appendChild(user);
    user.appendChild(imageUser);

    let bodycad = document.getElementById("Organizer");
    bodycad.appendChild(cracha)

}

document.getElementById('enviar').addEventListener('click', importarForm);


const apagaUltimo = (event) => {
    event.preventDefault();
    loadingButton();
    let contador
    contador = document.querySelectorAll('.Cracha')


    let final = contador.length - 1


    contador[final].parentNode.removeChild(contador[final])
    loadingButtonRemove();
}


document.getElementById('delete').addEventListener('click', apagaUltimo);

const imprimeLista = (event) => {
    event.preventDefault();
    loadingButton();
    console.log("imprimir")



    loadingButtonRemove();
}

document.getElementById('printAll').addEventListener('click', imprimeLista);

