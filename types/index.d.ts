declare namespace NodeJS {
    interface ProcessEnv {
        PORT_APLICATION: number
        PORT: string
        HOST: string
        USER_NAME: string
        PASSWORD: string
        DATABASE: string
        HASH_SALT: string
        JWT_SECRET: string
        DEFAULT_USER_USERNAME: string
        DEFAULT_USER_PASSWORD: string
    }
}