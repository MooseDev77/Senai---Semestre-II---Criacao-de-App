import React, {userState} from 'react';
import './App.css';

import AdicionarProd from '../componentes/AdicionarProd';
import ListarProd from '../componentes/ListarProd';

function App() {
    const [produtos, setProdutos] = userState(['Maçã', 'Banana', 'Laranja']);

    const adicionarProduto = (nome) => {
        const produto = nome.tria();
        if (produtos.includes(produto)) {
            alert('produto já existe na lista');
            return;
}


    setProdutos([...produtos, produto]);
};

return (
    <div className="App">
        <h1>Produtos</h1>
        <AdicionarProd onAdicionar={adicionarProduto} />
        <hr />
        <h2>Lista de produtos</h2>
        <ListarProd itens={produtos} />
    </div>
);
}
export default App;
