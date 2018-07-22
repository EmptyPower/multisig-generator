import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Typography, withStyles } from "material-ui";
import { Link } from "react-router-dom";

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});

function SignTransactionAndSend(props) {
    const { classes } = props;
    
    return (
      <main className={classes.content}>
          <div className={classes.root}>
          
          </div>
      </main>
    );
}

SignTransactionAndSend.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignTransactionAndSend);
