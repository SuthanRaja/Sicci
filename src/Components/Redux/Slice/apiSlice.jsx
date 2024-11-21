import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { message } from 'antd';

const API_URL = 'http://13.233.48.88:8080/api/v1/login';
const Customer_api = 'http://13.233.48.88:8080/api/v1/get/customers';
const HallInfo_api = 'http://13.233.48.88:8080/api/v1/get/hall-rooms';
const Users_api = 'http://13.233.48.88:8080/api/v1/get/users';
const Roles_api = "http://13.233.48.88:8080/api/v1/get/roles";
const LoanTypes_api = "http://13.233.48.88:8080/api/v1/get/loan-types";
const Arbitrators_api = "http://13.233.48.88:8080/api/v1/get/arbitrators";
const IAATransactions_api = "http://13.233.48.88:8080/api/v1/get/iaa-transactions";
const HallBookingReports_api = "http://13.233.48.88:8080/api/v1/get/hall-booking"

export const postData = createAsyncThunk('data/loginData', async (post, { rejectWithValue }) => {
  try {
    const response = await axios.post(API_URL, post);
    const { accessToken } = response.data.data;

    localStorage.setItem('accessToken', accessToken);

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchCustomerData = createAsyncThunk(
  'data/fetchCustomerData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');

        throw new Error('Access token not found');
      }


      const response = await axios.get(Customer_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.customers;
    } catch (error) {
      console.error('Error fetching customer data:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchHallInfo = createAsyncThunk(
  'data/fetchHallInfo',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');
        throw new Error('Access token not found');
      }

      const response = await axios.get(HallInfo_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.hallRoom;
    } catch (error) {
      console.error('Error fetching hall information:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'data/fetchUserData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');
        throw new Error('Access token not found');
      }

      const response = await axios.get(Users_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.users;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchRoleData = createAsyncThunk(
  'data/fetchRoleData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');
        throw new Error('Access token not found');
      }

      const response = await axios.get(Roles_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.roles;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchLoanData = createAsyncThunk(
  'data/fetchLoanData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');
        throw new Error('Access token not found');
      }

      const response = await axios.get(LoanTypes_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.loanTypes;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchArbitratorData = createAsyncThunk(
  'data/fetchArbitratorData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');
        throw new Error('Access token not found');
      }

      const response = await axios.get(Arbitrators_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.arbitrators;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchIaaTransactionsData = createAsyncThunk(
  'data/fetchIaaTransactionsData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');
        throw new Error('Access token not found');
      }

      const response = await axios.get(IAATransactions_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.iaaTransactions;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchHallBookingReportsData = createAsyncThunk(
  'data/fetchHallBookingReportsData',
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found in local storage');
        throw new Error('Access token not found');
      }

      const response = await axios.get(HallBookingReports_api, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data.data.hallBooking;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    api: [],
    errorMessage: null,
    successMessage: null,
    loggedIn: false,
    customerData: [],
    hallData: [],
    userData: [],
    roleData: [],
    arbitratorData: [],
    iaaReportsData: [],
    hallReportsData: [],
  },
  reducers: {
    resetLoginState: (state) => {
      state.loggedIn = false;
      state.errorMessage = null;
      state.successMessage = null;
    },
    clearSuccessMessage: (state) => {
      state.successMessage = null;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postData.fulfilled, (state, action) => {
        state.api.push(action.payload);
        state.errorMessage = null;
        state.successMessage = 'Login successful!';
        state.loggedIn = true;

        message.success('Login successful!');
      })
      .addCase(postData.rejected, (state, action) => {
        state.errorMessage = action.payload;
        state.successMessage = null;
        state.loggedIn = false;
      })


      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.customerData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })


      .addCase(fetchHallInfo.fulfilled, (state, action) => {
        state.hallData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchHallInfo.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })


      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })


      .addCase(fetchRoleData.fulfilled, (state, action) => {
        state.roleData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchRoleData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })


      .addCase(fetchLoanData.fulfilled, (state, action) => {
        state.loanData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchLoanData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })


      .addCase(fetchArbitratorData.fulfilled, (state, action) => {
        state.arbitratorData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchArbitratorData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })

      .addCase(fetchIaaTransactionsData.fulfilled, (state, action) => {
        state.iaaReportsData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchIaaTransactionsData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })

      .addCase(fetchHallBookingReportsData.fulfilled, (state, action) => {
        state.hallReportsData = action.payload;
        state.errorMessage = null;
      })
      .addCase(fetchHallBookingReportsData.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })

  },
});

export const { resetLoginState, clearSuccessMessage, clearErrorMessage } = apiSlice.actions;
export default apiSlice.reducer;
