import * as React from 'react';
import { READ_TALKS } from '../graphql/talks-queries';
import { Talk } from '../models/talk';
import { Talk as TalkComponent } from './talk';
import { pagination, PaginatedChildProps } from './pagination';
import { Loading } from './loading';

interface WithId {
    ID: string;
}

interface WithEntity<T> {
    entity: T;
    onPlayTalk: () => void;
}

function makeList<T extends WithId, P extends WithEntity<T>>(entityName: string, Component: React.ComponentType<P>): React.SFC<PaginatedChildProps<T>> {
    return ({data, loading, error}) => {
        let content: JSX.Element | JSX.Element[];

        if (loading) {
            content = <Loading entityName={entityName} />;
        } else if (error) {
            console.error(error);
            content = <div className="talk-list__error">Error getting {entityName}</div>;
        } else if (data.length === 0) {
            content = <div className="talk-list__empty">No {entityName} yet</div>;
        } else {
            content = data.map(talk => <Component entity={talk} key={talk.ID} onPlayTalk={console.log.bind(null, talk)} />);
        }

        return <div className="talk-list">{content}</div>;
    };
}

export const TalkList = pagination<Talk>(makeList('talks', TalkComponent), 'readTalks', READ_TALKS);
