import "./about.css";
import ingredients from '../../Images/ingredients.png';
import ingredientsRed from '../../Images/ingredients-red.png';

export default function About() {
    return (
<div className="about-section">
   
        <h1>Why use FoodMap?</h1>

        <h2>Do you find it difficult to shop for your dietary requirements?</h2>

        <p>Over 15 million people in the UK live with a chronic health condition. Some of these conditions, such as IBS or Diverticulitis, are managed using dietary restrictions.</p>
        
        <p>But what if your dietary restrictions are not, technically, allergens? Packaging in supermarkets can be hard to interpret and there are so many variables to consider, that shopping for even basic foodstuffs can be overwhelming.</p>

        <p>Here is an example of the ingredients for a product with the <strong>allergens higlighted in bold:</strong></p>

        <img src={ingredients} alt="ingredients" className="ingredients"></img>

        <p>What if, for example, you have been advised to follow the low FODMAP diet? You may be asked to avoid ingredients that are high in FODMAPs. Foods which are high in FODMAPs are underlined in the ingredients list in red:</p>

        <img src={ingredientsRed} alt="ingredients with red underline" className="ingredients-red"></img>

        <p>Navigating a diet without this key information can make shopping for food a frustrating task.</p>

        <h2>That's where FoodMap comes in!</h2>

        <p>Whether you have Crohn's, Ulcerative Colitis, Diverticulitis, Endometriosis, IBS (or any gut-impacted health conditions), following a specific diet as set out by your GP or a Dietician can help.</p>
        
        <p>FoodMap is designed to help you work out whether the food you're buying works with your dietary requirements.</p>

        <p>Please note: FoodMaps is not intended as a medical or diagnostic device. Always follow the guidance of your GP or a Dietician when following a restrictive or limiting diet.</p>
        
            <h2>Who are You?</h2>
                <p>FoodMap was developed by a team of Bootcampers from School of Code as a 4-week project.</p>

        <h2>Meet Our Team!</h2>
    
            <h3>Rachel Morris</h3>
            <p className="heading">SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
    

            <h3>Luke Alexander</h3>
            <p className="heading">SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
   

            <h3>Violeta Cique Fernández</h3>
            <p className="heading">SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
         

            <h3>Steven Collins</h3>
            <p className="heading">SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
               

            <h3>Daniel B</h3>
            <p className="heading">SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
               
            
            <h3>Martha Bennett</h3>
            <p className="heading">SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            
</div> )}