import { useState } from 'react';
import './App.css';

function App() {

  const [marujos_eventos, set_marujos_eventos] = useState({marujos: ``, eventos: ``, viagem: ``});

  function verificar(e){

    e.preventDefault();

    marujos_eventos.marujos >= 10 || marujos_eventos.eventos >= 1 ? set_marujos_eventos({...marujos_eventos, viagem: `SIM`}) : set_marujos_eventos({...marujos_eventos, viagem: `NÃO`});
  };

  return (
    <>
    <form onSubmit={verificar}>

    <h1>Ex 9. Capitão Ganso</h1>

    <label>Marujos</label>
    <input type="text" value={marujos_eventos.marujos} onChange={e => set_marujos_eventos({...marujos_eventos, marujos: e.target.value})}/>

    <label>Eventos</label>
    <input type="text" value={marujos_eventos.eventos} onChange={e => set_marujos_eventos({...marujos_eventos, eventos: e.target.value})}/>

    <label>Viagens:</label>
    {marujos_eventos.viagem}

    <button type='submit'>Calcular</button>
    
    </form>
    </>
  )
}

export default App
