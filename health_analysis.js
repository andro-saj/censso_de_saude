    
    
    const addPatientButton = document.getElementById("addPatient");
    const report = document.getElementById("report");
    const btnSearch = document.getElementById('btnSearch');
    const patients = [];

/**
 addPatientButton: O botão usado para adicionar dados de pacientes
report: O elemento HTML onde você verá os relatórios de análise exibidos
btnSearch: O nome da variável do botão que exibe os resultados da pesquisa quando clicado
Um array vazio chamado patients também é criado para armazenar os dados dos pacientes coletados.
 */

/**
 * Inclua o código fornecido abaixo, que contém a função addPatient(). Esta função captura os dados inseridos pelo usuário nos elementos do formulário HTML: nome, gênero, idade e condição médica. Ela garante que todos os campos tenham entradas válidas.
 */


function addPatient() {
    const name = document.getElementById("name").value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const conditionSelect = document.getElementById("condition");
  
    if (!name || !genderInput || !age || !conditionSelect.value) return;
  
    // Normaliza os valores
    const gender = genderInput.value; // deve ser "Male" ou "Female"
    const condition = conditionSelect.value; // deve ser "Diabetes", "Thyroid" ou "High Blood Pressure"
  
    patients.push({ name, gender, age, condition });
    resetForm();
    generateReport();
  }
  

/*function addPatient() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if (name && gender && age && condition) {
      patients.push({ name, gender: gender.value, age, condition });
      resetForm();
      generateReport();
    }
  }*/


/**
 * Esta função recupera os detalhes do paciente no formulário, como nome, gênero, idade e condição. Por exemplo, a variável name é definida por
const name = document.getElementById("name").value;

Além disso, ela:

adiciona os detalhes do paciente ao array patients[], que armazena todos os dados dos pacientes inseridos, usando o método push()
redefine os campos do formulário usando o método resetForm() para limpar os campos de entrada para a próxima entrada
aciona o método generateReport() para atualizar e exibir o relatório de análise com base nos dados do paciente recém-adicionado
 */


function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
  }

  /**
   *
   * Crie uma função chamada resetForm(). Essa função limpa os valores dos campos de nome, gênero, idade e condição no formulário HTML, definindo-os como strings vazias ou desmarcando os botões de opção, efetivamente redefinindo o formulário para seu estado inicial. Assim, ele está pronto para a entrada de novos dados.

Inclua este código após a função addPatient().
   *  */
/**O código acima atribui um valor vazio a todos os campos para limpar os detalhes previamente inseridos. */



/**Crie uma função chamada generateReport() para gerar relatórios. Inclua o código após a função de formulário resetForm(). */

function generateReport() {
    const numPatients = patients.length;
    const conditionsCount = {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    };
    const genderConditionsCount = {
      Male: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
      Female: {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
      },
    };

    // Atualiza os contadores
    for (const patient of patients) {
        if (!genderConditionsCount[patient.gender]) {
          console.warn(`Gênero inválido: ${patient.gender}`);
          continue;
        }
        if (!genderConditionsCount[patient.gender][patient.condition]) {
          console.warn(`Condição inválida: ${patient.condition}`);
          continue;
        }
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
    }

    // Atualiza o HTML
    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
        report.innerHTML += `${gender}:<br>`;
        for (const condition in genderConditionsCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }
}




