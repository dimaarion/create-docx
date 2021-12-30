import React, { useEffect } from "react";
import "../css/view.css";
import {arrayPlanName} from "../action";
import OrganEtap from "./OrganEtap.js";
import PodgotovEtap from "./PodgotovEtap.js";
import Competention from "./Competention.js";
export default function View(props) {

	const styles = {
		headDoc:{width:"20%"}
	}

	return (
		<div>
			<table className = "table view">
			<thead>
				<tr>
				    <td style = {styles.headDoc}></td>
					<td className = "text-center" colSpan = "3">{props.nameOrgan.split("\n").map(((x, i)=><div key = {x + i}><b>{x}</b></div>))}</td>
					<td style = {styles.headDoc}></td>
				</tr>
				<tr>
					<td colSpan = "2">
						<div><b>СОГЛАСОВАНО</b></div>
						<div>{props.namePostLeft}</div>
						<div>{"___________________" + props.nameFIOLeft}</div>
            			<div>{'"______" _____________20___г.'}</div>
					</td>
					<td></td>
					<td colSpan = "2">
						<div><b>СОГЛАСОВАНО</b></div>
						<div>{props.namePostRight}</div>
						<div>{"___________________" + props.nameFIORight}</div>
            			<div>{'"______" _____________20___г.'}</div>
					</td>
				</tr>
				<tr>
					<td colSpan = "5" className = "text-center"><b>МЕТОДИЧЕСКАЯ РАЗРАБОТКА</b><div>{props.nameDoc}</div><div>по учебной дисциплине</div><div>{'"' + props.nameDis + '"'}</div></td>
				</tr>
				<tr>
            		<td colSpan = "2">
              			<div>Дата проведения: {props.dateProv.split("-").reverse().join(".")} г.</div>
              			<div>Время проведения: {props.timeProv}</div>
              			<div>Курс, группа: {props.kurs}</div>
              			<div>Специальность: {props.prof}</div>
              			<div>Место проведения: {props.mesto}</div>
            		</td>
          		</tr>
          		<tr>
          			<td colSpan = "2">
          				<div><b>Разработано</b></div>
          				<div>{props.devel.split("\n").map(((x, i)=><div key = {x + i}>{x}</div>))}</div>
          			</td>
          			<td></td>
          		</tr>
          		<tr>
          			<td>
          				<div><b>Рассмотрено и одобрено</b></div>
          				<div>{props.odobr.split("\n").map(((x, i)=><div key = {x + i}>{x}</div>))}</div>
          			</td>
          		</tr>
          		<tr>
          			<td colSpan = "5" className = "text-center">{props.year + " г."}</td>
          		</tr>
			</thead>
				<Competention
				motivationTheme = {props.motivationTheme}
				mesto = {props.mesto}
				nameEtap = {props.nameEtap}
				numEtap = {props.numEtap}
				numTimeTheme = {props.numTimeTheme}
				themeUr = {props.themeUr}
				numTemeUr = {props.numTemeUr}
				numTimeRazdel = {props.numTimeRazdel}
				nameRazdel = {props.nameRazdel}
				numRazdel = {props.numRazdel}/>
			</table>
			<table className = "table view">
				<tbody>
					<OrganEtap plan = {props.plan}/>
					<PodgotovEtap plan = {props.plan}/>
				</tbody>
			</table>
		</div>
		)
}