import React, {Component} from 'react';

class YouTubeDebugger extends Component {

    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleBitrateOnClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state.bitrate))
        
    }

    handleResolutionOnClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }

        }, () => console.log(this.state.resolution))
    }


    render() {
        return (
            <div>
            <button className="bitrate" onClick={this.handleBitrateOnClick}>
                Change Bitrate
            </button>
            <button className="resolution" onClick={this.handleResolutionOnClick}>
                Change Resolution
            </button>
            </div>
        )
    }

}

export default YouTubeDebugger;