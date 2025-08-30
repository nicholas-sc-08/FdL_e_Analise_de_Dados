import { useEffect, useState } from 'react';
import './App.css'
import Produto from './interfaces/product';

function App() {

  const [produtos, set_produtos] = useState<Produto[]>([{ id: new Date(), nome: "produto a", preco: 89.99, quantidade_de_dias: 30 }, { id: new Date(), nome: "produto b", preco: 19.99, quantidade_de_dias: 30 }, { id: new Date(), nome: "produto c", preco: 249.99, quantidade_de_dias: 10 }, { id: new Date(), nome: "produto b", preco: 29.99, quantidade_de_dias: 30 }]);
  const [somente_promo, set_somente_promo] = useState<boolean>(false);
  const ordenar_produtos = () => produtos.sort((a: Produto, b: Produto) => a.preco - b.preco);
  const produtos_com_promo: Produto[] = produtos.filter(p => p.quantidade_de_dias >= 30);

  function produtos_atualizados() {

    const desconto: number = 30;

  };

  useEffect(() => {

    ordenar_produtos();
    console.log(produtos);
  }, [produtos]);

  useEffect(() => {

    produtos_atualizados();
  }, []);

  return (
    <>
      <div>
        {!somente_promo ? ordenar_produtos().map((_, i) => (

          <div className='info_produtos' key={i}>
            <span>==============================</span>
            <ul>
              <li>Nome: {_.nome}</li>
              <li>Preço: R${_.preco.toFixed(2)}</li>
              <li>Quantidade de Dias: {_.quantidade_de_dias}</li>
            </ul>
            <span>==============================</span>
          </div>
        )) : produtos_com_promo.map((_, i) => (

          <div key={i}>
            <span>==============================</span>
            <ul>
              <li>Nome: {_.nome}</li>
              <li>Preço: R${_.preco.toFixed(2)}</li>
              <li>Quantidade de Dias: {_.quantidade_de_dias}</li>
            </ul>
            <span>==============================</span>
          </div>
        ))}

        <button onClick={() => set_somente_promo(!somente_promo)}>{somente_promo ? `Ocultar Promo` : `Exibir Promo`}</button>
      </div>
    </>
  )
}

export default App
