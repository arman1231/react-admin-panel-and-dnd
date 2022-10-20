import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(responce => responce.data)
})

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        removeUser(state, action) {
          state.users = state.users.filter((user) => user.id !== action.payload);
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''

        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})
export const { removeUser } = userSlice.actions;
export default userSlice.reducer