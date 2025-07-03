import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataItem {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface DataTableState {
  data: DataItem[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  search: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

const initialState: DataTableState = {
  data: [],
  loading: false,
  error: null,
  currentPage: 1,
  pageSize: 10,
  totalItems: 0,
  totalPages: 0,
  search: '',
  sortBy: 'id',
  sortOrder: 'asc',
};

const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setData: (state, action: PayloadAction<DataItem[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
      state.currentPage = 1; // Reset to first page when changing page size
    },
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems = action.payload;
      state.totalPages = Math.ceil(action.payload / state.pageSize);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.currentPage = 1; // Reset to first page when searching
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.sortOrder = action.payload;
    },
    resetFilters: state => {
      state.currentPage = 1;
      state.pageSize = 10;
      state.search = '';
      state.sortBy = 'id';
      state.sortOrder = 'asc';
    },
  },
});

export const {
  setLoading,
  setData,
  setError,
  setCurrentPage,
  setPageSize,
  setTotalItems,
  setSearch,
  setSortBy,
  setSortOrder,
  resetFilters,
} = dataTableSlice.actions;

export default dataTableSlice.reducer;
