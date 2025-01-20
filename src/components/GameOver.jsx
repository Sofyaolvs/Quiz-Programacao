import { QuizContext } from '../context/quiz'
import { useContext } from 'react'
import WellDone from '../img/welldone.svg'
import './gameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id='gameover'>
        <h2>Fim de jogo¹</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Vcoê acertou {quizState.score} de {quizState.questions.length} {""} perguntas!</p>
        <img src={WellDone} alt="Fim do quiz" />
        <button onClick={()=> dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver