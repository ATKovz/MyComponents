import styles from './style.less';

/*
*@wrapHeight: number 
*@wrapWidth: number
*@imgSrc: string
*/

class CursorZoom extends React.Component{
	constructor(props){
		super(props);
		this.zoom = this.zoom.bind(this);
		this.state = {
			offsetX: 0,
			offsetY: 0,
			show: false,
			cursorSize: this.props.wrapHeight/2,
			cursorTop: 0,
			cursorLeft: 0,
			zoomIndex: 2
		}
	}
	
	zoom(events){
		const X = events.offsetX;
		const Y = events.offsetY;
		const { wrapHeight, wrapWidth } = this.props;
		const { cursorSize } = this.state;
		if(X >= cursorSize/2 && X <= wrapWidth - cursorSize/2){
			this.setState({
				offsetX: events.offsetX, 
			});
		}
		if(X <=cursorSize/2 && X>=0){
			this.setState({
				offsetX: cursorSize/2
			})
		}
		if(X > wrapWidth - cursorSize/2 && X < wrapWidth){
			this.setState({
				offsetX: wrapWidth - cursorSize/2
			})
		}
		if(Y >= cursorSize/2 && Y <= wrapHeight - cursorSize/2){
			this.setState({
				offsetY: events.offsetY, 
			});
		}
		if(Y>=0 && Y<=cursorSize/2){
			this.setState({
				offsetY: cursorSize/2
			})
		}

		if(Y>=wrapHeight - cursorSize/2){
			this.setState({
				offsetY: wrapHeight - cursorSize/2
			})
		}
		this.setState({
			cursorLeft: this.state.offsetX - this.state.cursorSize/2,
			cursorTop: this.state.offsetY - this.state.cursorSize/2,
		})
	}

	showZoomArea(event, type){
		if(type === 'bind'){
			event.target.addEventListener('mousemove', this.zoom)
			this.setState({
				show: true
			})
		}else{
			event.target.removeEventListener('mousemove', this.zoom);
			this.setState({
				show: false
			})
		}
	}

	render(){
		const { imgSrc, wrapWidth, wrapHeight } = this.props;
		const { cursorTop, cursorLeft, cursorSize, zoomIndex, show } = this.state;
		return (
			<div className={styles.zoomWrapper}
				style={{
					"border": "1px solid #ccc"
				}}>
				<div 
					className={styles.zoomWrapper}
					style={{
						width: wrapWidth,
						height: wrapHeight
					}}
				>
					<img 
						src={imgSrc} 
						style={{
							width: wrapWidth-2,
							height: wrapHeight-2
						}}
					/>
					<div>
						<div
							className={show? styles.zoomMouse: styles.hide}
							style={{
								top: cursorTop,
								left: cursorLeft,
								width: cursorSize,
								height: cursorSize
							}}
						/>
					</div>
					<div
						className={styles.zoomCover}
						onMouseOver={() => this.showZoomArea(event, 'bind')}
						onMouseOut={() => this.showZoomArea(event, 'cancel')}
						style={{
							width: wrapWidth,
							height: wrapHeight
						}}
					/>
				</div>
				<div
					className={show? styles.zoomArea: styles.hide}
					style={{
						backgroundImage: `url('${imgSrc}')`,
						backgroundSize: `${wrapWidth*zoomIndex}px ${wrapHeight*zoomIndex}px`,
						backgroundPosition: `${-(this.state.offsetX-this.state.cursorSize/2)*zoomIndex}px ${-(this.state.offsetY-this.state.cursorSize/2)*zoomIndex}px`,
						width: wrapWidth,
						height: wrapHeight,
						left: wrapWidth,
						top: 0
					}}
				/>
			</div>
		)
	}
}

export default CursorZoom;
