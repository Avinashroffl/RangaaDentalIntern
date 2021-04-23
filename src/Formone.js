import React from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import "./Styles/form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff , faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./PdfGenrator";
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Image
  } from "@react-pdf/renderer";
const styles = StyleSheet.create({
	page: {
	  	padding:20
	},
	pagecontainer: {
		backgroundColor: '#f9f6f7',
		height:'100%',
		width:'100%',
		padding:5,
		fontSize: '11px',
	},
	header: {
		color: 'red',
		height:'8%',
		fontSize:'16px',
		width: '100%',
		textAlign: 'center',
		fontWeight: 'bold',
		paddingTop: '9px',
		letterSpacing: '1px'	
	},
	BasicDetails: {
		borderBottom: '1px solid gray',
		letterSpacing: '1px',
		lineHeight: '2px',
		display: "flex",
		flexDirection: "row",
	},
	subheading:{
		display: 'block',
		color: 'red',
		fontSize: '14px',
		fontWeight:'bold',
		marginBottom:'10px',
		marginTop:'4px',
	},
	box1: {
		flex:'2',
	},	
	box2: {
		flex:'1',
	},
	box3:{
		flex:'1',
	}	
  });

const MyDoc = () => (
	<Document>
	  <Page size="A4" style={styles.page}>
		<View style={styles.pagecontainer}>
			
			<view style={styles.header}>
				<Text>Rangaa Dental</Text>
			</view>
			
				<view style={styles.subheading}>
				<Text>Patient Details</Text>
			</view>

			<view style={styles.BasicDetails}>
			
		
			

				<view style={ styles.box1 }>
					<Text> Name : Karthikeyan </Text>
					<Text> Email : bkarthi1000@gmail.com </Text>
					<Text> State : Tamil Nadu</Text>
				</view>	

				<view style={ styles.box2 }>
				<Text> Age : 18 </Text>
				<Text> Phone Number : 9080585673</Text>
				<Text> Visited due to : Fever</Text>
				</view>

				<view style={ styles.box3 }>
				<Text> Gender : Male </Text>
				<Text> City : Madurai </Text>
				</view>
			</view>
			
			<view style={styles.subheading}>
			<Text>Medical History</Text>
			</view>
			
			<view style={styles.BasicDetails}>
			
		
			
				<view style={ styles.box1 }>
					<Text> Allergy :  NM </Text>
					<Text> Diabetes : UM </Text>
					<Text> Epilepsy : NM </Text>
				</view>	

				<view style={ styles.box2 }>
				<Text> Hypertension : UM</Text>
				<Text> Bleeding Disorder : NM</Text>
				<Text> Anticoagulant therapy : NM </Text>
				</view>

				<view style={ styles.box3 }>
					<Text> Ischemic cardiac diseases : NM </Text>
					<Text> UM - Under Medication </Text>
					<Text> NM - Not Under Medication </Text>
				</view>
			</view>
		</View>
      </Page>
	</Document>
);



const validate = (values) => {
	const errors = {};

	if (!values.firstName) {
		errors.firstName = "Required";
	} else if (values.firstName.length > 15) {
		errors.firstName = "Must be 15 characters or less";
	}

	if (!values.lastName) {
		errors.lastName = "Required";
	} else if (values.lastName.length > 20) {
		errors.lastName = "Must be 20 characters or less";
	}

	if (!values.age) {
		errors.age = "Required";
	} else if (values.age > 100) {
		errors.age = "Invalid Age";
	}

	if (!values.phno) {
		errors.phno = "Required";
	} else if (values.phno != 10) {
		errors.phno = "Invalid Age";
	}
	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.city) {
		errors.city = "Required";
	} else if (values.city.length < 3) {
		errors.city = "Invalid city name";
	}

	return errors;
};

