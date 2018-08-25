import { AudioFile } from './audio-file';
import { Image } from './image';

export interface Talk {
    ID: string;
    name: string;
    description: string;
    date: string;
    audioFile: AudioFile;
    author: {
        name: string;
        image: Image;
    };
}