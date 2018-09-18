import React from 'react';
import TableList from './TableList';

const Table = (props) => {

    const rows = props.list.map((item) => {
        return (
            <div>
                <TableList key={item.id} item={item} />
            </div>
        )
    }) 
    return (

        <div className="table_container_wrapper">
            <div className="table_container">
                <div className="row nfo1">id</div> 
                <div className="row nfo1">Pet ID</div>
                <div className="row nfo1">Pet</div>
                <div className="row nfo2">Name</div>
                <div className="row nfo2">Surname</div>
                <div className="row nfo2">Street</div>
                <div className="row nfo2">City</div>
                <div className="row nfo2">Date</div>
                <br />
            </div>
            {rows}
        </div>
    );
};



export default Table;


