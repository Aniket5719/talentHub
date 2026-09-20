import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  jobs: [],
  loading: false,
  error: null,
  applications: []
}
export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://talenthub-p6a5.onrender.com/jobs')
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to load jobs")
    }

  }
)
export const applyToJob = createAsyncThunk(
  'apply/applyToJob',
  async (applicationData) => {
    const res = await axios.post(
      'https://talenthub-p6a5.onrender.com/applications',
      applicationData
    )
    return res.data;
  }
)

export const fetchApplications = createAsyncThunk(
  'fetchApplications',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(
        'https://talenthub-p6a5.onrender.com/applications'
      )
      return res.data
    } catch (error) {
      return thunkAPI.rejectWithValue("Unable to load applications")
    }

  }
)

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true,
        state.error = null
    }),
      builder.addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false,
          state.jobs = action.payload
      }),
      builder.addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload || action.error.message
      })
    builder.addCase(fetchApplications.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchApplications.fulfilled, (state, action) => {
        state.loading = false,
          state.applications = action.payload
      }),
      builder.addCase(fetchApplications.rejected, (state, action) => {
        state.loading = false,
          state.error = action.payload
      })
  }
})

export default jobsSlice.reducer
