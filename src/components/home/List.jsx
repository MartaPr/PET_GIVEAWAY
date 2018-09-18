import React from 'react';
import ListItem from './ListItem';

const List = (props) => {

    const items = props.list.map((item) => {
        return (
            <ListItem key={item.id} item={item} />
        )
    })

    return (
        <div className="list_container">
            {items}
        </div>
    );
};

export default List;