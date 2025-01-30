import React from 'react'
import { SimpleEditor } from "../TextEditor/SimpleEditor";
import WebDatePicker from "../DatePicker/WebDatePicker";
import SelectDropdown from "../Select/SelectDropdown";
import { FilePond, registerPlugin } from 'react-filepond';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";

const CreateTask = () => {
  return (
    <div>
        <FormControl sx={{}} variant="outlined">
            <OutlinedInput
              sx={{
                height: "36px",
                width: "615px !important",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: "Mulish",
                backgroundColor: "rgba(241, 241, 241, 0.36)",
              }}
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder="Task title"
            />
          </FormControl>
          <SimpleEditor />
          <div className="flex gap-4 mb-3">
            {/* task Category */}
            <div
              className="flex flex-col w-[28%] py-2 font-[600]"
              style={{
                fontSize: "12px",
                fontFamily: "Mulish",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              Task Category*
              <div className="flex mt-2">
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "41px",
                    width: "75px",
                    border: "1px solid rgba(0, 0, 0, 0.19)",
                    color: "#000000",
                    fontSize: "10px",
                    fontWeight: "700",
                    padding: "0",
                    marginRight: "5px",
                  }}
                >
                  Work
                </Button>
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "41px",
                    width: "75px",
                    border: "1px solid rgba(0, 0, 0, 0.19)",
                    color: "#000000",
                    fontSize: "10px",
                    fontWeight: "700",
                    padding: "5px",
                  }}
                >
                  Personal
                </Button>
              </div>
            </div>
            {/* Due on */}
            <div
              className="flex flex-col w-[30%] py-2 font-[600]"
              style={{
                fontSize: "12px",
                fontFamily: "Mulish",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              Due on*
              <div className="mt-2">
                <WebDatePicker type='create-task'/>
              </div>
            </div>
            {/* Task Status */}
            <div
              className="flex flex-col w-[30%] py-2 font-[600]"
              style={{
                fontSize: "12px",
                fontFamily: "Mulish",
                color: "rgba(0, 0, 0, 0.6)",
              }}
            >
              Task Status*
              <div className="mt-2">
                <SelectDropdown />
              </div>
            </div>
          </div>
          <div className="w-[100%] flex flex-col" 
            style={{
                fontSize: "14px",
                fontFamily: "Mulish",
                fontWeight: '600',
                color: "rgba(0, 0, 0, 0.6)",
              }}>
            Attachment
            <FilePond allowMultiple={true} maxFiles={3} server="/api" />
          </div>
    </div>
  )
}

export default CreateTask