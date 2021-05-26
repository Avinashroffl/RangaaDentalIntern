/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { userLogout, getMorePatients, getPatients } from "./utils/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPowerOff,
	// faBars,
	faSearch,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import { logout } from "./redux/actions";
import { useDispatch } from "react-redux";
import moment from "moment";
import "./Styles/index.css";
import Table from "./Table";
import "./Styles/Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
	const dispatch = useDispatch();
	const [patients, setPatients] = useState([]);
	useEffect(() => {
		getPatients()
			.then((res) => setPatients(res))
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<div className='navbar text-white'>
				{/* <FontAwesomeIcon
					icon={faBars}
					className='float-left mb-2'
				></FontAwesomeIcon> */}
				<h3 className='text-center m-auto'>PATIENT DETAILS</h3>
				<div className='dropdown'>
					<a>
						<FontAwesomeIcon
							icon={faPowerOff}
							className='float-right'
						></FontAwesomeIcon>
					</a>
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

			<div className='Dashboard'>
				<div className='p-4'>
					<div className='float-left Date'>
						<label>Date : </label>
						<input
							type='date'
							name='date'
							className='p-2 m-2 shadow-xl border-none'
							defaultValue={moment().format("DD,MM,YYYY")}
						></input>
					</div>

					<div className='float-right Search'>
						<div className='bg-white flex items-center  border-12 shadow-xl w-full h-12'>
							<input
								className='rounded-l-full w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none border-none'
								id='search'
								type='text'
								placeholder='Search'
							></input>
							<div className='p-4'>
								<span className='text-blue-900 hover:text-blue-600'>
									<FontAwesomeIcon
										icon={faSearch}
										className='float-right'
									></FontAwesomeIcon>
								</span>
							</div>
						</div>
					</div>
				</div>

				<Table patients={patients} />

				{/* Pagination starts here */}
				<div className='p-3 pt-5 text-center'>
					<div className=' patienttabel mt-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
						<div className='flex-1 flex justify-between sm:hidden'>
							<a
								href='#'
								className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
							>
								Previous
							</a>
							<a
								href='#'
								className='ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500'
							>
								Next
							</a>
						</div>
						<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
							<div>
								<p className='text-sm text-gray-700'>
									Showing <span className='font-medium'>1</span> to{" "}
									<span className='font-medium'>3</span> of{" "}
									<span className='font-medium'>3</span> results
								</p>
							</div>
							<div>
								<ReactPaginate
									previousLabel={"previous"}
									nextLabel={"next"}
									breakLabel={"..."}
									breakClassName={"break-me"}
									pageCount={10}
									marginPagesDisplayed={2}
									pageRangeDisplayed={5}
									onPageChange={() =>
										getMorePatients()
											.then((res) => setPatients(res))
											.catch((err) => console.log(err))
									}
									containerClassName={"pagination"}
									activeClassName={"active"}
								/>
							</div>
						</div>
					</div>
				</div>

				<Link to='/Receptionist'>
					<a className='hover:text-cyan-900'>
						<FontAwesomeIcon
							icon={faUserPlus}
							className='userplus'
							size='lg'
						></FontAwesomeIcon>
					</a>
				</Link>
			</div>
		</>
	);
}

export default React.memo(Dashboard);
