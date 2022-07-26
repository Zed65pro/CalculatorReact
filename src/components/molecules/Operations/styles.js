import { makeStyles } from '@material-ui/core/styles';

/**@module molecules/Operations/styles */


/**
 * MakeStyles function which returns the styles for the Operations component.
 * @Function
 * @name makeStyles
 * @returns {makeStyles<Theme>}
 */
export default makeStyles(() => ({
    opButton: {
        borderRadius: '0',
        border: "1px solid rgba(0,0,0,0.1)",
        boxShadow: 'none',
        
    },
    highlight: {
        backgroundColor: "rgba(230, 139, 7, 0.65)",
    }
}));