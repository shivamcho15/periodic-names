import { useState, useEffect } from 'react'

import Element from "./components/Element"

import "./App.css"

import elementsJSON from "./elements.json"

function App() {

  
  const [curName,setCurName] = useState("")

  const totalSymbols = []
  elementsJSON.elements.forEach(element => {
    totalSymbols.push(element.symbol.toUpperCase())
  });



  const [symbolList,setSymbols] = useState([])

  const [works,setWorks] = useState(false) 

  function calculateElements(){

    console.log(works)  

    if(curName==""){
      setSymbols([])
    }
    let possibilities=[[[],0]]

    while(possibilities.length>0){
      let curPossibility=possibilities.pop()
      console.log(curPossibility)
      let curIndex = curPossibility[1]
      if(curIndex==curName.length){
        setSymbols(curPossibility[0])
        setWorks(true)
        return
      }
      let curLetter = curName[curIndex].toUpperCase()

      if(totalSymbols.includes(curLetter)){
        possibilities.push([[...curPossibility[0],curLetter],curIndex+1])
      }
      if(curIndex<curName.length-1){
        let possibleString = (curLetter+curName[curIndex+1]).toUpperCase()
        console.log("CUR " + possibleString)
        if(totalSymbols.includes(possibleString)){
          possibilities.push([[...curPossibility[0],possibleString],curIndex+2])
        }
      }

    }

    setWorks(false)

    
  }


  useEffect(calculateElements,[curName])

  return (
    <div>
      <input id="type_input" placeholder="Type something..." onChange={(e)=>setCurName(e.target.value)}></input>
      <br/>
      <br/>
      {works ? (
      <div className="elements-container">
          {symbolList.map((char, index) => (
          <Element symbol={char} key={index}/>
          ))}
      </div>) : <p>Sorry, "{curName}" isn't able to be made with elements...</p>}
      {curName=="" && works ? (<div><br/><br/><br/><br/><br/></div>) : <><br/></>}
    </div>
  )
}

export default App
