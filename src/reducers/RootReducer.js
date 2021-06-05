let initialState = {count: 0};

let rootReducer = (state=initialState,actions)=>{
    switch(actions.type){
        case 'INCREMENT':
            return {count: state.count+1};
        case 'DECREMENT':
            return {count: state.count-1};
        default: return state;
    }
}

export default rootReducer;


