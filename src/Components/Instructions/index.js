import "./instructions.css";
import searchBar from '../../Images/searchbar.png';
import barcodeScanner from '../../Images/barcode-scanner2.png';
import dietaryRequirements from '../../Images/dietary-requirements2.png';
import happyFace from '../../Images/happy.gif';
import sadFace from '../../Images/sad.gif';
import canIEatThis from '../../Images/can-i-eat-this2.png';
import addToList from '../../Images/add-to-list.png';
import myFoods from '../../Images/myfoods.png';

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
			<p className="paragraph">2. Click on the Barcode Scanner icon on the right of the search bar</p>
			<img src={barcodeScanner} alt="barcode scanner" className="barcode-scanner"></img>

			<h2 className="subheading">Results:</h2>
			<p className="paragraph">If you can eat this product, a happy face will appear:</p>
			<img src={happyFace} alt="happy face" className="happy-face"></img>
			<p className="paragraph">If you can't eat this product, a sad face will appear:</p>
			<img src={sadFace} alt="sad face" className="sad-face"></img>	

			<h2 className="subheading">Saving your favourite foods:</h2>
			<p className="paragraph">If you want to save this product to your shopping list, click:</p>
			<img src={addToList} alt="add to list button" className="add-to-list"></img>
			<p className="paragraph">If you want to view your shopping list, click 'My Foods':</p>
			<img src={myFoods} alt="my foods page" className="my-foods"></img>	
			<p className="paragraph">Or, head to the 'My Foods' page from the navigation menu:</p>																			
		</div>

	);
}

export default Instructions;