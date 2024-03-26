function Question({ word }) {

    const CheckSpelling = (event) => {
        console.log("Is corrext", word.woord.startsWith(event.target.value))
    }


    return (
        <div>
            <form>
                <input type='text' onChange={CheckSpelling} />

            </form>
        </div>

    )
}

export default Question