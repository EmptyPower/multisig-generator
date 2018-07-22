import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "material-ui";

const styles = (theme) => ({
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
});


class CreateScriptedAccount extends React.Component {
    
    state = {
        publicKeys: [],
        nOfM: 0,
        
    };
    
    
    getScriptBody = () => {
        
        const { publicKeys } = this.state;
        
        const publicKeysText = publicKeys.map((publicKey, index) => {
            return `let user${index}  = base58'${publicKey} \n`;
        });
        
        const signedText = publicKeys.map((publicKey, index) => {
            return `let user${index}Signed  = if(sigVerify(tx.bodyBytes, tx.proofs[${index}], user${index} )) then 1 else 0\n`;
        });
        
        
        let sumUsers = [];
    
        publicKeys.forEach((publicKey, index) => {
            sumUsers.push(`user${index}`);
        });
        
        let sumUsersText = sumUsers.join(' + ');
        
        return `
        ${publicKeysText}\n
        ${signedText}\n
        ${sumUsersText} >= ${this.state.nOfM}`
    };
    
    
    render() {
        const { classes } = this.props;
        return (
          <main className={classes.content}>
              <div className={classes.root}>
                  
                  <pre>
                      ${this.getScriptBody()}
                  </pre>
              </div>
          </main>
        );
        
    }
}

CreateScriptedAccount.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateScriptedAccount);
