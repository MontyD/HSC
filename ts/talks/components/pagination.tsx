import * as React from 'react';
import { DataProps } from 'react-apollo';
import { ApolloError } from 'apollo-client';
import { PaginatedResponse } from '../Models/paginated-response';

interface PaginatedProps<T> extends DataProps<PaginatedResponse<T>> {}
export interface PaginatedChildProps<T> {
    error?: ApolloError;
    loading: boolean;
    noResults: boolean;
    data: T[];
}

export function pagination<T> (Component: React.ComponentType<PaginatedChildProps<T>>, queryName: string): React.SFC<PaginatedProps<T>> {
    return ({data}) => {
        if (!data.loading && !data.error && !data[queryName]) {
            throw new Error(`Query name did not exist in paginated response: ${queryName}`);
        }
        return (
            <Component 
                loading={data.loading} 
                error={data.error} 
                noResults={!data.loading && !data.error && (!data[queryName] || data[queryName]!.edges.length === 0)}
                data={data[queryName] ? data[queryName]!.edges.map(item => item.node) : []} 
            />
        );
    };
}
