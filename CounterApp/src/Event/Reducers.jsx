const reducers = (state,action)=>{

    switch(action.type){
        case "INC":
            return state = state + 1;
            
        case "DEC":
            let newNum = 0;
            state >= 1 ? newNum = state - 1 : 0;
            return newNum
        case "RES":
            return state = 0;
        case "SpeedInc":
            return state = state + 1;    
        case "SpeedDec":
            let newNum1 = 0;
            state >= 1 ? newNum1 = state - 1 : 0;
            return newNum1  
        default:
            return state ;    
    }
}

export default reducers;