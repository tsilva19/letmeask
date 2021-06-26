import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";


import { Button } from '../components/Button';

import "../styles/auth.scss";
import { useAuth } from '../hooks/useAuth';

export function NewRoom(){
  const {user} = useAuth();
  
  
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
           <h1>{user?.name}</h1>
           <h2> Criar uma nova sala </h2>

          <form>
            <input 
              type="text"
              placeholder="Digite o codigo da sala"
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