const Formone = () => {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			age: "",
			phno: "",
			email: "",
			city: "",
			gender: "",
			state: "Tamil Nadu",
			complaint: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<div className='form'>
			
			<div className="mb-5">
				<FontAwesomeIcon icon={faArrowLeft} className="text-blue-200" size="lg" ></FontAwesomeIcon>
				<FontAwesomeIcon icon={faPowerOff} className="float-right text-white" size="lg"></FontAwesomeIcon>
			</div>
		
			
			<form
				onSubmit={formik.handleSubmit}
				className='form-container shadow-md rounded p-10 mb-4 flex flex-col my-2'
			>
				<h1 className="block uppercase tracking-wide text-gray-700 font-bold mb-10 text-center text-xl">patient registration</h1>
		
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<label
							htmlFor='firstName'
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							for='grid-first-name'
						>
							First Name
						</label>
						<input
							id='firstName'
							name='firstName'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.firstName}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder='Name of the Patient'
						/>
						{formik.errors.firstName ? (
							<div className='text-red-700 text-xs'>
								{formik.errors.firstName}
							</div>
						) : null}
					</div>

					<div className='md:w-1/2 px-3 mb-6 md:mb-0'>
						<label
							htmlFor='lastName'
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							for='grid-last-name'
						>
							Last Name
						</label>
						<input
							id='lastName'
							name='lastName'
							type='text'
							onChange={formik.handleChange}
							value={formik.values.lastName}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder="Father's Name / Last Name"
						/>
						{formik.errors.lastName ? (
							<div className='text-red-700 text-xs'>
								{formik.errors.lastName}
							</div>
						) : null}
					</div>
				</div>

				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							htmlFor='age'
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						>
							Age
						</label>
						<input
							id='age'
							name='age'
							type='Number'
							onChange={formik.handleChange}
							value={formik.values.age}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder='Age of the Patient'
						/>
						{formik.errors.age ? (
							<div className='text-red-700 text-xs'>{formik.errors.age}</div>
						) : null}
					</div>
					<div className='md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							htmlFor='phno'
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						>
							Phone Number
						</label>
						<input
							id='phno'
							name='phno'
							type='number'
							onChange={formik.handleChange}
							value={formik.values.phno}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder='12345 67890'
						/>
						{formik.errors.phno ? (
							<div className='text-red-700 text-xs'>{formik.errors.phno}</div>
						) : null}
					</div>

					<div className='md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							htmlFor='email'
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						>
							Email Address
						</label>
						<input
							id='email'
							name='email'
							type='email'
							onChange={formik.handleChange}
							value={formik.values.email}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder='Mail-id of the Patient'
						/>
						{formik.errors.email ? (
							<div className='text-red-700 text-xs'>{formik.errors.email}</div>
						) : null}
					</div>
				</div>

				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/3 px-3 mb-6 md:mb-0'>
						<p class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Gender</p>
						<label class='inline-flex items-center'>
							<input
								type='radio'
								class='form-radio'
								name='gender'
								value='male'
								checked={formik.values.gender === "male"}
								onChange={formik.handleChange}
							></input>
							<span class='ml-2 text-gray-700 font-bold'>Male</span>
						</label>
						<label class='inline-flex items-center ml-6'>
							<input
								type='radio'
								class='form-radio'
								name='gender'
								value='female'
								checked={formik.values.gender === "female"}
								onChange={formik.handleChange}
							></input>
							<span class='ml-2 text-gray-700 font-bold'>Female</span>
						</label>
						<label class='inline-flex items-center ml-6'>
							<input
								type='radio'
								class='form-radio'
								name='gender'
								value='others'
								checked={formik.values.gender === "others"}
								onChange={formik.handleChange}
							></input>
							<span class='ml-2 text-gray-700 font-bold'>Others</span>
						</label>
					</div>

					<div className='md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							htmlFor='city'
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
						>
							city
						</label>
						<input
							id='city'
							name='city'
							type='city'
							onChange={formik.handleChange}
							value={formik.values.city}
							className='appearance-none block w-full bg-grey-lighter text-grey border border-red rounded py-3 px-4 mb-3'
							placeholder='Enter Name of the City'
						/>
						{formik.errors.city ? (
							<div className='text-red-700 text-xs'>{formik.errors.city}</div>
						) : null}
					</div>

					<div class='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
						<label
							class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							for='state'
						>
							State
						</label>
						<div class='relative'>
							<select
								value={formik.values.state}
								onChange={formik.handleChange}
								class='block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='state'
							>
								<option value='Tamil Nadu'>Tamil Nadu</option>
								<option value='others'>Others</option>
							</select>
							<div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
								<svg
									class='fill-current h-4 w-4'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
								>
									<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
								</svg>
							</div>
						</div>
					</div>
				</div>

				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-full px-3 mb-6 md:mb-0'>
						<label
							className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
							for='grid-city'
						>
							Complaints
						</label>
						<textarea
							className='appearance-none block w-full bg-grey-lighter text-grey border border-grey-lighter rounded py-3 px-4 resize border rounded-md mb-2'
							name='complaint'
							placeholder='Type your Complaints ... '
							value={formik.values.complaint}
							onChange={formik.handleChange}
						></textarea>
					</div>
				</div>
				
				
				<div className='-mx-4 md:flex mb-4'>
					<div className='md:w-1/6 px-3 mb-6 md:mb-0'>
					<PDFDownloadLink document={<MyDoc />} fileName="somename.pdf"  style={{
								textDecoration: "none",
								padding: "10px",
								backgroundColor: "#fff",
								border: "2px solid #4a4a4a",
								borderRadius: '5px',
								color: "black",
								fontWeight: "bolder",
						}}>
						{({ blob, url, loading, error }) =>
						loading ? 'Loading document...' : 'DOWNLOAD PDF'
						}
						</PDFDownloadLink>
					</div>
					<div className='md:w-4/6 px-3 mb-6 md:mb-0'>
					
					</div>

					<div className='md:w-1/6 px-20 mb-6 md:mb-0'>
					<button
						type='submit'
						class='bg-gray-700 text-white font-bold py-2 px-4 rounded uppercase'
					>
						submit
					</button>
					</div>	
				</div>
			</form>
		</div>
	);
};

export default Formone;
