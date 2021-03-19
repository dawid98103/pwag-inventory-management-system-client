enum UserRoles {
    USER = 1,
    ADMIN = 2
}

export interface LoginRequestDto {
    username: string,
    password: string
}

export interface LoginResponseDto {
    userId: number,
    userRole: number,
    username: UserRoles,
    token: string
}
