import "./instructions.css";
import searchBar from '../../Images/searchbar.png';
import barcodeScanner from '../../Images/barcodescanner.png';
import dietaryRequirements from '../../Images/dietary-requirements.png';
import happyFace from '../../Images/happy.gif';
import sadFace from '../../Images/sad.gif';
import canIEatThis from '../../Images/can-i-eat-this.png';

function Instructions() {
	return (
		<div
			className="instructions">
			
			<h1 className="heading">How to use FoodMap</h1>
			
			<h2 className="subheading">What does the app do?</h2>
			<p className="paragraph">This app is designed to help you navigate dietary requirements in a supermarket setting.</p>
		

			<h2 className="subheading">How do I use it?</h2>
			<p className="paragraph">1. You can either type the name of the product or the barcode number into the search bar e.g. "crumpets" or "5010044000701":</p>
			<img src={searchBar} alt="search bar" className="search-bar"></img>
			
			<p className="paragraph">2. Select your dietary requirements:</p>
			<img src={dietaryRequirements} alt="dietary requirements" className="dietary-requirements"></img>	
		
			<p className="paragraph">3. Click the 'Can I eat this?' button</p>
			<img src={canIEatThis} alt="Can I eat this?" className="can-i-eat-this"></img>

			<h2 className="subheading">Or, you can use the Barcode Scanner to scan the barcode of each product:</h2>
			<p className="paragraph">1. Select your dietary requirements:</p>
			<img src={dietaryRequirements} alt="dietary requirements" className="dietary-requirements"></img>
			<p className="paragraph">2. Click on the Barcode Scanner icon at the bottom of your screen</p>
			<img src={barcodeScanner} alt="barcode scanner" className="barcode-scanner"></img>
			<p className="paragraph">3. Use the Barcode Scanner thus*:</p>

			<h2 className="subheading">Results:</h2>
			<p className="paragraph">If you can eat this product, a happy face will appear:</p>
			<img src={happyFace} alt="happy face" className="happy-face"></img>
			<p className="paragraph">If you can't eat this product, a sad face will appear:</p>
			<img src={sadFace} alt="sad face" className="sad-face"></img>
			<p className="paragraph">Happy shopping!</p>																					
		</div>
		
	);
}

export default Instructions;