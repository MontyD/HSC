import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as plyr from 'plyr';

export class Player extends React.Component {

    private domContainer: HTMLElement;
    private audioElement: HTMLAudioElement;
    private plyrInstance: plyr.Plyr;

    constructor() {
        super({});

        this.domContainer = document.getElementById('player')!;
    }

    componentDidMount() {
        this.plyrInstance = plyr.setup(this.audioElement, {})[0];
      }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return(
            ReactDOM.createPortal(
                <audio ref={audioEl => this.audioElement = audioEl!} />,
                this.domContainer
            )
        );
    }

}