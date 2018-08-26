import * as React from 'react';
import { graphql } from 'react-apollo';
import { READ_TALKS } from '../graphql/talks-queries';
import { Talk } from '../Models/talk';
import { Talk as TalkComponent } from './talk';
import { pagination, PaginatedChildProps, paginationOptions } from './pagination';
import { PaginatedQueryVariables } from '../models/paginated-response';
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

export const TalkList = graphql<{}, PaginatedChildProps<Talk>, PaginatedQueryVariables>(READ_TALKS, paginationOptions)(pagination<Talk>(Talks, 'readTalks'));
