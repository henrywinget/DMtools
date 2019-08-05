import React, { useState } from 'react';
import HideOnScroll from "../../reusables/HideOnScroll/HideOnScroll";
import Grid from "@material-ui/core/Grid/Grid";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';

// reusables
import AddNew from "../../reusables/AddNew/AddNew";

const Map = (props) => {

	return (
		<div>
			<HideOnScroll {...props}>
				<AppBar className="NotesBar">
					<Toolbar>
						<Typography variant="h6">Map</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Grid container spacing={3}>
				{/*<AddNew textWidth={300}/>*/}
			</Grid>
		</div>
	);
};

export default Map;