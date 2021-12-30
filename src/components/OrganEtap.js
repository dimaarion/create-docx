import React from "react";
import {arrayPlanName} from "../action";
export default function OrganEtap(props) {
	const name = ["headDoc","orEtap","orEtap_1","orEtap_2","orEtap_3"];
	return (
			name.map((n)=><tr key = {n}>{arrayPlanName(props.plan,n).map((x)=>x.content.map((x2,i)=><td key = {x2 + i} className = "text-center">{x2}</td>))}</tr>)
		)
}