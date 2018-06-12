import * as React from 'react';
import { DataProps } from 'react-apollo';
import { ApolloError } from 'apollo-client';
import { PaginatedResponse } from '../Models/paginated-response';

interface PaginatedProps<T, QueryType extends string> extends DataProps<PaginatedResponse<T, QueryType>> { }
interface ChildProps<T> {
    error: ApolloError | undefined;
    loading: boolean;
    data: T[];
}

export const pagination = <T, QueryType extends string>(Component: React.ComponentType<ChildProps<T>>, queryName: QueryType): React.SFC<PaginatedProps<T, QueryType>> => {
    return (props: PaginatedProps<T, QueryType>): React.ReactElement<React.ReactFragment> => (
        <>
            <Component 
                loading={props.data.loading} 
                error={props.data.error} 
                data={props.data[queryName] && props.data[queryName].edges ? props.data[queryName].edges.map((edge: {node: T}) => edge.node) : []} 
            />
            {props.data[queryName].pageInfo}
        </>
    );
};