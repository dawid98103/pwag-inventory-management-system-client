enum UserRoles {
    USER = 1,
    ADMIN = 2
}

export interface MovieGenre {
    genreId: number,
    name: string
}

export interface State {
    stateId: number,
    name: string
}

export interface ILoginRequestDto {
    username: string,
    password: string
}

export interface ILoginResponseDto {
    userId: number,
    userRole: number,
    username: string,
    token: string
}

export interface IMovieResponseDto {
    name: string,
    director: string,
    price: number,
    quantity: number,
    state: string,
    info: string,
    genre: string,
    imgUrl: string
}

export const MovieGenresSelect: MovieGenre[] = [
    {
        genreId: 1,
        name: "Akcja"
    },
    {
        genreId: 2,
        name: "Komedia"
    },
    {
        genreId: 3,
        name: "Dramat"
    },
    {
        genreId: 4,
        name: "Thriler"
    }
]

export const StateSelect: State[] = [
    {
        stateId: 1,
        name: "Akcja"
    },
    {
        stateId: 2,
        name: "Komedia"
    }
]



