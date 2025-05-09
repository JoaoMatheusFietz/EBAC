$(document).ready(function () {
  // Aplicar máscaras
  $('#telefone').mask('(00) 00000-0000');
  $('#cpf').mask('000.000.000-00');
  $('#cep').mask('00000-000');

  // Validação do formulário
  $('#form').validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      telefone: { required: true },
      cpf: { required: true },
      endereco: { required: true },
      cep: { required: true }
    },
    messages: {
      nome: "Por favor, preencha seu nome completo",
      email: {
        required: "Informe um e-mail",
        email: "Digite um e-mail válido"
      },
      telefone: "Informe um número de telefone",
      cpf: "Informe um CPF válido",
      endereco: "Informe seu endereço completo",
      cep: "Informe um CEP válido"
    }
  });

  // Interceptar envio do formulário
  $('#form').on('submit', function (e) {
    if (!$(this).valid()) {
      e.preventDefault();
      alert('Por favor, preencha todos os campos corretamente antes de enviar.');
    }
  });
});
