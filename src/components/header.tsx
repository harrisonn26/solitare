import React from "react";
import { useAppDispatch } from "../store/store";
import { deal } from "../store/gameSlice";
import { ActionCreators } from "redux-undo";
export default function Header() {
	const dispatch = useAppDispatch();
	return (
		<div style={{ width: "100%", backgroundColor: "rgba(34, 37, 41, 1)" }}>
			<nav
				className="navbar navbar-dark bg-dark"
				style={{ maxWidth: 1200, margin: "0 auto" }}
			>
				<div className="container-fluid">
					<span className="navbar-brand mb-0 h1">Solitare</span>
					<form className="d-flex">
						<button
							type="button"
							className="btn btn-light"
							onClick={() => dispatch(ActionCreators.jump(-2))}
						>
							Undo
						</button>
						<button
							type="button"
							className="btn btn-primary"
							data-bs-toggle="modal"
							data-bs-target="#reg-modal"
						>
							New Game
						</button>
					</form>
				</div>
			</nav>
			<div className="modal fade" id="reg-modal" tabIndex={-1}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">New Game</h5>
							<button className="btn-close" data-bs-dismiss="modal"></button>
						</div>
						<div className="modal-body">
							Are you sure you want to start a new game?
							<br /> Current progress will be lost.
						</div>
						<div className="modal-footer">
							<button className="btn btn-secondary" data-bs-dismiss="modal">
								Cancel
							</button>
							<button
								className="btn btn-primary"
								onClick={() => dispatch(deal())}
								data-bs-dismiss="modal"
							>
								Confirm
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
