export interface GoogleVolume {
    volumeInfo: {
        imageLinks: {
            thumbnail: string;
        };
        title: string;
    };
}

export interface GoogleVolumeListResponse {
    totalItems: number;
    items: GoogleVolume[];
}

