import type { AtmAccountData } from "./store/type";

export const bankAccounts: AtmAccountData[] = [
    {
        accountId: 1011,
        balance: 100, cardType: "Visa", user: "Selma Brown", isLoggedIn: false
    }, {
        accountId: 1023,
        balance: 100, cardType: "MasterCard", user: "Daniel Jacobs", isLoggedIn: false
    }, {
        accountId: 1035,
        balance: 100, cardType: "Star", user: "Abi Ojo", isLoggedIn: false
    }
]