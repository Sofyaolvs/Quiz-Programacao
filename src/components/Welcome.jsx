import React from 'react'
import quiz from "../img/quiz.svg"
import './welcome.css'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'


const Welcome = () => {
  // quiz pega os valores  dispatch altera
  const [quizState, dispatch] = useContext(QuizContext)

  
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo!</h2>
        <p>Clique no botão para começar:</p>
        <button onClick={()=> dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={quiz} alt="Início do quiz" />
    </div>
  )
}

export default Welcome