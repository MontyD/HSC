import * as React from 'react';
import {Talk as TalkModel} from '../models/talk';

export const Talk = ({entity: talk, onPlayTalk}: {entity: TalkModel, onPlayTalk: () => void}) => (
    <div className="talk">
        <h3 className="talk__title">{talk.name}</h3>
        <p className="talk__description">{talk.description}</p>
        <button className="talk__play-button" onClick={onPlayTalk}>Play</button>
    </div>
);

