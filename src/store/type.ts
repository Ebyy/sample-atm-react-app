export interface AtmAccountData {
    accountId: number,
    balance: number,
    cardType: string,
    user: string,
    isLoggedIn: boolean
}

export const CardTypePosition = {
    Star: 0,
    Pulse: 1,
    Maestro: 2,
    MasterCard: 3,
    Plus: 4,
    Visa: 5
} as Record<string, number>;
