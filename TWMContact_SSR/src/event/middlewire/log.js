export default ({ dispatch }) => next => action => {

    if(!action.payload) {
        return next(action);
    }
    else if(!action.log) {
        const requestMadeON = new Date();
       // console.log(`${action.type.toUpperCase()} Action was called on ${requestMadeON}`);
        const newAction = {...action, LOG_TIME: requestMadeON};
        return next(newAction);
    }
    
};



/*
export default function({dispatch}) {
    return function(next) {
        return function(action) {

        }
    }
};
*/