import { Track } from './track';

export interface Album {
    name: string;
    releaseData: string;
    coverImage: string;
    tracks: Track[];
}
