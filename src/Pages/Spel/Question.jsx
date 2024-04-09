import { useState } from "react"

function Question({ word, nextQuestion }) {
    const [input, setInput] = useState('')
    const [isCorrect, setIsCorrect] = useState(true)
    const [isFinished, setIsFinished] = useState(false)

    const CheckSpelling = (event) => {
        setInput(event.target.value)
        setIsCorrect(word.woord.startsWith(event.target.value))
        setIsFinished()

    }

    const next = (event) => {
        console.log("Correct: ", word.woord === input)

        nextQuestion()
        event.target.value = ''

    }


    return (
        <div>
            <form >
                <input className={isCorrect ? '' : 'wrongAnswer'} type='text' name='input' value={input} onChange={CheckSpelling} />
                <button onClick={next}>NEXT</button>
            </form>
        </div>

    )
}

export default Question