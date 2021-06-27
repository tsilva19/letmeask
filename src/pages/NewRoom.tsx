import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";


import { Button } from '../components/Button';
import { database } from '../services/firebase';

import "../styles/auth.scss";
import { useAuth } from '../hooks/useAuth';

export function NewRoom(){
  const {user} = useAuth();
  const history = useHistory();

  const [newRoom, setNewRoom] = useState('');
  
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if(newRoom.trim() === ''){
      return;
    }

    const roomRef = database.ref('rooms');
   
    const firebaseRoom = await roomRef.push({
       title: newRoom,
       authotId: user?.id,       
    })

    history.push(`/rooms/${firebaseRoom.key}`)
    console.log(newRoom)
  }

    
  return(
    <div id="page-auth">
      <aside>
       <img src={illustrationImg} alt="ilustração"/>
        <strong>Crie salas ao vivo</strong>
        <p>Tire as duvidas em tempo real </p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo"  />
  
           <h2> Criar uma nova sala </h2>

          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">
              Criar Sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente ? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </div>
  )

}