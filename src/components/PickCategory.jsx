import './pickCategory.css'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import Category from '../img/category.png'
const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  const chooseCategoryandReorderQuestions =(category)=>{
    dispatch({type:"START_GAME",
       payload:category})

       dispatch({type: "REORDER_QUESTIONS"})
  }

  return (
    <div id='category'>
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
        <div>
        {quizState.questions.map((question) =>(
          <button onClick={()=> chooseCategoryandReorderQuestions(question.category)} key={question.category}>{question.category}</button>
        ))}
        </div>
        <img src={Category} alt="Categorias do quiz" />
    </div>
  )
}

export default PickCategory