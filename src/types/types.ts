export type hoursSleptType = {
    monday: number
    tuesday: number
    wednesday: number
    thursday: number
    friday: number
    saturday: number
    sunday: number
}    

export type sleepSchedulesType = {
    date: string
    date_bedtime: string
    alert_on_bedtime: boolean
    date_wake: string
    alert_on_wake: boolean
}