export type PaginatedResponse<T> = {
    [key: string]: {
        pageInfo: {
            totalCount: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
        };
        edges: {
            node: T;
        }[];
    }  
};
