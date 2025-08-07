import { createSlice } from '@reduxjs/toolkit'
import type { AtmAccountData } from "./type";

const selectedAccount: AtmAccountData = {
    accountId: 0,
    user: '',
    balance: 0,
    cardType: ''
}

const AccountsSlice = createSlice({
    name: "atmAccounts",
    initialState: selectedAccount,
    reducers: {
        getUserAccountTask: (state, action) => {
            return state = action.payload ? action.payload : selectedAccount
        },
        runWithdrawTask: (state, action) => {
            const incrementAmount = action.payload;
            state.balance -= incrementAmount
        },
        runDepositTask: (state, action) => {
            const decrementAmount = action.payload;
            state.balance += decrementAmount
        },
        runExitTask: (state) =>
            (state = { ...selectedAccount })

    },
    selectors: {
        checkBalance: (state) => state.balance
    }
})

export const {
    getUserAccountTask, runDepositTask, runWithdrawTask, runExitTask
} = AccountsSlice.actions

export const {
    checkBalance,
} = AccountsSlice.selectors

export default AccountsSlice.reducer;