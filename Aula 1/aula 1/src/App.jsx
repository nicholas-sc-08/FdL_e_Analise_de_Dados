import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [numero_inserido, set_numero_inserido] = useState(0);

  return (
    <>

    <div>

      <h1>Exercicio</h1>

      <input type="number" value={numero_inserido} onChange={e => set_numeros(e.target.value)}/>

      <button onClick={() => adivinhar_numero()}>Adivinhar</button>

      {numeros.numero_inserido == numeros.numero_sortido ? `Acertou!!` : `Errou...`}

    </div>

    </>
  )
}

export default App
