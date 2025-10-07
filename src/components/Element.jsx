import elementsJson from "../elements.json";
import {useState,useEffect} from "react"
import "./Element.css"

function Element(props){

    let symbol = props.symbol;

    if(symbol.length==2){
        symbol = symbol[0].toUpperCase() + symbol[1].toLowerCase()
    }



    const [name,setName] = useState("Test")
    const [mass,setMass] = useState(0.33)
    const [number,setNumber] = useState(1)  
    const [cat,setCat] = useState("")

    const [subs,setSubs] = useState("")


    useEffect(()=>{

        let curObj = null;

        elementsJson.elements.every((elementObj,index)=>{
            if(elementObj.symbol.toUpperCase()==symbol.toUpperCase()){
                curObj=elementObj;
                symbol=curObj.symbol
                // console.log("FOUND FOR "+symbol)
                // console.log(curObj)
                return false
            }
            return true
        })

        if(symbol.length==2){
            symbol = symbol[0].toUpperCase() + symbol[1].toLowerCase()
        }



        
        if(curObj!=null){



            setName(curObj.name)
            setMass(curObj.atomic_mass)

            setNumber(curObj.number)
            setSubs(curObj.electron_configuration_semantic)

            
            const cur = curObj.category
    
            setCat(cur.replace(" ","_").replace(" ","_"))
        }

    },[symbol])


    return (
        <div className={"element "+ (cat.includes("unknown") ? "unknown" : cat)}>
            <h2 className="symbol">{symbol}</h2>
            <p className="name">{name}</p>
            <p className="mass">{Math.round(mass*100)/100}</p>
            <p className="number">{number}</p>
            <p className="electron_config">{subs}</p>



        </div>
    )

}

export default Element;