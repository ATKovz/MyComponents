import React from 'react';
import styles from './style.less';


/*
*option:
*@totalPage: number
*@handleChange: fn(index)
*
*@option：{
	optionAmount: number perPage
}
*/

export default class PageBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			optionAmount: 10,
			currentIndex: 1,
			list: []
		};
		this.changePage = this.changePage.bind(this);
	}

	changePage(event){
		const { handleChange } = this.props;
		const { target } = event;
		const index = Number(target.title);
		this.setState({ currentIndex: index })
		handleChange(index);
	}

	render(){
		const { changePage } = this;
		const { optionAmount, currentIndex } = this.state;
		const { totalPage } = this.props;
		const item = [];
		if(totalPage <= 10){
			for(let i = 1; i<=totalPage; i++){
				item.push(i);
			}
		}else{
			if(currentIndex <= totalPage -9){
				for(let i = currentIndex; i<(currentIndex+optionAmount) && i<=totalPage; i++){
					item.push(i);
				}
			}else{
				for(let i = totalPage-9; i<=totalPage; i++){
					item.push(i);
				}
			}
		}
		const nextPage = Number(currentIndex)+1;
		const prevPage = Number(currentIndex)-1
		return(
			<div className={styles.page}>
				<div className={styles.pageBar}>
					<button className={styles.pageChange} title={prevPage} onClick={changePage}>
						&lt;上一页
					</button>
							{
								item.map((item, index) => {
									if(index === 8 && totalPage> item+1){
										return (			
											<button 
											key={index}
											className={currentIndex === item? styles.pageCurrent: styles.pageItem} 
											title={currentIndex+5}
											onClick={changePage}
											>
												...
											</button>
										)
									}else if(index === 9 && totalPage> item){
										return (			
											<button 
											key={index}
											className={currentIndex === item? styles.pageCurrent: styles.pageItem} 
											title={totalPage} 
											onClick={changePage}>
											{totalPage}
											</button>
											)
										}else{
											return (			
												<button 
												key={index}
												className={currentIndex === item? styles.pageCurrent: styles.pageItem} 
												title={item} 
												onClick={changePage}>
												{item}
												</button>
											)
										}
								})
							}
					<button className={styles.pageChange} title={nextPage} onClick={changePage}>
						下一页&gt;
						</button>
				</div>
			</div>
		)
	}
}