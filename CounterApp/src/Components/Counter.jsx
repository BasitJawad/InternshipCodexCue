import React,{useReducer} from 'react'
import "../Styles/style.css"
import reducers from '../Event/Reducers'

const Counter = () => {

  const initialState = 0;
 const [count, dispatch]=  useReducer(reducers,initialState)

  return (
    <>
    <div className="wrapper h-screen w-screen sm:flex sm:justify-center sm:flex-col sm:items-center">
            <div className="counterApp h-[60vh] rounded-3xl grid grid-cols-12 grid-rows-12  sm:h-[60vh] sm:w-[40vw] sm:rounded-3xl sm:grid sm:grid-cols-12 sm:grid-rows-12 mt-20 m-3">
                    <h1 className='text sm:col-span-12 sm:row-span-4  sm:text-center sm:text-5xl sm:font-extrabold sm:pt-4 sm:uppercase text-center col-span-12 row-span-4 font-extrabold text-4xl pt-4'>Counter App</h1>
                    
                    <h1 className='value sm:col-span-12 sm:row-span-4 sm:text-center sm:text-5xl sm:pt-4 col-span-12 row-span-4 text-center text-4xl '> <span className='sm:border sm:border-black sm:p-8 sm:rounded-3xl border border-black p-8 rounded-3xl '>{count}</span> </h1>
                    
                    <div className="buttons  sm:pt-6 sm:col-span-12 sm:row-span-4 sm:flex-row pt-6 col-span-12 row-span-4 ">
                       <button className='Inc sm:text-6xl sm:rounded-3xl sm:bg-yellow-400 sm:mb-6 sm:w-[6vw] text-blue-600 sm:border  text-6xl rounded-3xl bg-yellow-300 w-[20vw] mb-6  '  onClick={()=>{dispatch({type:"INC"})}}  onKeyDown={()=>{dispatch({type:"SpeedInc"})}}>+</button> 
                       <button className='Reset sm:text-4xl sm:rounded-3xl sm:bg-yellow-400 sm:mb-6 sm:w-[10vw] text-blue-600 sm:border rounded-3xl bg-yellow-300 w-[20vw] mb-6  text-2xl 'onClick={()=>{dispatch({type:"RES"})}}  ><i className="fa-solid fa-rotate-right fa-rotate-90" style={{color: "#2563EB"}}></i></button> 
                       <button className='Dec sm:text-6xl sm:rounded-3xl sm:bg-yellow-400 sm:mb-6 sm:w-[6vw] text-blue-600 sm:border   text-6xl rounded-3xl bg-yellow-300 w-[20vw] mb-6 '  onClick={()=>{dispatch({type:"DEC"})}}  onKeyDown={()=>{dispatch({type:"SpeedDec"})}}   >-</button> 
                  
                      

                    </div>
            </div>
    </div>
    </>
  )
}

export default Counter