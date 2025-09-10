import React from 'react'

const ChildComponents = React.memo(
    (props) => {
        console.log("Child Component go re-render again");

        return(
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
);

export default ChildComponents
// React.memo -> wrap-> component -> component re-render tabhi hoga jb props change honge nhi toh re-render nhi hoga

//if u r sending a function, then react.memo went be able to save you from re-rendering