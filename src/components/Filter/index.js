import React, {useContext} from 'react';
import Context from '../../context';
import filterOptions from '../../constants/filterOptions';
import setFilter from '../../actions/setFilter';

const Filter = ()=>{
    const { state, dispatch } = useContext(Context)
    return (
        <div>
            {Object.keys(filterOptions).map((filter, index)=>(
                <button onClick={() => dispatch(setFilter(filterOptions[filter]))}>{filterOptions[filter]}</button>
            ))}
        </div>
    )
}

export default Filter