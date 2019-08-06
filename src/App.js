import React, {Component} from 'react';
import ReactGridLayout from 'react-grid-layout';
import { Grid } from '@material-ui/core';
import 'react-resizable/css/styles.css';
import 'react-grid-layout/css/styles.css';
import './App.css';
import 'typeface-roboto';

// components
import Campaign from './components/Campaign';
import Map from './components/Map';
import TopNav from './components/TopNav';
import NotesBar from "./components/NotesBar";

// reusables
import Draggable from './reusables/Draggable';

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
		const draggables = [
			{
				title: 'Locations',
				grid: {x: 9, y: 0, w: 5, minW: 2, maxH: this.initialNotesHeight(), h: 3, isDraggable: true}
			},
			{
				title: 'Players (PCs)',
				grid: {x: 7, y: 3, w: 5, minW: 2, maxH: this.initialNotesHeight(), h: 3, isDraggable: true}

			},
			{
				title: 'Non-players (NPCs)',
				grid: {x: 7, y: 6, w: 5, minW: 2, maxH: this.initialNotesHeight(), h: 3, isDraggable: true}

			},
			{
				title: 'Encounters',
				grid: {x: 7, y: 9, w: 5, minW: 2, maxH: this.initialNotesHeight(), h: 3, isDraggable: true}

			},
		];

		const noteBarGrid = {x: 0, y: 0, w: 1, minW: 1, maxW: 3, minH: 3, h: this.initialNotesHeight(), maxH: this.initialNotesHeight(), isResizable: true};
		const mapGrid = {x: 1, y: 0, w: 6, minW: 5, maxH: this.initialNotesHeight(), h: this.initialNotesHeight(), isDraggable: true};

		return (
			<div className="App">
					<TopNav/>
				<ReactGridLayout
					// className="NotesBarLayout"
					cols={12}
					verticalCompact={true}
					rowHeight={30}
					width={window.innerWidth}
					compactType={"horizontal"}
					verticalCompact={false}
					// preventCollision={true}
					>
					<div key="notesComponent"
					     className="NotesBarLayout Draggable-layout"
					     data-grid={noteBarGrid}>
						<NotesBar/>
					</div>
					<div key="mapsComponent"
					     className="MapsLayout Draggable-layout"
					     data-grid={mapGrid}>
						<Map/>
					</div>
					{draggables.map((drag, index) =>
						<div key={`${drag.title}Component`}
						     className={`${drag.title}Layout Draggable-layout`}
						     data-grid={drag.grid}>
							<Draggable
							title={drag.title}/>
						</div>
					)}
				</ReactGridLayout>
				<Campaign/>
			</div>
		);
	}
}

export default App;
