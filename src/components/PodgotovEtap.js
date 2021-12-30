import React from "react";
import {arrayPlanName} from "../action";
export default function PodgotovEtap(props) {
	const name = ["Легкая атлетика 1"];
	return (
			name.map((n)=>arrayPlanName(props.plan,n).map((x)=>x.content.map((x2,i)=><tr key = {x2.id + i} className = "text-left">
				<td>{x2.name}</td>
				<td>{x2.teacher}</td>
				<td>{x2.content}</td>
				<td>{x2.omu}</td>
				<td className = "text-center">{x2.date}</td>
			</tr>)))
		)
}