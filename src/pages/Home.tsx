
import { useHistory } from 'react-router-dom';


import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import { Button } from '../components/Button';



import "../styles/auth.scss";

import { useAuth } from '../hooks/useAuth';

export function Home(){
  const history = useHistory();
  const {user, signInWithGoogle } = useAuth()

  

 
  function handleCreateRoom(){
    if(!user){
      signInWithGoogle()
    }

    history.push('/rooms/new')
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
          <form>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
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