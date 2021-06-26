
import { useHistory } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import { Button } from '../components/Button';



import "../styles/auth.scss";

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function Home(){
  const history = useHistory();
  const {user, signInWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom(){
    if(!user){
      await signInWithGoogle()
    }

    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent){
    event.preventDefault();

    if(roomCode.trim() === ''){
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if(!roomRef.exists()) {
      alert('Romm does not exist');
      return;
    }

    history.push(`/rooms/${roomCode}`);

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
          <button onClick={ handleCreateRoom } className="create-room">
            <img src={googleIcon} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">
              Entre na sua sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )

}