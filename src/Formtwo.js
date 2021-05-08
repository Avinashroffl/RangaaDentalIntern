import { faArrowLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import React from "react";
import { updatePatientData } from "./utils";

const validate = (values) => {};

const Formtwo = ({ pid }) => {
	const formik = useFormik({
		initialValues: {
			pid: "",
			biting: "",
			bottle: "",
			thumb: "",
			tongue: "",
			mouth: "",
			allergy: "",
			diabetes: "",
			hypertension: "",
			bleeding: "",
			anticoagulant: "",
			cardiac: "",
		},
		validate,
		onSubmit: (values) => {
			updatePatientData(values, pid);
		},
	});
	return (
		<div className='form2'>
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
					<p class='font-black'>NURSE DATA ENTRY</p>
				</div>
				<div className='md:w-full px-3 mb-6 md:mb-0'>
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
				<br />
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/4 px-3 mb-6 md:mb-0'>
						<p class='font-black text-red-600 text-center'>
							HABITS OF THE PATIENT
						</p>
						<table class='table-fixed'>
							<thead>
								<tr class='text-black hover:text-blue-700 '>
									<th class='w-1/2 px-4 py-2'>Habit</th>
									<th class='w-1/4 px-4 py-2'>Yes</th>
									<th class='w-1/4 px-4 py-2'>No</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='w-1/2 px-4 py-2'>Nail biting</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='biting'
											value='yes'
											checked={formik.values.biting === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='biting'
											value='no'
											checked={formik.values.biting === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>bottle feeding</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bottle'
											value='yes'
											checked={formik.values.bottle === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bottle'
											value='no'
											checked={formik.values.bottle === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>Thumb sucking</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='thumb'
											value='yes'
											checked={formik.values.thumb === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='thumb'
											value='no'
											checked={formik.values.thumb === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>Tongue Thrusting</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='tongue'
											value='yes'
											checked={formik.values.tongue === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='tongue'
											value='no'
											checked={formik.values.tongue === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='w-1/2 px-4 py-2'>Mouth breathing</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='mouth'
											value='yes'
											checked={formik.values.mouth === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='mouth'
											value='no'
											checked={formik.values.mouth === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<br />
					<div className='md:w-3/4 px-3 mb-6 md:mb-0'>
						<p class='font-black text-red-600 text-center'>
							MEDICAL HISTORY OF THE PATIENT
						</p>
						<table class='table-auto w-full'>
							<thead>
								<tr class='text-black hover:text-blue-700'>
									<th class='px-4 py-2'>Name of the Disease</th>
									<th class='px-4 py-2'>Under medication</th>
									<th class='px-4 py-2'>Not under medication</th>
									<th class='px-4 py-2'>Unknown</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='border px-4 py-2'>Allergy</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='allergy'
											value='undermed'
											checked={formik.values.allergy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='allergy'
											value='notundermed'
											checked={formik.values.allergy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='allergy'
											value='unknown'
											checked={formik.values.allergy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Diabetes</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='diabetes'
											value='undermed'
											checked={formik.values.diabetes === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='diabetes'
											value='notundermed'
											checked={formik.values.diabetes === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='diabetes'
											value='unknown'
											checked={formik.values.diabetes === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Epilepsy</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='epilepsy'
											value='undermed'
											checked={formik.values.epilepsy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='epilepsy'
											value='notundermed'
											checked={formik.values.epilepsy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='epilepsy'
											value='unknown'
											checked={formik.values.epilepsy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Hypertension</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='hypertension'
											value='undermed'
											checked={formik.values.hypertension === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='hypertension'
											value='notundermed'
											checked={formik.values.hypertension === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='hypertension'
											value='unknown'
											checked={formik.values.hypertension === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Bleeding disorder</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bleeding'
											value='undermed'
											checked={formik.values.bleeding === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bleeding'
											value='notundermed'
											checked={formik.values.bleeding === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bleeding'
											value='unknown'
											checked={formik.values.bleeding === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Anticoagulant therapy</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='anticoagulant'
											value='undermed'
											checked={formik.values.anticoagulant === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='anticoagulant'
											value='notundermed'
											checked={formik.values.anticoagulant === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='anticoagulant'
											value='unknown'
											checked={formik.values.anticoagulant === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td class='border px-4 py-2'>Ischemic cardiac diseases</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='cardiac'
											value='undermed'
											checked={formik.values.cardiac === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='cardiac'
											value='notundermed'
											checked={formik.values.cardiac === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='border px-4 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='cardiac'
											value='unknown'
											checked={formik.values.cardiac === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className='-mx-4 md:flex mb-4 text-center'>
					<div className='md:w-full px-3 mb-6 md:mb-0'>
						<label className='font-black text-red-600' for='grid-city'>
							COMMENTS IF ANY
						</label>
						<textarea
							className='appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 resize border rounded-md mb-2'
							name='comments'
							placeholder='Type your comments here ... '
							value={formik.values.comments}
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

export default React.memo(Formtwo);
