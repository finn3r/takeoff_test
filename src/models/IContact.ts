export interface IContact {
    id?: number,
    image: string | undefined,
    name: string,
    email: string,
    phone: string,
    userId?: number
}

export interface IContactLogin extends IContact{
    password: string
}