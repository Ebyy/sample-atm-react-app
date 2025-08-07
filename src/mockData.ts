import type { AtmAccountData } from "./store/type";

export const bankAccounts: AtmAccountData[] = [
    {
        accountId: 1011,
        balance: 100, cardType: "visa", user: "Selma Brown", isLoggedIn: false
    }, {
        accountId: 1023,
        balance: 100, cardType: "ms_card", user: "Daniel Jacobs", isLoggedIn: false
    }, {
        accountId: 1035,
        balance: 100, cardType: "pulse", user: "Abi Ojo", isLoggedIn: false
    }
]