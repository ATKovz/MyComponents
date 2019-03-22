import React from 'react';
import styles from './style.less';
import { formatMessage } from "umi/locale";
import brandLogoImg from "../../assets/nav_logo_1.png";

class NavBar extends React.Component{
	constructor(){
		super();
		this.state = {
			show: false,
			navList: [
				{ key: '首页' },
				{ key: '3月女神' },
				{ key: 'skinfood专区' },
				{ key: '新品上市' },
			],
			categoryList: [
				{
					icon: "&#xe6d4;",
					title: "极致美护",
					detailList: [
						{
							title: '护肤',
							item: ['面膜', '化妆水', '洁面', '面霜', '乳液', '精华', '眼唇护理', '精华']
						},
						{
							title: '彩妆',
							item: ['卸妆', '隔离/底妆', '唇妆', '眼妆', '散粉/腮红']
						},
						{
							title: '个护',
							item: ['护手霜', '沐浴/润肤', '洗发/护发']
						},
					]
				},
				{
					icon: "&#xe7aa;",
					title: "母婴护理",
					detailList: [
						{
							title: '护肤',
							item: ['面膜', '化妆水', '洁面', '面霜', '乳液', '精华', '眼唇护理', '精华']
						},
						{
							title: '彩妆',
							item: ['卸妆', '隔离/底妆', '唇妆', '眼妆', '散粉/腮红']
						},
						{
							title: '个护',
							item: ['护手霜', '沐浴/润肤', '洗发/护发']
						},
					]
				},
				{
					icon: "&#xec44;",
					title: "家居生活",
					detailList: [
						{
							title: '护肤',
							item: ['面膜', '化妆水', '洁面', '面霜', '乳液', '精华', '眼唇护理', '精华']
						},
						{
							title: '彩妆',
							item: ['卸妆', '隔离/底妆', '唇妆', '眼妆', '散粉/腮红']
						},
						{
							title: '个护',
							item: ['护手霜', '沐浴/润肤', '洗发/护发']
						},
					]
				},
				{
					icon: "&#xe78e;",
					title: "食品保健",
					detailList: [
						{
							title: '护肤',
							item: ['面膜', '化妆水', '洁面', '面霜', '乳液', '精华', '眼唇护理', '精华']
						},
						{
							title: '彩妆',
							item: ['卸妆', '隔离/底妆', '唇妆', '眼妆', '散粉/腮红']
						},
						{
							title: '个护',
							item: ['护手霜', '沐浴/润肤', '洗发/护发']
						},
					]
				},
			]
		}
	}

	render() {
		const { navList, categoryList } = this.state;
		return (
			<nav className={styles.navBlock}>
				<div className={styles.navBoth}>
				&#xe761;&nbsp;所有分类
					<div className={styles.navList}>
					{
							categoryList.map((item, index) => {
								return (
									<div className={styles.navListItem} key={index}>
											<div 
												className={styles.navListTitle} 
												dangerouslySetInnerHTML={{ __html: `${item.icon}&nbsp;&nbsp;&nbsp;${item.title}`}} 
											/>
											<div className={styles.arrow} />
										<div className={styles.mask} />
										<div className={styles.categoryBlock}>
											<div className={styles.categoryBrandlist}>
												<img src={brandLogoImg} />
												<img src={brandLogoImg} />
												<img src={brandLogoImg} />
												<img src={brandLogoImg} />
												<img src={brandLogoImg} />
											</div>
											<div className={styles.categoryItem}>
												{
													item.detailList.map((midItem, midIndex) => {
														return(
															<div key={midIndex}>
																<h3>{midItem.title}</h3>
																<div className={styles.categoryItemList}>
																{
																	midItem.item.map((subItem, subIndex) => {
																		return(
																			<div className={styles.item} key={subIndex}>{subItem}</div>
																		)
																	})
																}
																</div>
															</div>
														)
													})
												}
											</div>
											<div className={styles.categoryAd} />
										</div>
									</div>
									)
								})
							}
					</div>
				</div>
					{
						navList.map((item, index) => {
							return (
									<div className={styles.navItem} key={index}>
									{item.key}
									</div>
								)
						})
					}
			</nav>
		)
	}
}

export default NavBar;