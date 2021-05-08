import React, { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

function Article({ title, id }) {
	const [content, setContent] = useState("");
	const [showContent, setShowContent] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const toggleSelectContent = () => {
		if (showContent === false) {
			axios
				.post("http://apps.loopevo.com/apis/posts/post.php", {
					id: id,
				})
				.then((response) => {
					setContent(response.data.content);
					setShowContent(true);
				})
				.catch(() => {
					console.log("error");
				});
		} else {
			setShowContent(false);
		}
	};

	const deletePost = () => {
		axios
			.post("http://apps.loopevo.com/apis/posts/delete.php", {
				id: id,
			})
			.then((response) => {
				window.location.reload();
			})
			.catch(() => {
				console.log("error");
			});
	};

	return (
		<>
			<Modal show={showDeleteModal}>
				<button onClick={() => deletePost()}>OK</button>
				<button onClick={() => setShowDeleteModal(false)}>CANCEL</button>
			</Modal>
			<div className="card full-width select-title">
				<strong onClick={() => toggleSelectContent()}>{title}</strong>
				<button onClick={() => setShowDeleteModal(true)}>Delete</button>
				{showContent && <p className="article-content" dangerouslySetInnerHTML={{ __html: content }}></p>}
			</div>
		</>
	);
}

export default Article;