/**
 * 
 * Esta função generateReport() calcula e constrói um relatório de análise com base nos dados coletados dos pacientes armazenados no array patients[]. Aqui está uma explicação:

Inicialização:
numPatients Representa o número total de pacientes armazenados no array patients[]
conditionsCount Uma estrutura de dados (objeto) que inicializa contadores para condições médicas específicas (Diabetes, Tireóide, Pressão Alta), inicialmente configurados como zero.
genderConditionsCount Um objeto aninhado com contadores de condições específicas de gênero (masculino e feminino) para cada condição médica, também inicializados como zero para cada condição.
Loop de processamento de dados:
Itera através do array patients[]: Utiliza um loop for…of para iterar pelos dados de cada paciente dentro do array patients[]
Incrementar contagens de condições: Incrementa a contagem para cada condição médica específica do paciente no objeto conditionsCount.
Atualizando contagens de condições baseadas em gênero: Aumenta a contagem de cada condição médica na respectiva categoria de gênero no objeto genderConditionsCount com base no gênero e condição do paciente.
Atualização HTML:
Atualizar elemento de relatório: Atualiza dinamicamente o conteúdo HTML dentro do elemento report designado.
Exibição total de pacientes: Exibe o número total de pacientes.
Detalhamento das condições: Lista as contagens para cada condição médica no objeto conditionsCount.
Exibição de condições por gênero: Ilustra as contagens de cada condição categorizadas por gênero no objeto genderConditionsCount, mostrando a distribuição das condições entre homens e mulheres separadamente.
Listener de Evento
Agora, você precisa configurar o listener de evento usando addPatientButton.addEventListener("click", addPatient) para adicionar os detalhes do paciente quando o usuário clicar no botão Adicionar Paciente.
Vá para o seu navegador onde seu código está sendo executado, insira os detalhes e clique no botão Adicionar Paciente. Isso deve gerar dados, conforme mostrado na captura de tela abaixo.


 */

/**Esta função JavaScript searchCondition() foi projetada para funcionar dentro de uma página web para recuperar informações sobre condições de saúde com base na entrada do usuário. Inclua o código abaixo após a função resetForm() da tarefa anterior em seu arquivo JavaScript. */

function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('health_analysis.json')
      .then(response => response.json())
      .then(data => {
        const condition = data.conditions.find(item => item.name.toLowerCase() === input);

        if (condition) {
          const symptoms = condition.symptoms.join(', ');
          const prevention = condition.prevention.join(', ');
          const treatment = condition.treatment;

          resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
          resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
          resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
          resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
        } else {
          resultDiv.innerHTML = 'Condition not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }

    addPatientButton.addEventListener("click", addPatient);
    btnSearch.addEventListener('click', searchCondition);

/**
 * 
 * Esta função busca os dados da condição de saúde do arquivo health.json e procura por uma condição correspondente com base na entrada do usuário. Em seguida, exibe os detalhes da condição ou uma mensagem de erro em um elemento HTML designado (resultDiv).

O código acima inclui:

const input = document.getElementById('conditionInput').value.toLowerCase(); Isso recupera o valor inserido no campo de entrada com o ID conditionInput. Converte o texto inserido para minúsculas para garantir uma comparação que não diferencia maiúsculas de minúsculas.

const resultDiv = document.getElementById('result'); resultDiv.innerHTML = ''; Isso recupera o elemento HTML com o ID ‘result’. Limpa qualquer conteúdo anterior dentro deste elemento HTML.

fetch('health.json') Este método da API inicia uma solicitação de busca para o arquivo chamado ‘health.json’. Assume-se que um arquivo JSON chamado ‘health.json’ está no mesmo diretório que o arquivo HTML.

.then(response => response.json()) Converte a resposta obtida em formato JSON.

.then(data => { * ...  }) Isso lida com os dados JSON recuperados. Procura por uma condição de saúde que corresponda à entrada do usuário.

const condition = data.conditions.find(item => item.name.toLowerCase() === input); Isso busca dentro dos dados JSON por uma condição de saúde cujo nome corresponda à entrada inserida.

if (condition) { * ... * } else { * ... * } Este código verifica se há uma condição correspondente. Se encontrada, constrói o conteúdo HTML para exibir detalhes sobre a condição (nome, sintomas, prevenção, tratamento) dentro do resultDiv. Se o sistema não conseguir encontrar uma condição correspondente, exibe uma mensagem ‘Condição não encontrada’ dentro do resultDiv.

.catch(error => { * ... * }) Isso lida com quaisquer erros que possam ocorrer durante a solicitação de busca ou o processamento de dados. Se um erro ocorrer, ele é registrado no console e uma mensagem de erro é exibida dentro do resultDiv.

Suponha que você tenha digitado Tireoide na barra de pesquisa. Após clicar no botão de pesquisa, ele exibirá as informações fornecidas de health_analysis.json.
 */


