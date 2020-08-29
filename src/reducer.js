// Step 1: Initialize State.
const initialState = [{
        id: '1',
        name: 'Mahesh',
    },{
        id: '2',
        name: 'Swapnil',
    },{
        id: '3',
        name: 'Rohit',
    },{
        id: '4',
        name: 'Deepak',
    },{
        id: '5',
        name: 'Rushi',
    },{
        id: '6',
        name: 'Bala',
    },{
        id: '7',
        name: 'Uttam',
    }]

// Step 2: Define reducer.
const reducer = ( state = initialState, action ) => {

	// Keep whole old state in new variable.
    let newState = {...state};

    // Step 3: Perform redux actions/
    switch( action.type ) {

        case 'UPDATE':
                newState = Object.values( newState ).map( item => {
                    if( item.id === action.value.id ) {
                        item.name = action.value.name;
                    }
                    return item;
                });
            break;

        case 'DELETE':
                newState = Object.values( newState ).filter( item => {
                    if( item.id === action.value ) {
                        return false;
                    }
                    return true;
                });
            break;

    }

    console.log( 'AFTER: ' );
    console.log( newState );

    return newState;
}

export default reducer;