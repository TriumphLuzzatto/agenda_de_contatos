document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o formulário de recarregar a página

    const name = document.getElementById('name').value.trim(); 
    const phone = document.getElementById('phone').value.trim(); 

    if (name !== "" && phone !== "") {
        const table = document.getElementById('contacts-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const phoneCell = newRow.insertCell(1);

        nameCell.textContent = name; 
        phoneCell.textContent = phone; 

        document.getElementById('contact-form').reset();
    } else {
        alert("Por favor, preencha ambos os campos antes de cadastrar.");
    }
});