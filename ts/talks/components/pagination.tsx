import * as React from 'react';
import { DataProps } from 'react-apollo';
import { ApolloError } from 'apollo-client';
import { PaginatedResponse, PageInfo, PaginatedQueryVariables } from '../Models/paginated-response';

const PAGE_SIZE = 1;

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
            limit: PAGE_SIZE
        }
    }
};

interface PaginationControlsProps extends PageInfo {
    onNextPage: () => void;
    onPreviousPage: () => void;
}

const PaginationControls = ({hasNextPage, hasPreviousPage, onNextPage, onPreviousPage}: PaginationControlsProps) => (
    <div className="pagination">
        <button className="pagination__button" disabled={!hasPreviousPage} onClick={onPreviousPage}>Previous</button>
        <button className="pagination__button" disabled={!hasNextPage} onClick={onNextPage}>Next</button>
    </div>
);

export function pagination<T> (Component: React.ComponentType<PaginatedChildProps<T>>, queryName: string): React.ComponentClass<PaginatedProps<T>> {
    return class extends React.Component<PaginatedProps<T>> {

        constructor(props: PaginatedProps<T>) {
            super(props);

            this.onNextPageRequested = this.onNextPageRequested.bind(this);
            this.onPreviousPageRequested = this.onPreviousPageRequested.bind(this);
        }

        assertQueryAvailable({loading, error, [queryName]: data}: {loading?: boolean, error?: any, [queryName: string]: any}): void {
            if (!loading && !error && !data) {
                throw new Error(`Query name did not exist in paginated response: ${queryName}`);
            }
        }

        onNextPageRequested(): void {
            const {data} = this.props;
            const newOffset = data.variables.offset + PAGE_SIZE;
            if (newOffset <= data[queryName]!.pageInfo.totalCount) {
                this.fetchNewOffset(data.variables.offset + PAGE_SIZE);
            }
        }

        onPreviousPageRequested(): void {
            const {data} = this.props;
            const newOffset = data.variables.offset - PAGE_SIZE;
            if (newOffset >= 0 ) {
                this.fetchNewOffset(newOffset);
            }
        }

        fetchNewOffset(newOffset: number) {
            const {data} = this.props;
            data.fetchMore({
                variables: {
                  offset: newOffset
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  return fetchMoreResult || prev;
                }
            });
        }

        renderPaginationControls(pageInfo?: PageInfo, data?: any[]): JSX.Element | null {
            const showPaginationControls = pageInfo && data && pageInfo.totalCount > data.length;
            if (showPaginationControls) {
                return <PaginationControls {...pageInfo!} onNextPage={this.onNextPageRequested} onPreviousPage={this.onPreviousPageRequested} />;
            }
            return null;
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
