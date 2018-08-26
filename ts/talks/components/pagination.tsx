import * as React from 'react';
import { DataProps } from 'react-apollo';
import { ApolloError } from 'apollo-client';
import { PaginatedResponse, PageInfo } from '../Models/paginated-response';

interface PaginatedProps<T> extends DataProps<PaginatedResponse<T>> {}
export interface PaginatedChildProps<T> {
    error?: ApolloError;
    loading: boolean;
    data: T[];
}

const PaginationControls = ({hasNextPage, hasPreviousPage}: PageInfo) => (
    <div className="pagination">
        <button className="pagination__button" disabled={!hasPreviousPage}>Previous</button>
        <button className="pagination__button" disabled={!hasNextPage}>Next</button>
    </div>
);

export function pagination<T> (Component: React.ComponentType<PaginatedChildProps<T>>, queryName: string): React.SFC<PaginatedProps<T>> {
    return (props) => {
        const {data} = props;
        const showPaginationControls = data[queryName] && data[queryName]!.pageInfo.totalCount > data[queryName]!.edges.length;
        if (!data.loading && !data.error && !data[queryName]) {
            throw new Error(`Query name did not exist in paginated response: ${queryName}`);
        }
        return (
            <>
                <Component 
                    loading={data.loading} 
                    error={data.error} 
                    data={data[queryName] ? data[queryName]!.edges.map(item => item.node) : []} 
                />
                {showPaginationControls ? <PaginationControls {...data[queryName]!.pageInfo} /> : null}
            </>
        );
    };
}
