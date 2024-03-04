import crew from '../Crew.json'
import SpelerListItem from './SpelerListItem'
import '../stylesheets/Spelers.css'

function Spelers () {
  console.log(crew.crew)
  return (
        <div className="spelersPage Page">
        {
            crew.crew.map((c, index) => {
              return (
                <SpelerListItem speler ={c}/>
              )
            })
        }

        </div>

  )
}

export default Spelers
