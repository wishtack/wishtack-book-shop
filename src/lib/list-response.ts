export interface ListResponse<T> {
    meta: {
        totalCount: number;
    };
    itemList: T[];
}
