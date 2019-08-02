import React, {Component} from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Grid } from '@material-ui/core';
import 'react-resizable/css/styles.css';
import 'react-grid-layout/css/styles.css';
import './App.css';
import 'typeface-roboto';

// components
import Campaign from './components/Campaign';
import TopNav from './components/TopNav';
import NotesBar from "./components/NotesBar/NotesBar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notesOpen: false
		}
	}

	initialNotesHeight = () => {
		return window.innerHeight / 42.7;
	};

	render() {
		const noteBarGrid = {x: 0, y: 0, w: 5, minW: 5, minH: this.initialNotesHeight(), h: this.initialNotesHeight()};

		return (
			<div className="App">
					<TopNav/>
				<ReactGridLayout
					// className="NotesBarLayout"
					cols={12}
					verticalCompact={true}
					isDraggable={false}
					isResizable={true}
					rowHeight={30}
					width={250}>
					<div key="notesComponent"
					     className="NotesBarLayout"
					     data-grid={noteBarGrid}>
						<NotesBar/>
					</div>
				</ReactGridLayout>
				{/*<Campaign/>*/}
			</div>
		);
	}
}

export default App;
