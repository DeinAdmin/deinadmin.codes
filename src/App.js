import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Header from "./components/Header";
import {createMuiTheme, MuiThemeProvider, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@material-ui/core";
const App = () => {
  const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
  })
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if(localStorage.getItem("cookieAgreement") === "true") {

    } else {
      setTimeout(() => {
        setOpen(true)
      }, 1000)
    }
  });

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("cookieAgreement", "true");
  };

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Dialog
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"This website uses cookies."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By using this website you agree that cookies will be stored in your local storage.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant={"contained"} color="secondary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>

        <div className={"App"}>
          <Header />
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Default />
            </Switch>
          </main>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
