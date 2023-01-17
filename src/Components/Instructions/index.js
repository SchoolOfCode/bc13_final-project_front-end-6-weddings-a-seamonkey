import "./instructions.css";
import searchBar from '../../Images/searchbar.png';
import barcodeScanner from '../../Images/barcodescanner.png';
import dietaryRequirements from '../../Images/dietary-requirements.png';
import happyFace from '../../Images/happy.gif';
import sadFace from '../../Images/sad.gif';

function Instructions() {
	return (
		<div>
		
			<div>
			<h1 className="heading">How to use FoodMap</h1>
			</div>

				<div>
				<h2 className="subheading">What does the app do?</h2>
				<p>This app is designed to help you navigate complex dietary requirements in a supermarket setting.</p>
				</div>

					<div>
					<h2>How do I use it?</h2>
					<p>1. You can either type the name of the product or the barcode number into the search bar:</p>
					</div>

						<div>
						<img src={searchBar} alt="search bar"></img>
						</div>

							<div>
							<p>2. Select your dietary requirements:</p>
							</div>

								<div>
								<img src={dietaryRequirements} alt="dietary requirements"></img>
								</div>
							
									<div>
									<p>3. Click the 'Can I Eat This?' button</p>
									</div>

										<div>
										<h2>Or, you can use the Barcode Scanner to scan the barcode of each product:</h2>
										</div>

											<div>
											<p>1. Select your dietary requirements:</p>
											</div>

												<div>
												<img src={dietaryRequirements} alt="dietary requirements"></img>
												</div>

													<div>
													<p>2. Click on the Barcode Scanner icon at the bottom of your screen</p>
													</div>

														<div>
														<img src={barcodeScanner} alt="barcode scanner"></img>
														</div>

															<div>
															<p>3. Use the Barcode Scanner thus*:</p>
															</div>

																<div>
																<h2>Results:</h2>
																</div>

																	<div>
																	<p>If you can eat this product, a happy face will appear:</p>
																	</div>

																		<div>
																		<img src={happyFace} alt="happy face"></img>
																		</div>

																			<div>
																			<p>If you can't eat this product, a sad face will appear:</p>
																			</div>

																				<div>
																				<img src={sadFace} alt="sad face"></img>
																				</div>

		</div>
	);
}

export default Instructions;