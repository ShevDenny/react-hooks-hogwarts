
import Pig from "./Pig"
import { useState } from 'react'

function PigPen({hogs}){

    const [displayedList, setDisplayedList] = useState(hogs)
    const [isFiltered, setIsFiltered] = useState(false)
    const [weightFilter, setWeightFilter] = useState(false)

    let originalHogs = [...displayedList]

    
    let newPigList = originalHogs.filter(pig => pig.greased === true)

    let copyOfNewPigList = [...newPigList]

    let doubleFilterList = copyOfNewPigList.sort((currentHog, nextHog) => {
        if (currentHog.weight < nextHog.weight) return 1;
      if (currentHog.weight > nextHog.weight) return -1;
      return 0;
     } )

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

    function handleWeightFilter(){
        setWeightFilter(!weightFilter)
    }

    function pigs () {

        //if grease filter is on AND weight is off
        if (isFiltered === true && weightFilter === false) {
            return newPigList.map(hog => {
                return <Pig name={hog.name} image={hog.image} data={hog} />})
            
        } 
        //if grease filter is off AND weight filter is on
        else if(isFiltered === false && weightFilter === true){
            return weightSortedList.map(hog => {
                return <Pig name={hog.name} image={hog.image} data={hog} />})
        } 
        //if BOTH filters are on
        else if(isFiltered === true && weightFilter === true) {
            return doubleFilterList.map(hog => {
                return <Pig name={hog.name} image={hog.image} data={hog} />})
        }
        //if no filters are on
         else {
            return displayedList.map(hog => {
                return <Pig name={hog.name} image={hog.image} data={hog} />})
            }
    }
        
    

//  function handleWeightSorting () {
//      setDisplayedList(weightSortedList)
//  }

    // console.log(hogs)
    // const pigs = displayedList.map(hog => {
    //    return <Pig name={hog.name} image={hog.image} data={hog} />
    // })
    
    return (

        <div classname="ui grid container">
            <button className="ui button" onClick={handleFilterClick}>{isFiltered ? "Back to normal" : "Filter for Greased Piggies"} </button> <br></br>
            <button className="ui button" onClick={handleWeightFilter}> Sort by Weight</button>
            {pigs()}
        </div>

    )
}





export default PigPen