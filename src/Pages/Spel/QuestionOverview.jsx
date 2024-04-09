import { useEffect, useState } from "react"
import { GetQuestion } from "../../BackendConnections/QuestionAPI"

function QuestionOverview() {
    const [file, setFile] = useState(null)
    const [questionList, setQuestionList] = useState([])
    useEffect(() => {
        GetQuestion().then((response) => { setQuestionList(response) })
    })

    const handleUpload = (event) => {
        event.preventDefault()
        if (!file) {
            console.log("No file selected")
            return;
        }
        const fd = new FormData();
        fd.append('file', file)
        console.log(fd)
    }


    return (
        <div className="Page">
            {questionList.map((question) => {
                return (
                    <h1>{question.word}</h1>
                )
            })}
            <form>
                <label>Woord <input /></label>
                <label>Definitie <input /></label>
                <label>Voorbeeldzin <input /></label>
                <input onChange={(e) => setFile(e.target.files[0])} type="file" />
                <input type="submit" onClick={handleUpload} />
            </form>

        </div>

    )
}

export default QuestionOverview