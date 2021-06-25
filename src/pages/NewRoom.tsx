import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import { Button } from '../components/Button';

import "../styles/auth.scss";

export function NewRoom(){
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
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
            />
            <Button type="submit">
              Criar Sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente ? <a href="#">Clique aqui</a></p>
        </div>
      </main>
    </div>
  )

}