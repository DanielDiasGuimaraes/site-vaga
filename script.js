function enviarFormulario() {
  const dados = {
    nome: document.getElementById("nome").value,
    data_nascimento: document.getElementById("data_nascimento").value,
    telefone: document.getElementById("telefone").value,
    email: document.getElementById("email").value,
    cpf: document.getElementById("cpf").value,
    curriculo: document.getElementById("curriculo").value
  };

  fetch("https://vagas-80nu.onrender.com/enviar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  })
  .then(res => res.json())
  .then(res => {
    document.getElementById("mensagem").innerText = "Enviado com sucesso!";
    document.getElementById("mensagem").style.color = "green";
  })
  .catch(err => {
    document.getElementById("mensagem").innerText = "Erro ao enviar!";
    document.getElementById("mensagem").style.color = "red";
  });
}
