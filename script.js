function fazLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', fazLogin);

function radioRate() {
  const avaliacao = document.querySelector('#conteudo-avaliacao');
  for (let index = 1; index <= 10; index += 1) {
    const node = document.createElement('div');
    const node1 = document.createElement('input');
    const node2 = document.createElement('label');
    const idSet = `radio ${index.toString()}`;
    node1.setAttribute('type', 'radio');
    node1.setAttribute('value', index);
    node1.setAttribute('name', 'rate');
    node1.setAttribute('id', idSet);
    node2.setAttribute('for', idSet);
    avaliacao.appendChild(node);
    node.appendChild(node1);
    node.appendChild(node2);
    node2.innerHTML = index;
  }
}
radioRate();

function enableButton() {
  const agreement = document.querySelector('#agreement').checked;
  const buttonCheck = document.querySelector('#submit-btn');
  if (agreement === true) {
    buttonCheck.removeAttribute('disabled');
  } else {
    buttonCheck.disabled = true;
  }
}

enableButton();

function countCharacters() {
  const textAreaSize = document.querySelector('#textarea');
  const count = document.querySelector('#counter');
  const size = textAreaSize.textLength;
  const reSize = 500 - size;

  count.innerHTML = reSize;
}

countCharacters();

const dadosResumidos = document.getElementById('dados-resumidos');

function criaParagrafoNome(nome, sobrenome) {
  const paragrafoNome = document.createElement('p');
  paragrafoNome.textContent = `Nome: ${nome} ${sobrenome}`;
  dadosResumidos.appendChild(paragrafoNome);
}

function criaParagrafoEmail(email) {
  const paragrafoEmail = document.createElement('p');
  paragrafoEmail.textContent = `Email: ${email}`;
  dadosResumidos.appendChild(paragrafoEmail);
}

function criaParagrafoCasa(house) {
  const paragrafoCasa = document.createElement('p');
  paragrafoCasa.textContent = `Casa: ${house}`;
  dadosResumidos.appendChild(paragrafoCasa);
}

function criaParagrafoFamilia(familia) {
  const paragrafoFamilia = document.createElement('p');
  paragrafoFamilia.textContent = `Família: ${familia}`;
  dadosResumidos.appendChild(paragrafoFamilia);
}

function criaParagrafoMaterias(materias) {
  const paragrafoMaterias = document.createElement('p');
  const materiasSelecionadas = [];
  for (let index = 0; index < materias.length; index += 1) {
    const materiaAtual = materias[index];
    if (materiaAtual.checked) {
      materiasSelecionadas.push(materiaAtual.value);
    }
  }
  const materiasConcatenadas = materiasSelecionadas.join(', ');
  paragrafoMaterias.textContent = `Matérias: ${materiasConcatenadas}`;
  dadosResumidos.appendChild(paragrafoMaterias);
}

function criaParagrafoAvaliacao(avaliacao) {
  const paragrafoAvaliacao = document.createElement('p');
  paragrafoAvaliacao.textContent = `Avaliação: ${avaliacao}`;
  dadosResumidos.appendChild(paragrafoAvaliacao);
}

function criaParagrafoObservacoes(observacoes) {
  const paragrafoObservacoes = document.createElement('p');
  paragrafoObservacoes.textContent = `Observações: ${observacoes}`;
  dadosResumidos.appendChild(paragrafoObservacoes);
}

function mostraDados(event) {
  event.preventDefault();
  const inputName = document.getElementById('input-name');
  const inputLastName = document.getElementById('input-lastname');
  const inputEmail = document.getElementById('input-email');
  const selectCasa = document.getElementById('house');
  const familia = document.querySelector('input[name="family"]:checked');
  const materias = document.getElementsByClassName('subject');
  const avaliacao = document.querySelector('input[name="rate"]:checked');
  const observacoes = document.getElementById('textarea');

  criaParagrafoNome(inputName.value, inputLastName.value);
  criaParagrafoEmail(inputEmail.value);
  criaParagrafoCasa(selectCasa.children[selectCasa.selectedIndex].textContent);
  criaParagrafoFamilia(familia.value);
  criaParagrafoMaterias(materias);
  criaParagrafoAvaliacao(avaliacao.value);
  criaParagrafoObservacoes(observacoes.value);
}

const evaluationForm = document.getElementById('evaluation-form');
evaluationForm.addEventListener('submit', mostraDados);
