
import Pig from "./Pig"
import { useState } from 'react'

function PigPen({hogs}){

    const [displayedList, setDisplayedList] = useState(hogs)
    const [isFiltered, setIsFiltered] = useState(false)

    let originalHogs = [...displayedList]

    let newPigList = originalHogs.filter(pig => pig.greased === true)

    let weightSortedList = originalHogs.sort((currentHog, nextHog) => {
        if (currentHog.weight < nextHog.weight) return 1;
      if (currentHog.weight > nextHog.weight) return -1;
      return 0;
     } )

     console.log(weightSortedList)

    function handleFilterClick() {


        setIsFiltered((isFiltered) => !isFiltered)
      

        
        // setDisplayedList(displayedList)
    }

    function pigs () {


        if (isFiltered === true) {
            return newPigList.map(hog => {
                return <Pig name={hog.name} image={hog.image} data={hog} />})
        } else {
            return displayedList.map(hog => {
                return <Pig name={hog.name} image={hog.image} data={hog} />})
            }
        }
        
    

 function handleWeightSorting () {
     setDisplayedList(weightSortedList)
 }

    // console.log(hogs)
    // const pigs = displayedList.map(hog => {
    //    return <Pig name={hog.name} image={hog.image} data={hog} />
    // })
    
    return (

        <div classname="ui grid container">
            <button onClick={handleFilterClick}> Filter for Greased Piggies</button> <br></br>
            <button onClick={handleWeightSorting}> Sort by Weight</button>
            {pigs()}
        </div>

    )
}





export default PigPen