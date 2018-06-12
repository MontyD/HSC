import * as React from 'react';
import { graphql, DataProps } from 'react-apollo';
import { READ_TALKS } from '../graphql/talks-queries';
import { TalkResponse } from '../Models/talk';

const Talks: React.SFC<DataProps<TalkResponse>> = ({data: {readTalks, loading, error}}) => {
    if (loading) {
        return <div>Loading</div>;
    }
    if (error) {
        return <div>Error</div>;
    }
    if (!readTalks || !readTalks.edges || !readTalks.edges.length) {
        return <div>No talks</div>;
    }
    return <div> {readTalks.edges.map(({node}) => <div key={node.ID}>{node.name} {node.date}</div>)} </div>;
};

export const TalkList = graphql<{}, TalkResponse, {}>(READ_TALKS)(Talks);