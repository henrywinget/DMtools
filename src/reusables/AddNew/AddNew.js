import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Grid, TextField, MenuItem } from '@material-ui/core';
// import TextField from '@material-ui/core/TextField';


export default function AddNew(props){
		const useStyles = makeStyles(theme => ({
			container: {
				display: 'flex',
				flexWrap: 'wrap',
			},
			textField: {
				marginLeft: theme.spacing(1),
				marginRight: theme.spacing(1),
				width: '90%',
			},
			dense: {
				marginTop: 19,
			},
			menu: {
				width: 200,
			},
		}));

		const classes = useStyles();

		return (
				<Grid item xs={12}>
					<TextField
						id="standard-textarea"
						// label="With placeholder multiline"
						placeholder="Type notes here.."
						multiline
						className={classes.textField}
						margin="normal"
					/>
				</Grid>
		);
}
