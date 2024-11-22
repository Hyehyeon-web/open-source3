import { useState, useEffect } from "react";
import  data from './data';

function Item() {
	const [items, setItems] = useState(data[0]); // state 값, state 변경 함수

	useEffect(() => {
		let btn=document.querySelectorAll(".btn");

		btn.forEach(function(item1, i){
			item1.addEventListener("click", function(e){
				e.preventDefault();

				setItems(data[i]);
				// console.log(data[i]);

				btn.forEach(function(item2, j){
					if(j == i){
						item2.classList.add("on");
					}
					else{
						item2.classList.remove("on");
					}
				});
			});
		});
	});

	return (
		<>
			< div className = "item_wrap" >
				<ul>
					{
						items.map((d, i) =>
							<li key={i + 1}>
								<a href=""><img src={"/images/"+d.image} alt={"produce1"+(i+1)} /></a>
								<div className="item_desc">
									<strong>{d.title}</strong>
									<p><span>{d.sale}</span>{d.dollar}</p>
									<i>{d.won}</i>
								</div>
							</li>
						)
					}	

				</ul>
			</div >
			<div className="btn_wrap">
				{/*
				<div className={ (items === dataset1) ? "btn on" : "btn" } onClick={ () =>setItems(dataSet1) }></div>
				<div className={ (items === dataset2) ? "btn on" : "btn" } onClick={ () => setItems(dataSet2) }></div>
				*/}

				<div className="btn on"></div>
				<div className="btn"></div>
			</div>
		</>
	);
}

export default Item;