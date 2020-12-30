import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Media,
    CardTitle } from 'reactstrap';
import Moment from 'react-moment';

class DishDetail extends Component {
   
    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } 

        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        const comms = this.props.dish.comments.map((comment) => {
            return(
            <div key={comment.id}>
                <Media tag="li">
                    <Media body>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, <Moment>{comment.date}</Moment></p>
                    </Media>
                </Media>
            </div>
            );
        });

        if (comments != null) {
            return comms;
        }

        else {
            return <div></div>
        }
    }

    render() {
        if (this.props.dish != null) {
            return(
                <div className="row">
                    {/* div for the card */}
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
    
                    {/* div for the comments */}
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <p>{this.renderComments(this.props.dish.comments)}</p>
                    </div>
                </div>
            );
        }

        else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;

