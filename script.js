

document.getElementById('orcamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtém os valores do formulário
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const nome = document.getElementById('nome').value;
    const tipoMarmorizacao = document.getElementById('tipoMarmorizacao').value;
    const fotos = document.getElementById('fotos').files;

    // Calcula a área da parede
    const areaParede = largura * altura;

    // Calcula o valor da marmorização
    let valorMarmorizacao;
    switch (tipoMarmorizacao) {
        case 'Simples':
            valorMarmorizacao = 50; // Valor por metro quadrado
            break;
        case 'Intermediaria':
            valorMarmorizacao = 80; // Valor por metro quadrado
            break;
        case 'Complexa':
            valorMarmorizacao = 120; // Valor por metro quadrado
            break;
    }

    // Calcula os custos
    const custoMateriais = areaParede * valorMarmorizacao;
    const custoMaoDeObra = areaParede * 30; // Exemplo de custo por metro quadrado
    const custoTotal = custoMateriais + custoMaoDeObra;

    // Exibe o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Orçamento Resultante:</h2>
        <p>Nome do cliente: ${nome}</p>
        <p>Tipo de Marmorização: ${tipoMarmorizacao}</p>
        <p>Custo dos Materiais: R$ ${custoMateriais.toFixed(2)}</p>
        <p>Custo da Mão de Obra: R$ ${custoMaoDeObra.toFixed(2)}</p>
        <p>Custo Total: R$ ${custoTotal.toFixed(2)}</p>
    `;

    // Exibir as fotos selecionadas
    const fotosDiv = document.getElementById('fotosDiv');
    fotosDiv.innerHTML = '';
    for (let i = 0; i < fotos.length; i++) {
        const foto = fotos[i];
        const fotoURL = URL.createObjectURL(foto);
        const img = document.createElement('img');
        img.src = fotoURL;
        img.width = 150;
        fotosDiv.appendChild(img);
    }

    // Exibir o botão de enviar
    const botoesEnviar = document.getElementById('botoesEnviar');
    botoesEnviar.style.display = 'block';

    // Scroll até o resultado para que o usuário o veja
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('whatsapp').addEventListener('click', function() {
    const telefone = document.getElementById('telefone').value;
    if (telefone.trim() === '') {
        alert('Por favor, insira um número de telefone para enviar via WhatsApp.');
        return;
    }

    // Aqui você pode usar uma solicitação AJAX para enviar os dados para o WhatsApp
    const areaParede = parseFloat(document.getElementById('largura').value) * parseFloat(document.getElementById('altura').value);
    const tipoMarmorizacao = document.getElementById('tipoMarmorizacao').value;
    const fotos = document.getElementById('fotos').files;

    let message = `Orçamento de Marmorização de Parede\n\n`;
    message += `Área da Parede: ${areaParede.toFixed(2)} metros quadrados\n`;
    message += `Tipo de Marmorização: ${tipoMarmorizacao}\n`;
    message += `Número de Telefone: ${telefone}\n`;

    console.log(message);

   
});

document.getElementById('email').addEventListener('click', function() {
    const telefoneDiv = document.getElementById('telefoneDiv');
    telefoneDiv.style.display = 'none';
    
     // Limpar o número de telefone após enviar
     document.getElementById('telefone').value = '';

});


document.getElementById('email').addEventListener('click', function() {
    // Exibir o campo de e-mail apenas quando a opção de enviar por e-mail for selecionada
    const emailDiv = document.getElementById('emailDiv');
    emailDiv.style.display = 'block';
    
    // Limpar o campo de e-mail após exibir
    document.getElementById('emailInput').value = '';
});
document.getElementById('imprimir').addEventListener('click', function() {
    window.print();
});
