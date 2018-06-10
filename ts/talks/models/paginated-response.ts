export type PaginatedResponse<T, QueryName extends string> = {
    [key in QueryName]: {
        pageInfo: {
            totalCount: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
        };
        edges: {
            node: T;
        }[];
    };
};