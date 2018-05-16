export interface GoogleVolumeListResponse {
    totalItems: number;
    items: Array<{
        volumeInfo: {
            title: string;
        }
    }>;
}
