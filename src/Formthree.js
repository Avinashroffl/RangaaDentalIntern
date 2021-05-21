import { faArrowLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import { updatePatientData } from "./utils";
import "./Styles/form.css";
import "./Styles/index.css";

const validate = (values) => {};

const Formthree = ({ pid }) => {
	const formik = useFormik({
		initialValues: {},
		validate,
		onSubmit: (values) => {
			updatePatientData(values, pid);
		},
	});
	return (
		<div className='form3'>
			<div className='mb-5'>
				<FontAwesomeIcon
					icon={faArrowLeft}
					className='text-blue-200'
					size='lg'
				></FontAwesomeIcon>
				<FontAwesomeIcon
					icon={faPowerOff}
					className='float-right text-white'
					size='lg'
				></FontAwesomeIcon>
			</div>

			<form
				onSubmit={formik.handleSubmit}
				className='form-container shadow-md rounded p-10 mb-4 flex flex-col my-2'
			>
				<div class='text-center text-2xl'>
					<p class='font-black'>DOCTOR'S PORTAL</p>
				</div>
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<label className='font-black text-red-600'>PATIENT ID</label>
						<input
							id='pid'
							name='pid'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.pid}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder='Patient ID'
						/>
					</div>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0 text-right'>
						<label className='font-black text-red-600'>DOCTOR'S NAME</label>
						<input
							id='dname'
							name='dname'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.dname}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder="Doctor's Name"
						/>
					</div>
				</div>
				<p class='font-black text-red-600 text-xl text-center'>DIAGNOSIS</p>
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<table class='table-auto'>
							<thead>
								<tr class='text-black hover:text-blue-700'>
									<th class='px-4 py-2'>Tooth Problem</th>
									<th class='px-4 py-2'>11-18</th>
									<th class='px-4 py-2'>21-28</th>
									<th class='px-4 py-2'>31-38</th>
									<th class='px-4 py-2'>41-48</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='border px-4 py-2'>Decayed</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Decayed'
											value='11'
											checked={formik.values.Decayed === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Decayed'
											value='22'
											checked={formik.values.Decayed === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Decayed'
											value='33'
											checked={formik.values.Decayed === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Decayed'
											value='44'
											checked={formik.values.Decayed === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Filled</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Filled'
											value='11'
											checked={formik.values.Filled === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Filled'
											value='22'
											checked={formik.values.Filled === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Filled'
											value='33'
											checked={formik.values.Filled === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Filled'
											value='44'
											checked={formik.values.Filled === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Missing</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Missing'
											value='11'
											checked={formik.values.Missing === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Missing'
											value='22'
											checked={formik.values.Missing === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Missing'
											value='33'
											checked={formik.values.Missing === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Missing'
											value='44'
											checked={formik.values.Missing === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Fractured</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Fractured'
											value='11'
											checked={formik.values.Fractured === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Fractured'
											value='22'
											checked={formik.values.Fractured === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Fractured'
											value='33'
											checked={formik.values.Fractured === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Fractured'
											value='44'
											checked={formik.values.Fractured === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Mobile</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Mobile'
											value='11'
											checked={formik.values.Mobile === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Mobile'
											value='22'
											checked={formik.values.Mobile === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Mobile'
											value='33'
											checked={formik.values.Mobile === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Mobile'
											value='44'
											checked={formik.values.Mobile === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Dental Caries</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Caries'
											value='11'
											checked={formik.values.Caries === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Caries'
											value='22'
											checked={formik.values.Caries === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Caries'
											value='33'
											checked={formik.values.Caries === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Caries'
											value='44'
											checked={formik.values.Caries === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>
										Caries with apical periondontities
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='apical'
											value='11'
											checked={formik.values.apical === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='apical'
											value='22'
											checked={formik.values.apical === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='apical'
											value='33'
											checked={formik.values.apical === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='apical'
											value='44'
											checked={formik.values.apical === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Periapical abscess</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Periapical'
											value='11'
											checked={formik.values.Periapical === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Periapical'
											value='22'
											checked={formik.values.Periapical === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Periapical'
											value='33'
											checked={formik.values.Periapical === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Periapical'
											value='44'
											checked={formik.values.Periapical === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Attrition</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Attrition'
											value='11'
											checked={formik.values.Attrition === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Attrition'
											value='22'
											checked={formik.values.Attrition === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Attrition'
											value='33'
											checked={formik.values.Attrition === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Attrition'
											value='44'
											checked={formik.values.Attrition === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Abrasion / abfraction</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Abrasion'
											value='11'
											checked={formik.values.Abrasion === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Abrasion'
											value='22'
											checked={formik.values.Abrasion === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Abrasion'
											value='33'
											checked={formik.values.Abrasion === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Abrasion'
											value='44'
											checked={formik.values.Abrasion === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Infected root stumps</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='stumps'
											value='11'
											checked={formik.values.stumps === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='stumps'
											value='22'
											checked={formik.values.stumps === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='stumps'
											value='33'
											checked={formik.values.stumps === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='stumps'
											value='44'
											checked={formik.values.stumps === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Impacted tooth</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Impacted'
											value='11'
											checked={formik.values.Impacted === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Impacted'
											value='22'
											checked={formik.values.Impacted === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Impacted'
											value='33'
											checked={formik.values.Impacted === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Impacted'
											value='44'
											checked={formik.values.Impacted === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Retained deciduous teeth</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Retained'
											value='11'
											checked={formik.values.Retained === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Retained'
											value='22'
											checked={formik.values.Retained === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Retained'
											value='33'
											checked={formik.values.Retained === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Retained'
											value='44'
											checked={formik.values.Retained === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<table class='table-auto w-full'>
							<thead>
								<tr class='text-black hover:text-blue-700'>
									<th class='px-4 py-2'>Tooth Problem</th>
									<th class='px-4 py-2'>Yes</th>
									<th class='px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='border px-4 py-2'>Calculus</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Calculus'
											value='yes'
											checked={formik.values.Calculus === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Calculus'
											value='no'
											checked={formik.values.Calculus === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Mouth Ulcers</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Ulcers'
											value='yes'
											checked={formik.values.Ulcers === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Ulcers'
											value='no'
											checked={formik.values.Ulcers === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Bad Breath</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Breath'
											value='yes'
											checked={formik.values.Breath === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Breath'
											value='no'
											checked={formik.values.Breath === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>U/L edentulous</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='edentulous'
											value='yes'
											checked={formik.values.edentulous === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='edentulous'
											value='no'
											checked={formik.values.edentulous === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Malocclusion</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Malocclusion'
											value='yes'
											checked={formik.values.Malocclusion === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Malocclusion'
											value='no'
											checked={formik.values.Malocclusion === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Stains and Calculus</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Stains'
											value='yes'
											checked={formik.values.Stains === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Stains'
											value='no'
											checked={formik.values.Stains === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Periondontitis</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Periondontitis'
											value='yes'
											checked={formik.values.Periondontitis === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Periondontitis'
											value='no'
											checked={formik.values.Periondontitis === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Gingivitis</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Gingivitis'
											value='yes'
											checked={formik.values.Gingivitis === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Gingivitis'
											value='no'
											checked={formik.values.Gingivitis === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Orofacial pain</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Orofacial'
											value='yes'
											checked={formik.values.Orofacial === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Orofacial'
											value='no'
											checked={formik.values.Orofacial === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
						<br />
						<p class='font-black text-red-600 text-center'>MUCOSAL LESIONS</p>
						<table class='table-auto w-full'>
							<thead>
								<tr class='text-black hover:text-blue-700'>
									<th class='px-4 py-2'></th>
									<th class='px-4 py-2'>Yes</th>
									<th class='px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='border px-4 py-2'>Lichen Planes</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Lichen'
											value='yes'
											checked={formik.values.Lichen === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Lichen'
											value='no'
											checked={formik.values.Lichen === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Leukoplakiat</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Leukoplakiat'
											value='yes'
											checked={formik.values.Leukoplakiat === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Leukoplakiat'
											value='no'
											checked={formik.values.Leukoplakiat === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<p class='font-black text-red-600 text-xl text-center'>TREATMENT</p>
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<table class='table-auto'>
							<thead>
								<tr class='text-black hover:text-blue-700'>
									<th class='px-4 py-2'>TREATMENT PAIN</th>
									<th class='px-4 py-2'>11-18</th>
									<th class='px-4 py-2'>21-28</th>
									<th class='px-4 py-2'>31-38</th>
									<th class='px-4 py-2'>41-48</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='border px-4 py-2'>Extraction</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Extraction'
											value='11'
											checked={formik.values.Extraction === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Extraction'
											value='22'
											checked={formik.values.Extraction === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Extraction'
											value='33'
											checked={formik.values.Extraction === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Extraction'
											value='44'
											checked={formik.values.Extraction === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Restoration</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Restoration'
											value='11'
											checked={formik.values.Restoration === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Restoration'
											value='22'
											checked={formik.values.Restoration === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Restoration'
											value='33'
											checked={formik.values.Restoration === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Restoration'
											value='44'
											checked={formik.values.Restoration === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Root canal treatment</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Root'
											value='11'
											checked={formik.values.Root === "11"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Root'
											value='22'
											checked={formik.values.Root === "22"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Root'
											value='33'
											checked={formik.values.Root === "33"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Root'
											value='44'
											checked={formik.values.Root === "44"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<table class='table-auto w-full'>
							<thead>
								<tr class='text-black hover:text-blue-700'>
									<th class='px-4 py-2'>Treatment</th>
									<th class='px-4 py-2'>Yes</th>
									<th class='px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='border px-4 py-2'>Bleaching</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Bleaching'
											value='yes'
											checked={formik.values.Bleaching === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Bleaching'
											value='no'
											checked={formik.values.Bleaching === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Oral prophylaxis</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Oral'
											value='yes'
											checked={formik.values.Oral === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='Oral'
											value='no'
											checked={formik.values.Oral === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-full px-3 mb-6 md:mb-0'>
						<label className='font-black text-red-600' for='grid-city'>
							COMMENTS (IF ANY)
						</label>
						<textarea
							className='appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 resize border rounded-md mb-2'
							name='comments3'
							placeholder='Type your comments here ... '
							value={formik.values.comments3}
							onChange={formik.handleChange}
						></textarea>
					</div>
				</div>
				<button
					type='submit'
					class='bg-gray-700 text-white font-bold py-2 px-4 hover:bg-gray-600 rounded uppercase'
				>
					SUBMIT
				</button>
			</form>
		</div>
	);
};

export default React.memo(Formthree);
