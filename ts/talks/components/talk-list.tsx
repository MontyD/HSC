import * as React from 'react';
import { READ_TALKS } from '../graphql/talks-queries';
import { Talk } from '../Models/talk';
import { Talk as TalkComponent } from './talk';
import { pagination, PaginatedChildProps } from './pagination';
import { Loading } from './loading';

const Talks: React.SFC<PaginatedChildProps<Talk>> = ({data, loading, error}) => {
    let content: JSX.Element | JSX.Element[];

    if (loading) {
        content = <Loading />;
    } else if (error) {
        console.error(error);
        content = <div className="talk-list__error">Error getting talks</div>;
    } else if (data.length === 0) {
        content = <div className="talk-list__empty">No talks yet</div>;
    } else {
        content = data.map(talk => <TalkComponent talk={talk} key={talk.ID} onPlayTalk={console.log.bind(null, talk)} />);
    }

    return <div className="talk-list">{content}</div>;
};

export const TalkList = pagination<Talk>(Talks, 'readTalks', READ_TALKS);
