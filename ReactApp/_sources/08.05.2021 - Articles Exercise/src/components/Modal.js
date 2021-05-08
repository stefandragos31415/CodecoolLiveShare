const Modal = (props) => {
	return (
		<>
			<div
				className="Modal"
				style={{
					display: props.show ? "block" : "none",
				}}
			>
				{props.children}
			</div>
		</>
	);
};

export default Modal;
