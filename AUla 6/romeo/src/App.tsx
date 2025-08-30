import { useEffect, useState } from 'react';
import './App.css'
import Produto from './interfaces/product';

function App() {

  const [produtos, set_produtos] = useState<Produto[]>([{ id: new Date(), nome: "produto a", preco: 89.99, quantidade_de_dias: 30 }, { id: new Date(), nome: "produto b", preco: 19.99, quantidade_de_dias: 30 }, { id: new Date(), nome: "produto c", preco: 249.99, quantidade_de_dias: 10 }, { id: new Date(), nome: "produto b", preco: 29.99, quantidade_de_dias: 30 }]);
  const [somente_promo, set_somente_promo] = useState<boolean>(false);
  const ordenar_produtos = (): Produto[] => produtos.sort((a: Produto, b: Produto) => a.preco - b.preco);
  const produtos_com_promo: Produto[] = produtos.filter(p => p.quantidade_de_dias >= 30);

  function produtos_atualizados(): void {

    const novos_produtos = produtos.map(p => {

      if (p.quantidade_de_dias >= 30) {

        const preco_atualizado = (p.preco * 30) / 100;
        return { ...p, preco: preco_atualizado };

      } else {

        return p;
      };
    });

    set_produtos(novos_produtos);
  };

  useEffect(() => {

    ordenar_produtos();

  }, [produtos]);

  useEffect(() => {

    produtos_atualizados();
  }, []);

  return (
    <>
      <div className='container_tabela'>

        {!somente_promo ? ordenar_produtos().map((_, i) => (

          <tr className='info_produtos' key={i}>
            <td>
              <li>Nome: {_.nome}</li>
              <li>Preço: R${_.preco.toFixed(2)}</li>
              <li>Quantidade de Dias: {_.quantidade_de_dias}</li>
            </td>
          </tr>
        )) : produtos_com_promo.map((_, i) => (

          <tr key={i}>
            <td>
              <li>Nome: {_.nome}</li>
              <li>Preço: R${_.preco.toFixed(2)}</li>
              <li>Quantidade de Dias: {_.quantidade_de_dias}</li>
            </td>
          </tr>
        ))}

        <button onClick={() => set_somente_promo(!somente_promo)}>{somente_promo ? `Ocultar Produtos com Promo` : `Exibir Produtos com Promo`}</button>
      </div>
    </>
  )
}

export default App
