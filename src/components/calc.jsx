import react, {useState} from 'react'
// import Display from './display.jsx'
// import Keys from './keys.jsx'
import './calc.css'



function calc(){

    const[typed, setTyped] = useState("");
    const[equals, setEquals] = useState("...");

    const handleClick=(value)=>{
        let newTyped=typed + value
        setTyped(newTyped);
        
        try{
            let num = eval(newTyped);
            setEquals(num);
        }
        catch{
            console.log('error');
        }
            
    }

    const handleEquals = () => {
        try{

            setTyped(eval(typed));
            //setEquals("..");
        }
        catch(error){
            setEquals('invalid');
        }
    }

    const handleClear = () => {
        setTyped("");
        setEquals("...");
    }


    return(
        <>
            <div className="calc">
                <div className="kecio">
                    kecio 1956x
                </div>
                <div className="cir">

                </div>
                
                <div className="display">
                    {/* <Display/> */}
                    <div className="typed">
                        {typed}
                    </div>
                    <div className="equals">
                        {equals}
                    </div>

                </div>
                <div className="keys">
                    {/* <Keys/> */}
                    <button className="op" onClick={()=>handleClear()}>AC</button>
                    <button className="ex" onClick={()=>handleClick("(")}>(</button>
                    <button className="ex" onClick={()=>handleClick(")")}>)</button>
                    <button className="op" onClick={()=>handleClick('/')}>/</button>
                    <button className="key" onClick={()=>handleClick('7')}>7</button>
                    <button className="key" onClick={()=>handleClick('8')}>8</button>
                    <button className="key" onClick={()=>handleClick('9')}>9</button>
                    <button className="op" onClick={()=>handleClick('*')}>*</button>
                    <button className="key" onClick={()=>handleClick('4')}>4</button>
                    <button className="key" onClick={()=>handleClick('5')}>5</button>
                    <button className="key" onClick={()=>handleClick('6')}>6</button>
                    <button className="op" onClick={()=>handleClick('-')}>-</button>
                    <button className="key" onClick={()=>handleClick('1')}>1</button>
                    <button className="key" onClick={()=>handleClick('2')}>2</button>
                    <button className="key" onClick={()=>handleClick('3')}>3</button>
                    <button className="op" onClick={()=>handleClick('+')}>+</button>
                    <button className="ex" onClick={()=>handleClick('%')}>%</button>
                    <button className="key" onClick={()=>handleClick('0')}>0</button>
                    <button className="ex" onClick={()=>handleClick('.')}>.</button>
                    <button className="op" onClick={()=>handleEquals()}>=</button>
                        
                </div>
            </div>
        </>
    )

}

export default calc;
