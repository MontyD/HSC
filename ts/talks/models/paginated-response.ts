export interface PageInfo {
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface PaginatedQueryVariables {
    offset: number;
    limit: number;
}

export interface PaginatedResponse<T> {
    [key: string]: {
        edges: {
            node: T;
        }[];
        pageInfo: PageInfo;
    };
}
