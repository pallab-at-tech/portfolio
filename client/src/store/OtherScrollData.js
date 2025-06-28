import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
    data: [],
    totalCount: 0,
    totalNoOfPage: 0
}

const otherScrollSlice = createSlice({
    name: 'otherscroll',
    initialState: initialValue,
    reducers: {
        OthersDetailspro: (state, action) => {

            const incomingData = action.payload.data;

            if (state?.data && Array.isArray(state.data)) {
                const existingIds = new Set(state.data.map(item => item._id));
                const filteredNewData = incomingData.filter(item => !existingIds.has(item._id));
                state.data = [...state.data, ...filteredNewData];
            }
            else {
                state.data = [...incomingData];
            }

            state.totalCount = action.payload?.totalCount || 0
            state.totalNoOfPage = action.payload?.totalNoOfPage || 0
        }
    }
})

export const { OthersDetailspro } = otherScrollSlice.actions
export default otherScrollSlice.reducer