import { faArrowLeft, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import "./Styles/form.css";
import "./Styles/index.css";
import React from "react";
import { updatePatientData } from "./utils";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "./utils";
import { logout } from "./redux/actions";
import { Link } from "react-router-dom";

const validate = (values) => {};

const Formtwo = ({ pid }) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.state);
	console.log(state);
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
			<div className='mb-12 mt-2'>
				<Link to='/'>
					<FontAwesomeIcon
						icon={faArrowLeft}
						className='text-blue-600 float-left'
						size='lg'
					></FontAwesomeIcon>
				</Link>
				<div className='dropdown'>
					<span>
						<FontAwesomeIcon
							icon={faPowerOff}
							className='float-right text-gray-600'
							size='lg'
						></FontAwesomeIcon>
					</span>
					<div className='dropdown-content'>
						<span
							href='#'
							onClick={() => userLogout().then(() => dispatch(logout()))}
						>
							Log out
						</span>
					</div>
				</div>
			</div>

			<form
				onSubmit={formik.handleSubmit}
				className='form-container shadow-md rounded p-10 mb-4 flex flex-col my-2'
			>
				<div className='text-center text-xl'>
					<p className='font-black'>NURSE DATA ENTRY</p>
				</div>

				<div className='-mx-4 md:flex mb-4 justify-center justify-items-center'>
					<div className='md:w-1/4 px-3 mb-6 md:mb-0'>
						<p class='font-black  text-center'>HABITS</p>
						<table class='border-collapse border border-green-800'>
							<thead className='border border-green-600 '>
								<tr class='text-black text-center'>
									<th class='w-1/2 px-2 py-2'>Habit</th>
									<th class='w-1/4 px-2 py-2'>Yes</th>
									<th class='w-1/4 px-2 py-2'>No</th>
								</tr>
							</thead>
							<tbody className='text-center'>
								<tr>
									<td class='w-1/2 px-2 py-2 text-left'>Nail biting</td>
									<td class='w-1/4 px-2 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='biting'
											value='yes'
											checked={formik.values.biting === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-2 py-2'>
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
									<td class='w-1/2 px-2 py-2 text-left'>bottle feeding</td>
									<td class='w-1/4 px-2 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='bottle'
											value='yes'
											checked={formik.values.bottle === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-2 py-2'>
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
									<td class='w-1/2 px-2 py-2 text-left'>Thumb sucking</td>
									<td class='w-1/4 px-2 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='thumb'
											value='yes'
											checked={formik.values.thumb === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-2 py-2'>
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
									<td class='w-1/2 px-2 py-2 text-left'>Tongue Thrusting</td>
									<td class='w-1/4 px-2 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='tongue'
											value='yes'
											checked={formik.values.tongue === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-2 py-2'>
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
									<td class='w-1/2 px-2 py-2 text-left'>Mouth breathing</td>
									<td class='w-1/4 px-2 py-2'>
										<input
											type='radio'
											class='form-radio'
											name='mouth'
											value='yes'
											checked={formik.values.mouth === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td class='w-1/4 px-2 py-2'>
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

					<div className='md:w-2/4 px-3 mb-6 md:mb-0'>
						<p class='font-black  text-center'>MEDICAL HISTORY</p>
						<table>
							<thead className='border border-green-600 text-center px-3'>
								<tr class='text-black'>
									<th class='px-2 py-2'>Name of the Disease</th>
									<th class='px-2 py-2'>Under Medication</th>
									<th class='px-2 py-2'>Not under Medication</th>
									<th class='px-2 py-2'>Unknown</th>
								</tr>
							</thead>
							<tbody className='text-center border'>
								<tr>
									<td className='border px-2 py-2 text-left'>Allergy</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='allergy'
											value='undermed'
											checked={formik.values.allergy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='allergy'
											value='notundermed'
											checked={formik.values.allergy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='allergy'
											value='unknown'
											checked={formik.values.allergy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>Diabetes</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='diabetes'
											value='undermed'
											checked={formik.values.diabetes === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='diabetes'
											value='notundermed'
											checked={formik.values.diabetes === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='diabetes'
											value='unknown'
											checked={formik.values.diabetes === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>Epilepsy</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='epilepsy'
											value='undermed'
											checked={formik.values.epilepsy === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='epilepsy'
											value='notundermed'
											checked={formik.values.epilepsy === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='epilepsy'
											value='unknown'
											checked={formik.values.epilepsy === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>Hypertension</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='hypertension'
											value='undermed'
											checked={formik.values.hypertension === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='hypertension'
											value='notundermed'
											checked={formik.values.hypertension === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='hypertension'
											value='unknown'
											checked={formik.values.hypertension === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>
										Bleeding disorder
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bleeding'
											value='undermed'
											checked={formik.values.bleeding === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bleeding'
											value='notundermed'
											checked={formik.values.bleeding === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bleeding'
											value='unknown'
											checked={formik.values.bleeding === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>
										Anticoagulant therapy
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='anticoagulant'
											value='undermed'
											checked={formik.values.anticoagulant === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='anticoagulant'
											value='notundermed'
											checked={formik.values.anticoagulant === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='anticoagulant'
											value='unknown'
											checked={formik.values.anticoagulant === "unknown"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='border px-2 py-2 text-left'>
										Ischemic cardiac diseases
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='cardiac'
											value='undermed'
											checked={formik.values.cardiac === "undermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='cardiac'
											value='notundermed'
											checked={formik.values.cardiac === "notundermed"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='border px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
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

					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<p className='font-black text-center'>HABITS</p>
						<table className='tablecenter border-collapse border border-green-800'>
							<thead className=' border border-green-600 '>
								<tr className='text-black text-center'>
									<th className='w-1/2 px-2 py-2'>Habit</th>
									<th className='w-1/4 px-2 py-2'>Yes</th>
									<th className='w-1/4 px-2 py-2'>No</th>
								</tr>
							</thead>
							<tbody className='text-center'>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>Nail biting</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='biting'
											value='yes'
											checked={formik.values.biting === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='biting'
											value='no'
											checked={formik.values.biting === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>bottle feeding</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bottle'
											value='yes'
											checked={formik.values.bottle === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='bottle'
											value='no'
											checked={formik.values.bottle === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>Thumb sucking</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='thumb'
											value='yes'
											checked={formik.values.thumb === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='thumb'
											value='no'
											checked={formik.values.thumb === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>
										Tongue Thrusting
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='tongue'
											value='yes'
											checked={formik.values.tongue === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='tongue'
											value='no'
											checked={formik.values.tongue === "no"}
											onChange={formik.handleChange}
										></input>
									</td>
								</tr>
								<tr>
									<td className='w-1/2 px-2 py-2 text-left'>Mouth breathing</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
											name='mouth'
											value='yes'
											checked={formik.values.mouth === "yes"}
											onChange={formik.handleChange}
										></input>
									</td>
									<td className='w-1/4 px-2 py-2'>
										<input
											type='radio'
											className='form-radio'
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
				</div>

				<div className='text-center'>
					<button
						type='submit'
						className='bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase w-1/7 hover:bg-gray-600 border-none tracking-wider'
					>
						submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default React.memo(Formtwo);
