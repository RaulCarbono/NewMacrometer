import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DateContainer } from './DateStyled';

// import TextField from '@mui/material/TextField';

export const Date = () => {
  return (
    <DateContainer>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          size="small"
          sx={{
            borderRadius: '0px 0px 18px 18px',
          }}
        />
      </LocalizationProvider>
    </DateContainer>
  );
};
