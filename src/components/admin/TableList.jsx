import React from 'react';

const TableList = ({ item }) => {
    return (
        <div className="table_container">
            <div className="nfo1">{item.id}</div>
            <div className="nfo1">{item.itemId}</div>
            <div className="nfo1">{item.pet}</div>
            <div className="nfo2">{item.name}</div>
            <div className="nfo2">{item.surname}</div>
            <div className="nfo2">{item.street}</div>
            <div className="nfo2">{item.town}</div>
            <div className="nfo2">{item.date}</div>
        </div>
    );
};

export default TableList;