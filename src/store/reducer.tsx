import { createSlice } from '@reduxjs/toolkit'
import type { AtmAccountData } from "./type";

const selectedAccount: AtmAccountData = {
    accountId: 0,
    user: '',
    balance: 0,
    cardType: '',
    isLoggedIn: false
}

const AccountsSlice = createSlice({
    name: "atmAccount",
    initialState: selectedAccount,
    reducers: {
        loginUser: (state, action) => {
            return state = { ...action.payload, isLoggedIn: true }
        },
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
        runExitTask: (state, action) => {
            state.isLoggedIn = action.payload
            state = selectedAccount
        },
    },
    selectors: {
        checkBalance: (state) => state.balance,
        getCardType: (state) => state.cardType,
        getUser: (state) => state.user,
        isValidUser: (state) => state.isLoggedIn,
    }
})

export const {
    getUserAccountTask, loginUser, runDepositTask, runWithdrawTask, runExitTask
} = AccountsSlice.actions

export const {
    checkBalance, getCardType, getUser, isValidUser
} = AccountsSlice.selectors

export default AccountsSlice.reducer;