import React, { Component } from 'react';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = { activities: [] }
    }
    render() {
        const { activities } = this.props;
        return (
            <div className="content">
                < div className="line" ></div>
                {activities.map(activity => (
                    <div className="chatbar" key={activity.user.id}>
                        <div className="item">
                            <div className="avatar">
                                <img src="{activity.user.avatar}" />
                            </div>
                            {activity.user.name}
                        </div>
                        <span className="time"> {activity.timestamp}</span>
                        <div className="comment">{activity.text}</div>
                        <div className="commentCount">{activity.comments.length}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Content;