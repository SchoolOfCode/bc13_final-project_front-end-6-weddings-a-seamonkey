import "./about.css";
import ingredients from '../../Images/ingredients.png';
import ingredientsRed from '../../Images/ingredients-red.png';

export default function About() {
    return (
<div className="about-section">
   

        <h1 className="heading">Welcome to FoodMap</h1>

        <h2 className="subheading">Do you find it difficult to shop for your dietary requirements?</h2>

        <p>Over 15 million people in the UK live with a chronic health condition. Some of these conditions, such as Endometriosis and IBS, can be helped by adhering to a specific diet.</p>
        
        <h2 className="subheading">What's the problem?</h2>
        
        <p>Packaging in supermarkets can be hard to interpret and there are so many variables to consider, that shopping for even basic foodstuffs can feel overwhelming.</p>

        <h2 className="subheading">Example</h2>
        
        <p>Here is an example of the ingredients for a product with the <strong>allergens</strong> higlighted in bold:</p>

        <img src={ingredients} alt="ingredients" className="ingredients"></img>

        <p>But what if you have been advised to follow a low FODMAP diet?</p>
        
        <p>You will be asked to avoid ingredients that are high in FODMAPs. This includes not only highlighted allergens such as <strong>wheat,</strong> <strong>milk</strong> and <strong>celery</strong>, but also ingredients that are not highlighted in bold.</p>
        
        <p>Foods which are high in FODMAPs are underlined in red:</p>

        <img src={ingredientsRed} alt="ingredients with red underline" className="ingredients-red"></img>

        <p>As you can see, it's hard to pick out the ingredients you're trying to avoid.</p>

        <h2 className="subheading">That's where FoodMap helps!</h2>
        
        <p>FoodMap is designed to help you work out whether the food you're buying fits with your dietary requirements.</p>

        <p>You simply scan or enter the name of the product you're considering buying, and FoodMap will return a happy or sad face to let you know if you can eat it or not - simple!</p>

        <p>Please note: FoodMap is not intended as a medical or diagnostic device. Always follow the guidance of your GP or a Dietician when following a restrictive or limiting diet.</p>
        
            <h2 className="subheading">Who are You?</h2>
                <p>FoodMap was developed by a team of Bootcampers from School of Code as a 4-week project.</p>

        <h2 className="subheading">Meet Our Team!</h2>
    
            <h3>Rachel Morris</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
    

            <h3>Luke Alexander</h3>
            <p>SoC Bootcamper</p>
            <p>Luke spent five years in the civil service working as a debt management adviser before deciding to make a career switch and re-training as a software developer. He wants to use the communication skills gained from thousands of difficult conversations with taxpayers and apply them in an exciting field where he can collaborate on projects that make a difference in the world.</p>
   

            <h3>Violeta Cique Fernández</h3>
            <p>SoC Bootcamper</p>
            <p>With a background in Primary Teaching Education and P.E., Violeta worked for almost six years as a SEND Tutor with young people on the Autism Spectrum before switching careers to software developing. She wants to use her experience to make a difference towards making sites more accessible for all kinds of users.</p>
         

            <h3>Steven Collins</h3>
            <p>SoC Bootcamper</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
               

            <h3>Daniel B</h3>
            <p>SoC Bootcamper</p>
            <p>Dan is a coffee addict and video gamer with a passion for Horror and food. After studying law and working in social media he decided to listen to his brain and switch to a career that would challenge him and make him happy.</p>
               
            
            <h3>Martha Bennett</h3>
            <p>SoC Bootcamper</p>
            <p>Martha studied Education at University before launching her own education business in China and Hong Kong. Six years on, she has worked with some great developers and is curious to find out more about coding</p>

            
</div> )}