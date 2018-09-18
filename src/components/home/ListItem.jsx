import React from 'react';

const ListItem = ({ item }) => {


    return (
        <div className="shelter_pet">
            <div className="polaroid_wrapper">
                <img src={require(`../data/imagesdb/${item.img}`)} alt="oops" />
                <div className="pet_nfo">
                    <div className="pet_name"> {item.name} </div>
                    <div className="pet_age"> {item.age} </div>
                </div>
            </div>
        </div>



    );
};

export default ListItem;  