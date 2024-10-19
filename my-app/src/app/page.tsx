import Image from "https://thewashingtonnote.com/wp-content/uploads/2020/04/software-development-1-scaled.jpg"
import image1 from "https://thrivedx.com/wp-content/uploads/2023/09/AdobeStock_622467997_LR.webp"
import image2 from "https://thumbs.dreamstime.com/z/big-data-science-analysis-information-technology-concept-server-room-background-big-data-science-analysis-information-technology-155674955.jpg"
import image3 from "https://thumbs.dreamstime.com/z/creative-blockchain-wallpaper-creative-glowing-blockchain-wallpaper-cyberspace-cryptocurrency-concept-d-rendering-111776855.jpg"
import image4 from "https://dimensicloud.id/blog/wp-content/uploads/2022/06/DIMENSI-CLOUD-BACKGROUND-2-768x432.png"
import image5 from "https://thumbs.dreamstime.com/z/creative-blockchain-wallpaper-creative-glowing-blockchain-wallpaper-cyberspace-cryptocurrency-concept-d-rendering-111776855.jpg"
import image6 from "https://wallpaperaccess.com/full/1658350.jpg"
export default function Responsive() {
  return (
    
    <div className="parentContainer">

    <div className="mainHeading">  Top Daily Information Technology Blogs</div>
      
      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <img className="image" src="https://thewashingtonnote.com/wp-content/uploads/2020/04/software-development-1-scaled.jpg" alt="pic" />
      </div>
        <h1 className="title">Software Development</h1>
        <p className="description">
        Creating applications, websites, and software solutions. 
          This includes both front-end and back-end development.
          Writing the actual code using programming languages.
        </p>
        <button className="btn">Read More</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <img className="image" src="https://thrivedx.com/wp-content/uploads/2023/09/AdobeStock_622467997_LR.webp" alt="pic" />
        </div>
        <h1 className="title">Cybersecurity</h1>
        <p className="description">
        Protecting systems and networks from cyber threats. This field focuses risk assessment, 
        security measures,incident response. 
        practice of protecting systems networks and data from attacks
       </p>
        <button className="btn">Read More</button>
      </div>
     
      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <img  className="image"src="https://thumbs.dreamstime.com/z/big-data-science-analysis-information-technology-concept-server-room-background-big-data-science-analysis-information-technology-155674955.jpg" alt="" />
        </div>
        <h1 className="title"> Data Science and Analytics:</h1>
        <p className="description">
        Analyzing the large datasets to derive insights and inform decision-making. 
        Data scientists are uses statistical methods and  different machine learning algorithms.
        </p>
        <button className="btn">Read More</button>
         </div>
         
        <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <img className="image" src="https://dimensicloud.id/blog/wp-content/uploads/2022/06/DIMENSI-CLOUD-BACKGROUND-2-768x432.png" alt="pic" />
        </div>
        <h1 className="title">Cloud Computing</h1>
        <p className="description">
        Providing services like storage, processing, and networking over the internet. 
        Key areas include cloud architecture and services like AWS, Azure, and Google Cloud.
        </p>
        <button className="btn">Read More</button>
        </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <img className="image" src="https://thumbs.dreamstime.com/z/creative-blockchain-wallpaper-creative-glowing-blockchain-wallpaper-cyberspace-cryptocurrency-concept-d-rendering-111776855.jpg" alt="pic" />
        </div>
        <h1 className="title">Blockchain Technology</h1>
        <p className="description">
        Developing decentralized applications and smart contracts. 
        This field is often associated with cryptocurrencies but has broader applications in finance, 
        supply chain, and more.
        </p>
        <button className="btn">Read More</button>
      </div>

      <div className="childContainer bounce-in-right">
        <div className="imageContainer">
          <img  className="image" src= "https://wallpaperaccess.com/full/1658350.jpg" alt="pic" />
        </div>
        <h1 className="title">Web Development</h1>
        <p className="description">
        Building and maintaining websites and web applications. This can include full-stack development, 
        where both front-end and back-end skills required and also required some specifications
       </p>
        <button className="btn">Read More</button>
         </div>
    </div>

  );
}
