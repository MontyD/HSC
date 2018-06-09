export interface Talk {
    ID: string,
    name: string,
    description: string,
    date: string,    
    audioFile: {
        url: string
    }
    author: {
        name: string
    }
}

export interface TalkResponse {
    readTalks: {
        edges: {
            node: Talk
        }[]
    }
}