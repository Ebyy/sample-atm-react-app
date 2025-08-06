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
            return action.payload ? action.payload : selectedAccount
        },
        runWithdrawTask: (state, action) => {
            const incrementAmount = action.payload;
            //const newState = state.find((item) => item.accountId === id)
            state.balance -= incrementAmount
        },
        runDepositTask: (state, action) => {
            const decrementAmount = action.payload;
            //const newState = state.find((item) => item.accountId === id)
            state.balance += decrementAmount
        },
    },
    selectors: {
        checkBalance: (state) => state.balance
    }
})

export const {
    getUserAccountTask, runDepositTask, runWithdrawTask,
} = AccountsSlice.actions

export const {
    checkBalance,
} = AccountsSlice.selectors

export default AccountsSlice.reducer;