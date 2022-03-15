import React from "react";
import Contents from "./Contents";
import Header from "./Header";
import Total from "./Total";

const Course = ({course}) => {
    const header = course.name;
    const contents = course.parts;
    const total = contents.map(part => part.exercises).reduce((a, b) => a + b, 0);
    
    return (
        <div>
            <Header header={header} />
            {contents.map(part => <Contents key={part.id} name={part.name} exercises={part.exercises}/> )}
            <Total total={total}/>
        </div>       
    )
}

export default Course