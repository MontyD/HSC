import * as React from 'react';
import { graphql } from 'react-apollo';
import { READ_TALKS } from '../graphql/talks-queries';
import { Talk } from '../Models/talk';
import { pagination, PaginatedChildProps } from './pagination';

const Talks: React.SFC<PaginatedChildProps<Talk>> = (props) => {
    return (
        <>
            {JSON.stringify(props)}
        </>
    );
};

export const TalkList = graphql<{}, PaginatedChildProps<Talk>, {}>(READ_TALKS)(pagination<Talk>(Talks, 'readTalks'));
