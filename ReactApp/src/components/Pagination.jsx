import React from "react";

export default function Pagination(props) {
	return (
		<footer className="pagination">
			<button className="page" onClick={() => props.prev()}>
				Prev
			</button>
			{props.data.map((element, index) => (
				<span key={index} className={"page " + (index === props.currentPage && "activePage")} onClick={() => props.change(index)}>
					{index + 1}
				</span>
			))}
			<button className="page" onClick={() => props.next()}>
				Next
			</button>
		</footer>
	);
}
