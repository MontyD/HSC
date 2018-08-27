import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from '../graphql/client';
import { TalkList } from './lists';

export class App extends React.Component<void> {
    render(): React.ReactNode {
        return (
            <ApolloProvider client={client}>
                <TalkList />
            </ApolloProvider>
        );
    }
}