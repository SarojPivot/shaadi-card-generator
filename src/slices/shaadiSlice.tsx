import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IShaadiForm } from '../shaadi-interface';

interface DataState {
  formData: IShaadiForm
}

const initialFormData = {
  groomName: '',
  brideName: '',
  weddingDate: '',
  venue: '',
  haldiDate: '',
  haldiTime: '',
  baraatTime: '',
  receptionDate: '',
  receptionTime: '',
  }

const initialState: DataState = {
  formData: initialFormData
};


const shaadiSlice = createSlice({
  name: 'shaadi',
  initialState,
  reducers: {
    saveForm: (state, action: PayloadAction<IShaadiForm>) => {
      state.formData=action.payload
    },
  },
});

export const { saveForm } = shaadiSlice.actions;
export default shaadiSlice.reducer;