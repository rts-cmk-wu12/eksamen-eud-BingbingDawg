// taget fra repitation

"use client";

import updateUser from "@/actions/update-user";
import { useActionState, useEffect, useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "showUpdateModal":
			return {
				...state,
				showModal: "true",
				currentUser: action.currentUser
			}
		case "hideModal":
			return {
				...state,
				currentUser: null,
				showModal: false
			}
	}
}

export default function UpdateUserForm() {
	const [updateFormState, updateFormAction] = useActionState(updateUser, null);
	const [state, dispatch] = useReducer(reducer, {
		showModal: false,
		currentUser: null,

	});

	useEffect(function () {
		if (!updateFormState) return;

		if (updateFormState.success) dispatch({ type: "hideModal" });
	}, [updateFormState]);

	return (
		<>
			<form className="mx-auto mt-[91px] mb-[91px]  border w-[320px] p-6 rounded-sm" action={updateFormAction}>
				<span >Edit profile</span>

				<div className="flex flex-col">
					<label>
						<span>Email: </span>
						<input className="border-black border-2" type="email" name="email" defaultValue={state?.currentUser?.email} />
					</label>
				</div>
				<div className="flex flex-col gap-[24px]">
					<label>
						<span >Firstname: </span>
						<input className="border-black border-2" type="text" name="firstname" defaultValue={state?.currentUser?.firstname} />
					</label>
				</div>
				<div className="flex flex-col gap-[24px]">
					<label>
						<span>Lastname: </span>
						<input className="border-black border-2" type="text" name="lastname" defaultValue={state?.currentUser?.lastname} />
					</label>
				</div>
				<div className="flex flex-col gap-[24px]">
					<label>
						<span>Password: </span>
						<input className="border-black border-2" type="password" name="password" defaultValue={state?.currentUser?.password} />
					</label>
				</div>
				<input type="hidden" name="id" value={state.currentUser?.id} readOnly />

				<button type="submit">Gem</button>
			</form>


		</>
	)
}