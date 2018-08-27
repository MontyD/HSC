import * as React from 'react';
import {Talk as TalkModel} from '../models/talk';

export const Talk = ({entity: talk, onPlayTalk}: {entity: TalkModel, onPlayTalk: () => void}) => (
    <div className='card has-vertical-margin'>
        <div className='card-header'>
            <p className='card-header-title'>{talk.name} - {talk.author.name}</p>
        </div>
        <div className='card-content'>
            <div className='content'>
                {talk.description}
            </div>
        </div>
        <footer className='card-footer'>
            <a className='card-footer-item' onClick={onPlayTalk}>
                <i className='fa fa-play' />&nbsp;Play
            </a>
        </footer>
    </div>
);

