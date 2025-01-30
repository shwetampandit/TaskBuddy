import { useState } from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import TaskIcon from "../assets/svg/task_icon.svg";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import ListIcon from "../assets/svg/list_icon.svg";
import BoardIcon from "../assets/svg/board_icon.svg";
import SearchIcon from "../assets/svg/search_icon.svg";
import "../index.css";
import Button from "@mui/material/Button";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import "filepond/dist/filepond.min.css";
import { ListView } from "./ListView/ListView";
import CreateTask from "./Forms/CreateTask";

const ITEM_HEIGHT = 24;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      height: "30px",
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "fit-content",
    },
  },
};

const names = ["Work", "Personal"];

const TaskList = [
  {
    task_id: "1",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 1,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "2",
    task_name: "Interview1",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "personal",
    order: 2,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "3",
    task_name: "Interview2",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 3,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "4",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 4,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "1",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 1,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "1",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 1,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "1",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 1,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "1",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 1,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "1",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 1,
    user_email: "shwetampandit@gmail.com",
  },
  {
    task_id: "1",
    task_name: "Interview",
    due_date: "22/12/24",
    task_status: "to_do",
    task_category: "work",
    order: 1,
    user_email: "shwetampandit@gmail.com",
  },
];

function getStyles(
  name: string,
  categoryName: readonly string[],
  theme: Theme
) {
  return {
    fontWeight: categoryName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function Home() {
  const theme = useTheme();
  const auth = getAuth();
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState<string[]>([]);
  const name = auth?.currentUser?.displayName?.split(" ")[0];
  const userPhoto = auth?.currentUser?.providerData[0].photoURL;
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const handleCloseCreateTaskModal = () => setShowCreateTaskModal(false);
  const handleShowCreateTaskModal = () => setShowCreateTaskModal(true);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      sessionStorage.clear();
      indexedDB.deleteDatabase("firebaseLocalStorageDb");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleChange = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      typeof value === "string" ? value.split(",") : value // Handle autofill
    );
  };

  return (
    <div>
      <div className="text-[#000000]" style={{ fontFamily: "Mulish" }}>
        <div className="flex justify-between">
          {/* TaskBuddy Icon */}
          <div
            className="flex justify-left items-center"
            style={{ gap: "5px" }}
          >
            <div>
              <img src={TaskIcon} alt="" />
            </div>
            <div className="text-[1.5rem] font-[600]" style={{ gap: "5px" }}>
              TaskBuddy
            </div>
          </div>
          {/* User image & user button */}
          <Button
            style={{
              backgroundColor: "none",
              color: "rgba(0, 0, 0, 0.6)",
              fontFamily: "Mulish",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            <img
              src={userPhoto}
              alt=""
              style={{
                height: "36px",
                borderRadius: "50%",
                marginRight: "5px",
              }}
            />
            {name}
          </Button>
        </div>
        {/* List View & Board View Toggle Button */}
        <div className="flex py-2">
          <Nav fill variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1" href="" className="custom-nav-link">
                <div className="font-[1rem] font-[600] flex items-center gap-1">
                  <img src={ListIcon} alt="" />
                  List
                </div>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="custom-nav-link">
                <div className="font-[1rem] font-[600] flex items-center gap-1">
                  <img src={BoardIcon} alt="" />
                  Board
                </div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {/* Filter By : category, due date , Search, Add task button */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <div style={{ fontSize: "12px", color: "rgba(0, 0, 0, 0.6)" }}>
              Filter By:
            </div>
            {/* Replace "Category" with Multiple Select */}
            <FormControl sx={{ m: 1, width: "fit-content" }}>
              <Select
                multiple
                displayEmpty
                value={categoryName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return "Category";
                  }
                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  fontFamily: "Mulish", // Change font family
                  fontSize: "12px", // Change font size
                  fontWeight: "600", // Change font weight
                  height: "30px",
                  width: "90px",
                  borderRadius: "60px",
                  color: "rgba(0, 0, 0, 0.6)",
                }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, categoryName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div>
              <FormControl sx={{ width: "fit-content" }}>
                <Select
                  multiple
                  displayEmpty
                  value={categoryName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return "Due Date";
                    }
                    return selected.join(", ");
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    fontFamily: "Mulish", // Change font family
                    fontSize: "12px", // Change font size
                    fontWeight: "600", // Change font weight
                    height: "30px",
                    width: "90px",
                    borderRadius: "60px",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {/* <MenuItem sx={{ fontSize: "12px" }} disabled value="">
                  <em>Category</em>
                </MenuItem> */}
                  {/* {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, categoryName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))} */}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <FormControl sx={{}} variant="outlined">
                <OutlinedInput
                  sx={{
                    height: "36px",
                    width: "12.75rem",
                    borderRadius: "60px",
                    fontSize: "12px",
                    fontWeight: "600",
                    fontFamily: "Mulish",
                  }}
                  id="outlined-adornment-weight"
                  startAdornment={
                    <InputAdornment position="start">
                      <img src={SearchIcon} alt="" />
                    </InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                  placeholder="Search"
                />
              </FormControl>
            </div>
            <div>
              <Button
                sx={{
                  backgroundColor: "#7B1984",
                  borderRadius: "60px",
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Mulish",
                  textTransform: "none",
                  width: "7.5rem",
                  "&:hover": {
                    backgroundColor: "#d76ce4",
                  },
                }}
                onClick={handleShowCreateTaskModal}
                variant="contained"
                disableElevation
              >
                ADD TASK
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={handleSignOut}>Signout</button>
      <h1>You're currently logged in.</h1> */}
      <Modal
        show={showCreateTaskModal}
        onHide={handleCloseCreateTaskModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTask />
        </Modal.Body>
        <Modal.Footer>
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "60px",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Mulish",
              textTransform: "none",
              width: "6rem",
              color: "rgba(9, 9, 9, 1)",
              border: "1px solid rgba(0, 0, 0, 0.19)",
              marginRight: "0.5rem",
            }}
            onClick={handleCloseCreateTaskModal}
          >
            CANCLE
          </Button>
          <Button
            sx={{
              backgroundColor: "#7B1984",
              borderRadius: "60px",
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "Mulish",
              textTransform: "none",
              width: "6rem",
              color: "white",
              "&:hover": {
                backgroundColor: "#d76ce4",
              },
            }}
          >
            CREATE
          </Button>
        </Modal.Footer>
      </Modal>
      {/* List View */}
      <div>
        <ListView taskList={TaskList} />
      </div>
    </div>
  );
}
