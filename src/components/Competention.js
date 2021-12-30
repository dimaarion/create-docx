import React from "react";

export default function Competention(props) {
	return (
		<tbody>
			<tr>
				<td className = "text-left">Раздел № {props.numRazdel}</td>
				<td colSpan = "3">«{props.nameRazdel}»</td>
				<td className = "text-center" >Количество часов на раздел:</td>
				<td className = "text-center">{props.numTimeRazdel}</td>
			</tr>
			<tr>
				<td rowSpan = "2" className = "text-left">Тема занятия № {props.numTemeUr}</td>
				<td colSpan = "3">«{props.themeUr}»</td>
				<td className = "text-center" >Количество часов на тему:</td>
				<td className = "text-center">{props.numTimeTheme}</td>
			</tr>
			<tr>
				<td className = "text-left" colSpan = "3">Этап: { props.nameEtap}</td>
				<td className = "text-center">Количество часов на этап:</td>
				<td className = "text-center">{props.numEtap}</td>
			</tr>
			<tr>
				<td className = "text-left" colSpan = "6">Место проведения: { props.mesto}</td>
			</tr>
			<tr>
				<td className = "text-left" colSpan = "6">Мотивация темы: { props.motivationTheme}</td>
			</tr>
		</tbody>


		)
}