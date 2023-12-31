"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import cities from "@/data/cities";
// import { surahs } from "@/app/data/surah";

const Selector = (props) => {
  const handleChange = (event) => {
    props.setState(event.target.value);
  };
  const handleSurahChange = (e) => {
    props.setState(e.target.value);
    props.setAyahNumber(1);
  };
  if (props.data === "cities") {
    return (
      <FormControl
        fullWidth
        color="success"
        className="form-control"
        sx={{ m: 0, minWidth: 150 }}
      >
        <InputLabel id="cities-label">{props.placeholder}</InputLabel>
        <Select
          labelId="cities-label"
          id="city-selector"
          value={props.state}
          label={props.placeholder}
          onChange={handleChange}
        >
          {cities.map(function (e) {
            return (
              <MenuItem value={e.name} key={e.number}>
                {e.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  } else if (props.data === "surahs") {
    return (
      <FormControl
        fullWidth
        color="success"
        className="form-control"
        sx={{
          m: 0,
          minWidth: 150,
        }}
      >
        <InputLabel id="surahs-label" className="!text-gray-200">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="surahs-label"
          id="surahs-selector"
          value={props.state}
          label={props.placeholder}
          onChange={handleSurahChange}
          sx={{
            color: "#ccc",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
              borderWidth: "2px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2da44e",
              borderWidth: "3px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
              borderWidth: "3px",
            },
            ".MuiSvgIcon-root ": {
              fill: "#8c959f",
            },
          }}
        >
          {props.type.map(function (e) {
            return (
              <MenuItem value={e.number} key={e.name}>
                {e.number} {e.englishName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  } else if (props.data === "ayat") {
    // let numberOfAyahsInSurah = surahs[props.selected - 1].numberOfAyahs;
    let ayat = [];
    for (var i = 1; i <= props.numberOfAyahsInSurah; i++) {
      ayat.push(i);
    }

    return (
      <FormControl
        fullWidth
        color="success"
        className="form-control"
        sx={{ m: 0, minWidth: 150 }}
      >
        <InputLabel id="surahs-label" className="!text-gray-200">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="surahs-label"
          id="surahs-selector"
          value={props.state}
          label={props.placeholder}
          onChange={handleChange}
          sx={{
            color: "#d0d7de",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
              borderWidth: "2px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2da44e",
              borderWidth: "3px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff",
              borderWidth: "3px",
            },
            ".MuiSvgIcon-root ": {
              fill: "#8c959f",
            },
          }}
        >
          {ayat.map(function (e) {
            return (
              <MenuItem value={e} key={e}>
                {e}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  } else {
    return (
      <FormControl
        fullWidth
        color="success"
        className="form-control"
        sx={{ m: 0, minWidth: 150 }}
      >
        <InputLabel id="edition-label" className="!text-gray-200">
          {props.placeholder}
        </InputLabel>
        <Select
          labelId="edition-label"
          id="edition-selector"
          value={props.state}
          label={props.placeholder}
          onChange={handleChange}
          sx={{
            color: "#d0d7de",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "#ccc",
              borderWidth: "2px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#2da44e",
              borderWidth: "3px",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff",
              borderWidth: "3px",
            },
            ".MuiSvgIcon-root ": {
              fill: "#8c959f",
            },
          }}
        >
          {props.type.map(function (e) {
            return (
              <MenuItem value={e.identifier} key={e.identifier}>
                {e.language}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
};

export default Selector;
