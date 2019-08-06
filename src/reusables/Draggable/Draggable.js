import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

import HideOnScroll from '../../reusables/HideOnScroll';
import AddNew from '../../reusables/AddNew';

const Draggable = (props) => {
	return (
		<div>
			{/*<HideOnScroll {...props}>*/}
				<AppBar className="NotesBar">
					<Toolbar>
						<Typography variant="h6">{props.title}</Typography>
					</Toolbar>
				</AppBar>
			{/*</HideOnScroll>*/}
			<Grid container spacing={3}>
				<AddNew textWidth={300}/>
			</Grid>
		</div>
	);
};

export default Draggable;