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
import NotesBar from "./components/NotesBar/NotesBar";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notesOpen: false,
			mapGridX: 1
		}
	}

	initialNotesHeight = () => {
		return window.innerHeight / 42.7;
	};

	onResize = (item) => {
		console.log(item);
		if(item[0].w > 1) {
			this.setState({
				mapGridX: Math.ceil(item[0].w) + 1
			})
		} else {
			this.setState({
				mapGridX: 1
			})
		}
	};

	render() {
		const noteBarGrid = {x: 0, y: 0, w: 1, minW: 1, maxW: 3, minH: this.initialNotesHeight(), h: this.initialNotesHeight(), maxH: this.initialNotesHeight(), isDraggable: false, isResizable: true};
		const mapGrid = {x: 1, y: 0, w: 5, minW: 5, maxH: this.initialNotesHeight(), h: this.initialNotesHeight(), isDraggable: true};

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
					// preventCollision={true}
					onResize={this.onResize}>
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
				</ReactGridLayout>
				<Campaign/>
			</div>
		);
	}
}

export default App;
