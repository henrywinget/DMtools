import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

// reusables
import AddNew from '../../reusables/AddNew';
import HideOnScroll from '../../reusables/HideOnScroll';

import './NotesBar.css'

const NotesBar = (props) =>  {

		return (
			<div>
				<HideOnScroll {...props}>
					<AppBar className="NotesBar">
						<Toolbar>
							<Typography variant="h6">Notes</Typography>
						</Toolbar>
					</AppBar>
				</HideOnScroll>
				<Grid container spacing={3}>
					<AddNew textWidth={300}/>
				</Grid>
			</div>
		);
};

export default NotesBar;