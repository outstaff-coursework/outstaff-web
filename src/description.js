import React from 'react';

import './description.css'


class Description extends React.Component {
    constructor(props) {
        super(props)
    }

    renderParticipants() {
        let result = []
        this.props.meeting.participants.forEach(element => {
            result.push(
                <span>{element}</span>
            )
        });
        return result
    }

    genStyle() {
        let style = {}
        if (this.props.is_horizontal) {
            style.top = this.props.stripe_height.toString() + 'px'
        } else {
            style.left = this.props.stripe_width.toString() + 'px'
        }
        return style
    }

    render() {
        return (
            <div
                className='rcs-stripe-meeting-description'
                style={this.genStyle()}
            >
                <h3>{this.props.meeting.name}</h3>
                <h4>{this.props.meeting.start} - {this.props.meeting.end}</h4>
                <span>{this.props.meeting.description}</span>
                <h4>Участники:</h4>
                <div className='rcs-stripe-meeting-description-participants'>
                    {this.renderParticipants()}
                </div>
            </div>
        )
    }
}

export default Description
