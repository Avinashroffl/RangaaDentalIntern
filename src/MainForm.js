import React from "react";
import { Formik, Form, Field } from "formik";

function MainForm() {
	return (
		<div>
			<Formik
				initialValues={{
					name: "",
					age: 0,
					gender: "",
					mobileNumber: 0,
					email: "",
					complaints: "",
					allergy: "",
					medicalHistory: {
						diabetes: "",
						hypertension: "",
						epilepsy: "",
						cardiac: "",
						allergy: "",
						bleeding: "",
						anticogulant: "",
					},
					otherDisease: null,
					habits: {
						thumb: "",
						tongue: "",
						mouth: "",
						bottle: "",
						nail: "",
					},
					comments1: "",
					diagnosis: {
						caries: "",
						apicalPeriondontities: "",
						abscess: "",
						attrition: "",
						abrasion: "",
						stumps: "",
						impactedTooth: "",
						deciduous: "",
						edntulous: "",
						malocclusion: "",
						stains: "",
						periondontities: "",
						gingivitis: "",
					},
					comments2: "",
					mucosal: {
						lichen: "",
						leukoplakiat: "",
						others: "",
					},
					orofacial: "",
					examination: {
						decayed: "",
						filled: "",
						missing: "",
						calculus: "",
						ulcer: "",
						breath: "",
						fractured: "",
						mobile: "",
					},
					comments3: "",
					treatmentPain: {
						prophylaxis: "",
						extraction: "",
						restoration: "",
						root: "",
						bleaching: "",
					},
					comments4: "",
				}}
				onSubmit={(values) => console.log(values)}
			>
				<Form>
					<label>
						Name <Field type='text' name='name' placeholder='name'></Field>
					</label>
					<br />
					<label>
						Age <Field type='number' name='age' placeholder='Age'></Field>
					</label>
					<br />
					<label>Gender</label>
					<label>
						Male <Field type='radio' name='gender' value='Male'></Field>
					</label>
					<label>
						Female
						<Field type='radio' name='gender' value='Female'></Field>
					</label>
					<br />

					<label>
						Mobile Number{" "}
						<Field
							type='text'
							name='mobileNumber'
							placeholder='Mobile Number'
						></Field>
					</label>
					<h2>Medical History</h2>
					<br />
					<h4>Diabetes</h4>
					<br />
					<label>
						Under Medication
						<Field
							type='radio'
							name='medicalHistory.diabetes'
							value='Under Medication'
						></Field>
					</label>
					<label>
						Not Under Medication
						<Field
							type='radio'
							name='medicalHistory.diabetes'
							value='Not Under Medication'
						></Field>
					</label>
					<label>
						Unknown
						<Field
							type='radio'
							name='medicalHistory.diabetes'
							value='Unknown'
						></Field>
					</label>
					<br />

					<h4>Hypertension</h4>
					<br />

					<label>
						Under Medication
						<Field
							type='radio'
							name='medicalHistory.hypertension'
							value='Under Medication'
						></Field>
					</label>
					<label>
						Not Under Medication
						<Field
							type='radio'
							name='medicalHistory.hypertension'
							value='Not Under Medication'
						></Field>
					</label>
					<label>
						Unknown
						<Field
							type='radio'
							name='medicalHistory.hypertension'
							value='Unknown'
						></Field>
					</label>
					<br />

					<h4>Epilepsy</h4>
					<br />

					<label>
						Under Medication
						<Field
							type='radio'
							name='medicalHistory.epilepsy'
							value='Under Medication'
						></Field>
					</label>
					<label>
						Not Under Medication
						<Field
							type='radio'
							name='medicalHistory.epilepsy'
							value='Not Under Medication'
						></Field>
					</label>
					<label>
						Unknown
						<Field
							type='radio'
							name='medicalHistory.epilepsy'
							value='Unknown'
						></Field>
					</label>
					<br />

					<h4>Ischemic cardiac diseases </h4>
					<br />

					<label>
						Under Medication
						<Field
							type='radio'
							name='medicalHistory.cardiac'
							value='Under Medication'
						></Field>
					</label>
					<label>
						Not Under Medication
						<Field
							type='radio'
							name='medicalHistory.cardiac'
							value='Not Under Medication'
						></Field>
					</label>
					<label>
						Unknown
						<Field
							type='radio'
							name='medicalHistory.cardiac'
							value='Unknown'
						></Field>
					</label>
					<br />

					<h4>Allergy</h4>
					<br />

					<label>
						Under Medication
						<Field
							type='radio'
							name='medicalHistory.allergy'
							value='Under Medication'
						></Field>
					</label>
					<label>
						Not Under Medication
						<Field
							type='radio'
							name='medicalHistory.allergy'
							value='Not Under Medication'
						></Field>
					</label>
					<label>
						Unknown
						<Field
							type='radio'
							name='medicalHistory.allergy'
							value='Unknown'
						></Field>
					</label>
					<br />

					<h4>Bleeding Disorder</h4>
					<br />

					<label>
						Under Medication
						<Field
							type='radio'
							name='medicalHistory.bleeding'
							value='Under Medication'
						></Field>
					</label>
					<label>
						Not Under Medication
						<Field
							type='radio'
							name='medicalHistory.bleeding'
							value='Not Under Medication'
						></Field>
					</label>
					<label>
						Unknown
						<Field
							type='radio'
							name='medicalHistory.bleeding'
							value='Unknown'
						></Field>
					</label>
					<br />

					<h4>Anti-Cogulant</h4>
					<br />

					<label>
						Under Medication
						<Field
							type='radio'
							name='medicalHistory.anticogulant'
							value='Under Medication'
						></Field>
					</label>
					<label>
						Not Under Medication
						<Field
							type='radio'
							name='medicalHistory.anticogulant'
							value='Not Under Medication'
						></Field>
					</label>
					<label>
						Unknown
						<Field
							type='radio'
							name='medicalHistory.anticogulant'
							value='Unknown'
						></Field>
					</label>
					<br />

					<button type='submit'>Submit</button>
				</Form>
			</Formik>
		</div>
	);
}

export default MainForm;
