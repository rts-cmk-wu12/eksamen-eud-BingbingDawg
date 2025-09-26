"use client"

import { useReducer } from "react";

function reducer(state, action) {

switch(action.type) {
    case "showModal" :
        return {
            ...state,
            showModal: action.showModal,
            currentUser: action.currentUser
        }
    case "hideModal":
        return {
            ...state,
            currentKage: null,
            showModal: false
        }
}
}

export default function Swapper({json}){
    const [state, dispatch ] = useReducer(reducer, {
        showModal: false,
        currentUser: null,

    });


   
    return (
        <>
            <button className=" w-[146px] text-[16px] p-[7px] bg-[var(--button-color-2)] rounded-[8px]">Propose a swap</button>
            {state.showModal ? (
                <div onClick={() => { dispatch({ type: "showModal", currentUser: json}) }} className="w-[100dvw] h-[100dvh] backdrop-blur-[2px] fixed top-0 left-0 z-50 justify-center flex items-center">
                        <form className="w-[25rem] h-[10rem] bg-white box shadow-2xl rounded-[5px] p-[1rem] after:w-full after:bottom-0 after:top-0 after:h-0 " >
                            <span className="">Bekræft sletning</span>
					<p>Er du sikker på du vil slette "{state.currentKage?.name}"? Denne handling kan ikke fortrydes</p>
                            <button type="button" onClick={() => { dispatch({ type: "hideModal" }) }}>Annuller</button>
                            <input type="hidden" name="id" value={state.currentKage?.id} readOnly />
                            <button type="submit" >Bekræft</button>
                        </form>
            </div>) : null}
            </>
    )
}

