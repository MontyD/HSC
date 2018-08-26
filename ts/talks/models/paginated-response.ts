export interface PageInfo {
    totalCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface PaginatedResponse<T> {
    [key: string]: {
        edges: {
            node: T;
        }[];
        pageInfo: PageInfo;
    };
}
