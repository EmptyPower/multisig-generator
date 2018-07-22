import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, AppBar } from 'material-ui';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from "react-router";
import MainWrapper from "./MainWrapper";
import CreateScriptedAccount from "./CreateScriptedAccount";
import CreateTransaction from "./CreateTransaction";
import SignTransactionAndSend from "./SignTransactionAndSend";

const drawerWidth = 250;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        zIndex: 1,
        // overflow: 'scroll',
        // position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
    flex: {
        flex: 1,
    },
    
});

class RootContainer extends React.Component {
    state = {
        open: false,
        anchor: 'left',
    };
    
    
    constructor(props) {
        super(props);
        this.showSnackbar = this.showSnackbar.bind(this);
    }
    
    showSnackbar(text) {
        this.setState({ snackbarText: text });
    }
    
    render() {
        const { classes, theme } = this.props;
        const { anchor, open } = this.state;
        
        return (
          <Router>
              <div className={classes.root}>
                  <div className={classes.appFrame}>
                      <AppBar
                        style={{ backgroundColor: theme.palette.primary }}
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                            [classes[`appBarShift-${anchor}`]]: open,
                            flexGrow: 1,
                            flex: 1
                        })}
                      >
                          <Toolbar disableGutters={!open}>
                              <Typography variant="title" color="inherit" noWrap className={classes.flex}>
                                  Waves multisig generator
                              </Typography>
                          </Toolbar>
                      </AppBar>
                      <main
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open,
                        })}
                      >
                          <div className={classes.drawerHeader}/>
                          
                          {/*Web Auth API*/}
                          <Route exact path='/' render={(props) => (
                            <MainWrapper {...props}/>
                          )}/>
                          <Route path="/createAccount" component={CreateScriptedAccount}/>
                          
                          {/*Payment API */}
                          <Route exact path='/createTransaction' render={(props) => (
                            <CreateTransaction {...props}/>
                          )}/>
                          <Route exact path='/signTransaction' render={(props) => (
                            <SignTransactionAndSend {...props}/>
                          )}/>
                      </main>
                  </div>
              </div>
          </Router>
        );
    }
}

RootContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RootContainer);
