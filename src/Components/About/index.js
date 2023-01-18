import "./about.css";
import ingredients from '../../Images/ingredients.png';
import ingredientsRed from '../../Images/ingredients-red.png';

export default function About() {
    return (
<div className="about-section">
   
        <h1>Welcome to FoodMap</h1>

        <h2>Do you find it difficult to shop for your dietary requirements?</h2>

        <p>Over 15 million people in the UK live with a chronic health condition. Some of these conditions, such as Endometriosis and IBS, can be helped by adhering to a specific diet.</p>
        
        <h2>What's the problem?</h2>
        
        <p>Packaging in supermarkets can be hard to interpret and there are so many variables to consider, that shopping for even basic foodstuffs can feel overwhelming.</p>

        <h2>Example</h2>
        
        <p>Here is an example of the ingredients for a product with the <strong>allergens</strong> higlighted in bold:</p>

        <img src={ingredients} alt="ingredients" className="ingredients"></img>

        <p>But what if you have been advised to follow a low FODMAP diet?</p>
        
        <p>You will be asked to avoid ingredients that are high in FODMAPs. This includes not only higlighted allergens such as <strong>wheat,</strong> <strong>milk</strong> and <strong>celery</strong>, but also ingredients that are not highlighted in bold.</p>
        
        <p>Foods which are high in FODMAPs are underlined in red:</p>

        <img src={ingredientsRed} alt="ingredients with red underline" className="ingredients-red"></img>

        <p>As you can see, it's hard to pick out the ingredients you're trying to avoid.</p>

        <h2>That's where FoodMap helps!</h2>
        
        <p>FoodMap is designed to help you work out whether the food you're buying fits with your dietary requirements.</p>

        <p>You simply scan or enter the name of the product you're considering buying, and FoodMap will return a happy or sad face to let you know if you can eat it or not - simple!</p>

        <p>Please note: FoodMap is not intended as a medical or diagnostic device. Always follow the guidance of your GP or a Dietician when following a restrictive or limiting diet.</p>
        
            <h2>Who are You?</h2>
                <p>FoodMap was developed by a team of Bootcampers from School of Code as a 4-week project.</p>

        <h2>Meet Our Team!</h2>
    
            <h3>Rachel Morris</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
    

            <h3>Luke Alexander</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
   

            <h3>Violeta Cique Fernández</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
         

            <h3>Steven Collins</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
               

            <h3>Daniel B</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
               
            
            <h3>Martha Bennett</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            
</div> )}