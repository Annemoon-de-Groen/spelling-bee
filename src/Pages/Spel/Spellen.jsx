import { useContext, useEffect, useState } from 'react'
import audio from '../../data/audio'
import Question from './Question'
import '../../stylesheets/Spel.css'
import { AdminContext } from '../../App'
import QuestionOverview from './QuestionOverview'

function Spellen() {
  const [currentAudio, setCurrentAudio] = useState(null)
  const [randomOrder, setRandomOrder] = useState([])
  const [index, setIndex] = useState(0)
  const { isAdmin } = useContext(AdminContext)

  useEffect(() => {
    const random = Shuffle()
    setRandomOrder(random)
    setCurrentAudio(audio[random[0]])
    setIndex(0)
    console.log(random)
  }, [])

  const changeAudio = () => {
    setCurrentAudio(randomOrder[index])
    console.log("Change audio, ", index)
    setIndex(index + 1)
    //    const trackNumber = Math.floor(Math.random() * (audio.length))
    //  setCurrentAudio(audio[trackNumber])
  }

  if (isAdmin) {
    console.log("Random order:", randomOrder)
    return (<QuestionOverview></QuestionOverview>)
  }

  if (!currentAudio) {
    return (
      <div className="spellenPage Page">
        <h1>Play game</h1>
        <button onClick={() => changeAudio()}>Start</button>
      </div>
    )
  }
  console.log("Current audio", currentAudio)
  return (
    <div className="spellenPage Page">
      <h1 onClick={() => changeAudio()}>Next</h1>
      <Question word={currentAudio} nextQuestion={changeAudio} />
      <p>{currentAudio.woord}</p>
      <audio src={currentAudio.audio} controls></audio>
    </div>
  )
}

export default Spellen

function Shuffle() {
  let array = [...audio]
  let currentIndex = audio.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  return array
}
