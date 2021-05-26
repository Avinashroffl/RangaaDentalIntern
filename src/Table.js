import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "./Styles/Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink, StyleSheet } from "@react-pdf/renderer";
import GetPDF from "./GetPDF";

// Font.register({ family: 'Roboto', src: '../fonts/Roboto/Roboto-Bold.ttf'});

const styles = StyleSheet.create({
	page: {
		padding: 10,
	},
	pagecontainer: {
		backgroundColor: "#f9f6f7",
		height: "100%",
		width: "100%",
		padding: 10,
		fontSize: "11px",
		border: "1px solid black",
		// fontFamily:'Roboto',
		// fontWeight:'bold',
	},
	header: {
		width: "100%",
		fontSize: "16px",
		textAlign: "center",
		fontWeight: "bold",
		paddingTop: "9px",
		paddingBottom: "3px",
		borderBottom: "1px solid black",
	},
	address: {
		fontSize: "10px",
		marginTop: "5px",
		width: "70%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	date: {
		textAlign: "right",
		fontSize: "8px",
		marginTop: "5px",
	},
	margintop: {
		marginTop: "30px",
	},
	subheading: {
		fontSize: "14px",
		fontWeight: "bold",
		marginBottom: "10px",
		marginTop: "8px",
	},
	BasicDetails: {
		borderBottom: "1px solid gray",
		lineHeight: "2px",
		display: "flex",
		flexDirection: "row",
		padding: "5px",
	},
	box1: {
		flex: "2",
	},
	box2: {
		flex: "1",
	},
	box3: {
		flex: "1",
	},
	Thankyou: {
		textAlign: "center",
		marginTop: "4px",
	},
	footer: {
		textAlign: "right",
		fontSize: "8px",
	},
});

function Table({ patients }) {
	return (
		<div>
			<div className='-my-6 py-4 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 patienttabel clear-both mt-12'>
				<div className='align-middle inline-block min-w-full shadow overflow-hidden shadow-dashboard rounded-bl-lg rounded-br-lg'>
					<table className='min-w-full overflow-x-auto'>
						<thead className='text-gray-700'>
							<tr>
								<th className='pl-4 py-4 border-b-2 border-gray-300   leading-4  tracking-widest uppercase'>
									Full Name
								</th>
								<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Age'>
									Age
								</th>
								<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Gender'>
									Gender
								</th>
								<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Phone'>
									Phone
								</th>
								<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Complaint'>
									Complaint
								</th>
								<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase Status'>
									Status
								</th>
								<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase'>
									PDF
								</th>
								<th className='py-2 border-b-2 border-gray-300 text-center text-sm leading-4 tracking-widest uppercase'>
									Edit
								</th>
							</tr>
						</thead>
						<tbody className='bg-white'>
							{patients.length > 0 ? (
								patients.map((patient) => (
									<tr>
										<td className='pl-4 py-2.5 whitespace-no-wrap border-b border-gray-500 text-left font-semibold'>
											<div className='text-sm leading-5 font-bold'>
												{patient.Name}
											</div>
										</td>
										<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-center font-semibold Age'>
											<div className='text-sm leading-5'>{patient.Age}</div>
										</td>
										<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-center font-semibold Gender'>
											<div className='text-sm leading-5'>{patient.Gender}</div>
										</td>
										<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center font-semibold Phone'>
											{patient["Phone Number"]}
										</td>
										<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center font-semibold Complaint'>
											{patient.complaints}
										</td>
										<td className='py-3 whitespace-no-wrap border-b border-gray-500 text-sm leading-5 text-center Status'>
											<span className='relative inline-block px-3 py-1 font-semibold leading-1 text-center'>
												<span
													aria-hidden
													className='absolute inset-0 bg-red-500 rounded-full'
												></span>
												<span className='relative text-xs text-white tacking-widest'>
													Completed
												</span>
											</span>
										</td>
										<td className='py-3 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center'>
											<button className='px-2 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-200 hover:text-white focus:outline-none'>
												<PDFDownloadLink
													document={<GetPDF data={patient} styles={styles} />}
													//data={formik.values}
													fileName={`${patient.Name}_${patient.Age}`}
													className='downlad-btn'
												>
													{({ blob, url, loading, error }) =>
														loading ? "Loading document..." : "Download"
													}
												</PDFDownloadLink>
											</button>
										</td>
										<td className='whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5 text-center'>
											<span
												href=''
												className='text-green-900  hover:text-cyan-600 cursor-pointer'
											>
												<FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
											</span>
										</td>
									</tr>
								))
							) : (
								<h2 style={{ fontFamily: "monospace" }}>Loading ....</h2>
							)}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Table;
