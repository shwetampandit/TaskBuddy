import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./ListView.css";
import ExpandMoreIcon from "./chevron-down.svg";
import WebDatePicker from "../DatePicker/WebDatePicker";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import EnterIcon from './enter.svg';
import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

export const ListView = ({ taskList }) => {
  const [isTaskRowOpen, setIsStateRowOpen] = useState(false);
  const [isTaskStatusOpen, setIsTaskStatusOpen] = useState(false);
//   const [isTaskRowOpen, setIsStateRowOpen] = useState(false);
  const status = ["TO-DO", "IN-PROGRESS", "COMPLETED"];
  return (
    <div>
      <div
        className="flex font-[700] pt-2 mt-4"
        style={{
          fontFamily: "Mulish",
          fontSize: "14px",
          fontWeight: "700",
          lineHeight: "19.6px",
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          color: "rgba(0, 0, 0, 0.6)",
          borderTop: "1.5px solid rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="w-[35%]" style={{ marginLeft: "10px" }}>
          Task Name
        </div>
        <div className="w-[20%]">Due on</div>
        <div className="w-[20%]">Task Status</div>
        <div className="w-[25%]">Task Category</div>
      </div>
      <div className="my-2">
        <Accordion sx={{ overflow: "hidden" }}>
          <AccordionSummary
            sx={{
              height: "46px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              backgroundColor: "rgba(250, 195, 255, 1)",
              "&:hover": {
                backgroundColor: "rgba(250, 150, 255, 0.6)", // Change to your desired hover color
                cursor: "pointer", // Optional: change the cursor to a pointer
              },
            }}
            expandIcon={<img src={ExpandMoreIcon} height={"24px"}></img>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "Mulish",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              ToDo (3)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div
              onClick={() => setIsStateRowOpen(!isTaskRowOpen)}
              style={{
                fontSize: "14px",
                fontFamily: "Mulish",
                fontWeight: "700",
                borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "0.25rem 1.5rem",
                cursor: "pointer",
              }}
            >
              <span
                style={{ color: "rgba(123, 25, 132, 1)", fontSize: "20px" }}
              >
                +
              </span>{" "}
              ADD TASK
            </div>
            {isTaskRowOpen && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.5rem 2.5rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <div className="flex">
                  <div
                    className="w-[34%]"
                    style={{
                      fontSize: "14px",
                      fontFamily: "Mulish",
                      fontWeight: "500",
                      color: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    Task Title
                  </div>
                  <div className="w-[21%]">
                    <WebDatePicker type="list-view" />
                  </div>
                  <div className="w-[20%]">
                    <IconButton
                      style={{
                        border: "2px solid rgba(0, 0, 0, 0.1)",
                        borderRadius: "50%",
                      }}
                      aria-label="add"
                      size="small"
                    >
                      <AddIcon fontSize="inherit" />
                    </IconButton>
                  </div>
                  <div className="w-[20%]">
                    <IconButton
                      style={{
                        border: "2px solid rgba(0, 0, 0, 0.1)",
                        borderRadius: "50%",
                      }}
                      aria-label="add"
                      size="small"
                      onClick={() => setIsTaskStatusOpen(!isTaskStatusOpen)}
                    >
                      <AddIcon fontSize="inherit" />
                    </IconButton>
                    {isTaskStatusOpen && 
                    <div>
                    {status.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                  >
                    {name}
                  </MenuItem>
                ))}
                    </div>}
                  </div>
                </div>
                <div className="flex p-2 gap-2">
                      <Button sx={{
                        backgroundColor: "#7B1984",
                        borderRadius: "60px",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Mulish",
                        textTransform: "none",
                        width: "4.5rem",
                        color: "white",
                        height: '28px',
                        "&:hover": {
                            backgroundColor: '#d76ce4'
                        }
                      }}>ADD 
                      <img src={EnterIcon} style={{marginLeft: '5px'}} />
                      </Button>
                      <Button sx={{
                        backgroundColor: "white",
                        borderRadius: "60px",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Mulish",
                        textTransform: "none",
                        width: "6rem",
                        color: "black",
                        height: '28px',
                        "&:hover": {
                            backgroundColor: 'lightgray'
                        }
                      }}>CANCEL
                      </Button>
                </div>
              </div>
            )}
            <div> task list table</div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="my-3">
        <Accordion sx={{ overflow: "hidden" }}>
          <AccordionSummary
            sx={{
              height: "46px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              backgroundColor: "rgba(133, 217, 241, 1)",
              "&:hover": {
                backgroundColor: "rgba(133, 217, 241, 0.6)", // Change to your desired hover color
                cursor: "pointer", // Optional: change the cursor to a pointer
              },
            }}
            expandIcon={<img src={ExpandMoreIcon} height={"24px"}></img>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "Mulish",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              In-Progress (3)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="my-2">
        <Accordion sx={{ overflow: "hidden" }}>
          <AccordionSummary
            sx={{
              height: "46px",
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
              backgroundColor: "rgba(206, 255, 204, 1)",
              "&:hover": {
                backgroundColor: "rgba(206, 255, 204, 0.6)", // Change to your desired hover color
                cursor: "pointer", // Optional: change the cursor to a pointer
              },
            }}
            expandIcon={<img src={ExpandMoreIcon} height={"24px"}></img>}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "Mulish",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Completed (3)
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
