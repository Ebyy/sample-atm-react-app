import type { AtmAccountData } from "./store/type";

export const bankAccounts: AtmAccountData[] = [
    {
        accountId: 101,
        balance: 100, cardType: "visa", user: "Selma Brown"
    }, {
        accountId: 103,
        balance: 100, cardType: "ms_card", user: "Daniel Jacobs"
    }, {
        accountId: 105,
        balance: 100, cardType: "pulse", user: "Abi Ojo"
    }
]