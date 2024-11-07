document.addEventListener("DOMContentLoaded", function() {

    function montarPedido() {
        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        // Bebida selecionada
        let bebidaSelecionada = document.querySelector('input[name="bebida"]:checked');
        let bebida = bebidaSelecionada ? bebidaSelecionada.value : 'Bebida não selecionada';

        // Obtendo tamanho selecionado 
        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : 'Tamanho não selecionado';

        // Ingredientes Extras:
        let limaoExtraCheckbox = document.querySelector('input[name="extra-limao"]:checked');
        if (limaoExtraCheckbox) {
            custo += 1.00;
            extra += "<br>   - Limão";
        }

        let salExtraCheckbox = document.querySelector('input[name="extra-sal"]:checked');
        if (salExtraCheckbox) {
            custo += 2.00;
            extra += "<br>   - Sal na borda";
        }

        // Opcionais
        let amendoimOpcionalCheckbox = document.querySelector('input[name="opcionais-amendoim"]:checked');
        if (amendoimOpcionalCheckbox) {
            opcionais += "<br>   - Amendoim";
        }

        let batataOpcionalCheckbox = document.querySelector('input[name="opcionais-batata"]:checked');
        if (batataOpcionalCheckbox) {
            opcionais += "<br>   - Batata Frita";
        }

        // Monta todo o pedido numa variável:
        custo = calcularCusto(bebidaSelecionada.value, tamanhoSelecionado.value).toFixed(2);
        descricao += "   - " + bebida + "<br>   - " + tamanho + extra + opcionais;

        // Output dos valores com as classes Total pedido e Descrição Pedido
        let totalPedidoElement = document.getElementById("total-pedido");
        totalPedidoElement.textContent = "R$:" + custo;
        let descricaoPedidoElement = document.getElementById("descricao-pedido");
        descricaoPedidoElement.innerHTML = descricao;
    }

    function calcularCusto(bebida, tamanho) {
        let preco = 0;
        // Define preços base
        if (bebida === "chopp") preco = 10;
        else if (bebida === "cerveja") preco = 8;
        else if (bebida === "vinho") preco = 40;
        else if (bebida === "whisky") preco = 120;
        else if (bebida === "vodka") preco = 50;

        // Ajustes por tamanho (exemplo fictício)
        if (tamanho === "garrafa") preco += 5; // Exemplo de custo adicional
        return preco;
    }

    // Chama a função montarPedido ao clicar:
    const button = document.querySelector("button");
    button.addEventListener('click', montarPedido);
});
