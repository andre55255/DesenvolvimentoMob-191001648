export interface ApiResponse<T> {
    success: boolean,
    statusCode?: number,
    message?: string | null,
    object?: T | null
}

export interface Word {
    _id: string,
    text: string,
    numberLetters: number,
    createdAt: Date,
    updatedAt: Date,
    disabledAt: Date | null
}