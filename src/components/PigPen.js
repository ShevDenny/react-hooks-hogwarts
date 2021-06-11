
import Pig from "./Pig"

function PigPen({hogs}){
    console.log(hogs)
    const pigs = hogs.map(hog => {
       return <Pig name={hog.name} image={hog.image} data={hog} />
    })
    
    return (

        <div classname="ui grid container">
            {pigs}
        </div>

    )
}





export default PigPen