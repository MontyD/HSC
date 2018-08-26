import * as React from 'react';
import { DataProps } from 'react-apollo';
import { ApolloError } from 'apollo-client';
import { PaginatedResponse, PageInfo, PaginatedQueryVariables } from '../Models/paginated-response';

interface PaginatedProps<T> extends DataProps<PaginatedResponse<T>, PaginatedQueryVariables> {}
export interface PaginatedChildProps<T> {
    error?: ApolloError;
    loading: boolean;
    data: T[];
}

export const paginationOptions = {
    options: {
        variables: {
            offset: 0,
            limit: 1
        }
    }
};

const PaginationControls = ({hasNextPage, hasPreviousPage, updatePage}: PageInfo & {updatePage: () => void}) => (
    <div className="pagination">
        <button className="pagination__button" disabled={!hasPreviousPage}>Previous</button>
        <button className="pagination__button" disabled={!hasNextPage}>Next</button>
    </div>
);

export function pagination<T> (Component: React.ComponentType<PaginatedChildProps<T>>, queryName: string): React.ComponentClass<PaginatedProps<T>> {
    return class extends React.Component<PaginatedProps<T>> {

        constructor(props: PaginatedProps<T>) {
            super(props);

            this.updatePage = this.updatePage.bind(this);
        }

        assertQueryAvailable({loading, error, [queryName]: data}: {loading?: boolean, error?: any, [queryName: string]: any}): void {
            if (!loading && !error && !data) {
                throw new Error(`Query name did not exist in paginated response: ${queryName}`);
            }
        }

        updatePage(): void {

        }

        renderPaginationControls(pageInfo?: PageInfo, data?: any[]): JSX.Element | null {
            return pageInfo && data && pageInfo.totalCount > data.length ? <PaginationControls {...pageInfo} updatePage={this.updatePage} /> : null;
        }

        render(): JSX.Element {
            const {data} = this.props;
            this.assertQueryAvailable(data);
            return (
                <>
                    <Component
                        loading={data.loading}
                        error={data.error}
                        data={data[queryName] ? data[queryName]!.edges.map(item => item.node) : []}
                    />
                    {this.renderPaginationControls(data[queryName] && data[queryName]!.pageInfo, data[queryName] && data[queryName]!.edges)}
                </>
            );
        }
    };
}
