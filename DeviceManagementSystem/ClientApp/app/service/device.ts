export class Device {
    Id: number
    Name: string
    Manufacturer: string
    Type: string
    OS: string
    OSVersion: string
    Processor: string
    RAM: string
    User: DMSUser
}
export class DMSUser {
    Name: string
}