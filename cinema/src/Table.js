import React, { Component } from 'react'

//next are SIMPLE COMPONENT, 
//they are functions and don't use class keyword
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
            </tr>
        </thead>
    )
}

//nexr is passing the props through as a parameter, 
//and maping through the array to return a table row for each object in the array. 
//This map will be contained in the _rows_ variable, which we'll return as an expression.
const TableBody = props => {
    const rows = props.movieData.map((row, index) => {
        return (
            //key below helps indentify each list item
            //also we'll pass the key/index through as a parameter, so the filter function knows which item to remove
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.description}</td>
                <td>
                    <button onClick={() => 
                    props.removeMovie(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

//Table.js is a COMPONENT

//class Table is a CUSTOM CLASS COMPONENT. 
//CCComponent MUST include _render()_, 
//and the _return_ can only return one parent element.
//it can be imported in other components by using 'import __ from './___'

class Table extends Component {
    render() {
        //props = properties
        //next const contains _this.props.movieData_
        const { movieData, removeMovie } = this.props

        return (
            <table>
               <TableHeader />
               <TableBody movieData={movieData} removeMovie={removeMovie}/>
            </table>
        )
    }
}

export default Table