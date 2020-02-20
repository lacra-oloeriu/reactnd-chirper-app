import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatTweet } from '../utils/helpers';

export class Tweet extends Component {
    render() {
        const { tweet } = this.props

        if (tweet === null) {
            return <p> This Tweet doesn't existd </p>
        }

        console.log(this.props)
        return (
            <div className="tweet">
                <h3>Tweet</h3>
            </div>
        );
    }
}

function mapStateToProps({ authedUser, users, tweets }, { id }) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replaingTo] : null

    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) :
            null
    };
}
export default connect(mapStateToProps)(Tweet);
