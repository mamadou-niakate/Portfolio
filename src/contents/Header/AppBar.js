import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Grid";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";

class Appbar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Grid container justify="space-between"  alignItems="center">
              <Grid item> <img src="/images/logo.png"  alt="logo" style={{width:"60px", height:"40"}}/></Grid>
              <Grid container justify="space-around" item style={{width: '300px'}}>
                <Grid item> <Typography variant="h5" noWrap> <Link to="/"> Portfolio </Link></Typography> </Grid>
                <Grid item> <Typography variant="h5" noWrap> Projets </Typography> </Grid>
                <Grid item> <Typography variant="h5" noWrap> A Propos </Typography> </Grid>
                <Grid item> <Typography variant="h5" noWrap> Contact </Typography> </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Appbar;
