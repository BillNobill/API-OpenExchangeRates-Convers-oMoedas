let apiKey = "12fe4387b5364aeaa6a06c9c2818f0fc";
let urlOpenexchangerates = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

function chamarServicoOpenexchangerates() {
  const valor = document.getElementById("valor").value;
  const moedaOrigem = document.getElementById("moedaOrigem").value;
  const moedaFinal = document.getElementById("moedaFinal").value;

  fetch(urlOpenexchangerates)
    .then((response) => response.json())
    .then((data) => {
      const taxaOrigem = data.rates[moedaOrigem];
      const taxaFinal = data.rates[moedaFinal];

      if (taxaOrigem && taxaFinal) {
        const valorConversao = (valor / taxaOrigem) * taxaFinal;
        document.getElementById(
          "resultado"
        ).innerText = `O valor convertido é: ${valorConversao.toFixed(
          2
        )} ${moedaFinal}`;
      } else {
        document.getElementById("resultado").innerText =
          "Moeda de origem ou final inválida.";
      }
    })
    .catch((error) =>
      console.error(urlOpenexchangerates + " O erro foi: " + error)
    );
}
