export enum UserRoles {
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

export interface Role {
    roleId: number,
    name: string
}

export interface ILoginRequestDto {
    username: string,
    password: string
}

export interface ILoginResponseDto {
    userId: number,
    roleId: number,
    username: string,
    accessToken: string
}

export interface IUsersResponseDto {
    id: number,
    username: string,
    role: string,
    lastUpdated: string
}

export interface IMovieResponseDto {
    id: number,
    name: string,
    director: string,
    price: number,
    quantity: number,
    state: string,
    info: string,
    genre: string,
    imgUrl: string,
    lastUpdated: string
}

export interface IMovieSaveDto {
    id: number,
    name: string,
    director: string,
    price: number,
    quantity: number,
    state: number,
    info: string,
    genre: number,
    imgUrl: string
}

export interface IUserSaveDto {
    username: string;
    password: string;
    roleId: number;
}
