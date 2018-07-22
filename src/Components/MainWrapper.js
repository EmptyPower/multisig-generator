import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, withStyles } from "material-ui";
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/AddCircle';
import CreateTx from '@material-ui/icons/SubdirectoryArrowRight';
import SignIcon from '@material-ui/icons/AssignmentTurnedIn';


const styles = (theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    noUnderline: {
        textDecoration: 'none'
    },
    toolbar: theme.mixins.toolbar,
});

function MainWrapper(props) {
    const { classes } = props;
    
    return (
      <main className={classes.content}>
          <div className={classes.root}>
              <List component="nav">
                  <Link to="/createAccount" className={classes.noUnderline}>
                      <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="When device is locked"
                      >
                          <ListItemIcon className={classes.icon}>
                              <AddIcon/>
                          </ListItemIcon>
                          <ListItemText
                            primary="New account"
                            secondary="Create new multisig account"
                          />
                      </ListItem>
                  </Link>
                  <Link to="/CreateTransaction"  className={classes.noUnderline}>
                      <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="When device is locked"
                      >
                          <ListItemIcon className={classes.icon}>
                              <CreateTx/>
                          </ListItemIcon>
                          <ListItemText
                            primary="New transaction"
                            secondary="Create new transaction for multisig account"
                          />
                      </ListItem>
                  </Link>
                  <Link to="/signTransaction"  className={classes.noUnderline}>
                      <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="When device is locked"
                      >
                          <ListItemIcon className={classes.icon}>
                              <SignIcon/>
                          </ListItemIcon>
                          <ListItemText
                            primary="Sign transaction"
                            secondary="Sign transaction by it's unique link"
                          />
                      </ListItem>
                  </Link>
              </List>
          </div>
      </main>
    );
}

MainWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainWrapper);
