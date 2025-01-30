import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { Theme, useTheme } from "@mui/material/styles";

const SelectDropdown = () => { 
    const theme = useTheme();
const ITEM_HEIGHT = 24;
const ITEM_PADDING_TOP = 0;  const MenuProps = {
    PaperProps: {
      style: {
        height: "30px",
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: "fit-content",
      },
    },
  };
  const [categoryName, setCategoryName] = useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof categoryName>) => {
    const {
      target: { value },
    } = event;
    setCategoryName(
      typeof value === "string" ? value.split(",") : value // Handle autofill
    );
  };
  const names = ["To DO", "IN PROGRESS", "COMPLETE"];
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
  return (
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
              return "Choose";
            }
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            fontFamily: "Mulish", // Change font family
            fontSize: "12px", // Change font size
            fontWeight: "600", // Change font weight
            height: "34px",
            width: "195px",
            borderRadius: "8px",
            color: "rgba(0, 0, 0, 0.6)",
            backgroundColor: "rgba(241, 241, 241, 0.36)",
          }}
        >
          {/* <MenuItem sx={{ fontSize: "12px" }} disabled value="">
                  <em>Category</em>
                </MenuItem> */}
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
    </div>
  );
};

export default SelectDropdown;
