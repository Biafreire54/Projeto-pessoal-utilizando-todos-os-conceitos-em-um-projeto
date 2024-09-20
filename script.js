class Sale {
    constructor(name, name1, clothing, valor, qntd) {
      this.name = name;
      this.name1 = name1;
      this.clothing = clothing;
      this.valor = valor;
      this.qntd = qntd;
    }
  
    renderListItem() {
      const list = document.getElementById('list');
      const playerItem = document.createElement('li');
  
      playerItem.id = `player-${this.qntd}`;
      playerItem.innerHTML = `Vendedora: ${this.name} | Nome do Cliente: ${this.name1} | Peça de Roupa: ${this.clothing} | Valor: R$ ${this.valor.toFixed(2)} | Quantidade: ${this.qntd}`;
  
      list.appendChild(playerItem);
    }
  }
  
  function Vender() {
    const name = document.getElementById('name').value;
    const name1 = document.getElementById('name1').value;
    const clothing = document.getElementById('Clothing').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const qntd = parseInt(document.getElementById('quantidade').value);
  
    const confirmation = confirm(`
      Vendedora ${name},
      Realizar Venda com o Cliente ${name1},
      com a Peça de Roupa ${clothing},
      com o Valor R$ ${valor.toFixed(2)},
      com a Quantidade ${qntd}?`
    );
  
    if (confirmation) {
      const sale = new Sale(name, name1, clothing, valor, qntd);
      sale.renderListItem();
  
      // Clear input fields after successful sale (optional)
      document.getElementById('name').value = '';
      document.getElementById('name1').value = '';
      document.getElementById('Clothing').value = '';
      document.getElementById('valor').value = '';
      document.getElementById('quantidade').value = '';
    }
  }