import React from "react";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CalendarIcon from "./calender_icon.svg";

const WebDatePicker = (props) => {
  console.log(props.type)
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          slots={{
            openPickerIcon: () => (
              <img src={CalendarIcon} alt="Calendar Icon" />
            ),
          }}
          sx={{
            "& .MuiCalendarPicker-root": {
              backgroundColor: "#f5f5f5", // Calendar background color
              borderRadius: "12px", // Rounded corners for the calendar
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Calendar shadow
              border: "1px solid #ddd", // Calendar border
            },
            "& .MuiDayPicker-daySelected": {
              backgroundColor: "#7B1984", // Selected day background color
              color: "#fff", // Selected day text color
            },
            "& .MuiDayPicker-day:hover": {
              backgroundColor: "#ddd", // Hover effect on day
            },
          }}
          slotProps={{
            textField: {
              variant: "outlined",
              size: "small",
              sx: {
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px", // Rounded corners for the input
                  backgroundColor: "rgba(241, 241, 241, 0.36)", // Background color
                  height: "32px", // Adjust height
                  padding: "0 12px 0 0",
                },
                "& .MuiOutlinedInput-input": {
                  fontFamily: "Mulish", // Font family
                  fontSize: "12px", // Font size
                  fontWeight: "600", // Font weight
                },
              },
            },
          }}
          format="DD/MM/YYYY"
        />
      </LocalizationProvider>
    </div>
  );
};

export default WebDatePicker;
