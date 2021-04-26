import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles({
  searchButton: {
    background: "#283A46",
    border: "1px solid #356680",
    borderRadius: "10px",
    color: "#FFFFFF",
    opacity: "1",
    textAlign: "left",
    fontFamily: "Ubuntu",
    font: "normal normal normal Ubuntu",
    textTransform: "none",
    },
});

const SearchComponent = ({onSearch}) => 
 {

  const classes = useStyles();
  const [search, setSearch] = React.useState(null);

  const Search = (e) => {
    setSearch(e.target.value);

  };


  return (
    <div>
      {/* <Button variant="outlined" color="primary" className={classes.searchButton} //size="small" endIcon={<SearchIcon/>}>Search by order id</Button> */}
      {/* <TextField  label="Search by order id"  className={classes.searchButton} //size="small" endIcon={<SearchIcon/>} /> */}

      {/* <Input  type="text" variant="outlined" color="primary"  placeholder="Search by order id" className={classes.searchButton} //size="small" endIcon={<SearchIcon/>} ></Input> */}
      <TextField
        id="searchId"
        className={classes.searchButton}
        variant="outlined"
        placeholder="Search by bill id"
        size="small"
        onChange={Search}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={() => onSearch(search)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}


export default SearchComponent;
