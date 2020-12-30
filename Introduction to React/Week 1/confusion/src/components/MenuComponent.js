import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';


class Menu extends Component {
    render() {

        // iterate over all the items over the array using map
        const menu = this.props.dishes.map((dish) => {
            return (
                // React requires a key for rendering a list of items
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return ( 
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                </div>
            </div>
        );
    }
}

// don't forget to export the component
export default Menu;