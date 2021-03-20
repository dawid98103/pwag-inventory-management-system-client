enum UserRoles {
    USER = 1,
    ADMIN = 2
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


