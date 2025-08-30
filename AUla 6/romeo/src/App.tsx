import { useEffect, useState } from 'react';
import './App.css'
import Produto from './interfaces/product';
import { CButton, CCard, CCol, CRow } from '@coreui/react';

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
      <CCard className='container_tabela'>

        {!somente_promo ? ordenar_produtos().map((_, i) => (

          <CCard className='info_produtos' key={i}>
            <CRow>
              <CCol>Nome: {_.nome}</CCol>
              <CCol>Preço: R${_.preco.toFixed(2)}</CCol>
              <CCol>Quantidade de Dias: {_.quantidade_de_dias}</CCol>
            </CRow>
          </CCard>
        )) : produtos_com_promo.map((_, i) => (

          <CCard key={i}>
            <CRow>
              <CCol>Nome: {_.nome}</CCol>
              <CCol>Preço: R${_.preco.toFixed(2)}</CCol>
              <CCol>Quantidade de Dias: {_.quantidade_de_dias}</CCol>
            </CRow>
          </CCard>
        ))}

        <CButton onClick={() => set_somente_promo(!somente_promo)}>{somente_promo ? `Ocultar Produtos com Promo` : `Exibir Produtos com Promo`}</CButton>
      </div>
    </>
  )
}

export default App
