import React, { Component } from 'react';

export default class Webinaritem extends Component {
  render() {
    const { name, date, time, topic, imageurl, meetingurl } = this.props;

    return (
        <div className='my-3'>
            <div className="card d-flex flex-row">
                <img src={imageurl} className="card-img-left" alt="..." width='150px'/>
                <div className="card-body">
                    <h5 className="display-5 card-title" style={{fontFamily: 'Playfair Display'}}>{name}</h5>
                    <p className="card-text">Date: <span style={{color: 'red'}}>{date}</span></p>
                    <p className="card-text">Time: <span style={{color: 'red'}}>{time}</span></p>
                    <p className="card-text">Topic: <span style={{color: 'red'}}>{topic}</span></p>
                    <p className="card-text">Cost: <span style={{color: 'red'}}>Free</span></p>
                    <a rel="noreferrer" className="btn btn-outline-primary" target='_blank' href={meetingurl}>Attend Webinar</a>
                </div>
            </div>
        </div>
    );
  }
}
