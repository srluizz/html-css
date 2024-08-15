// Dados de exemplo
const purchases = [
    { item: 'Notebook', price: 1200 },
    { item: 'Smartphone', price: 800 },
    { item: 'Fone de Ouvido', price: 50 }
];

// Função para calcular o total de compras
function calculateTotalPurchases() {
    return purchases.length;
}

// Função para calcular o total gasto
function calculateTotalSpent() {
    return purchases.reduce((total, purchase) => total + purchase.price, 0);
}

// Função para exibir as estatísticas no dashboard
function displayStats() {
    document.getElementById('totalPurchases').textContent = calculateTotalPurchases();
    document.getElementById('totalSpent').textContent = `$${calculateTotalSpent()}`;
}

// Função para exibir a lista de compras no dashboard
function displayPurchaseList() {
    const purchaseList = document.getElementById('purchaseItems');
    purchaseList.innerHTML = '';
    purchases.forEach(purchase => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${purchase.item}</span>: $${purchase.price}`;
        purchaseList.appendChild(li);
    });
}

// Atualizar dashboard
function updateDashboard() {
    displayStats();
    displayPurchaseList();
}

// Chamar a função de atualização ao carregar a página
window.onload = updateDashboard;
