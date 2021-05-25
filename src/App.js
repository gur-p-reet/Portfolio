import React, {Component} from 'react';
import './App.css';
import myLogo from './media/myLogo.png';
import pandasLogo from './media/pandasLogo.svg.png';
import scikitlearnLogo from './media/scikit-learnLogo.png';
import numpyLogo from './media/numpyLogo.svg';
import project11 from './media/project11.jpg';
import project1Img from './media/project1.png';
import project1Mp4 from './media/project1.mp4';
import project2Img from './media/project2.jpg';
import project3Img from './media/project3.jpg';
import matplotlibLogo from './media/matplotlibLogo.webp';
import expressLogo from './media/express.jsLogo.png';
import googleColabLogo from './media/googlecolabLogo.png';
import myPicture from './media/profilePicture.jpg';
import Tilt from 'react-tilt';

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import {GoMail,GoMarkGithub} from 'react-icons/go';
import {IoLogoLinkedin,IoLogoJavascript} from 'react-icons/io';
import {BsPersonFill} from 'react-icons/bs';
import {GrProjects,GrDocumentText} from 'react-icons/gr';
import {GiAchievement,GiSkills} from 'react-icons/gi';
import {HiOutlineMail} from 'react-icons/hi';
import {AiOutlineHtml5} from 'react-icons/ai';
import {DiCss3,DiHeroku} from 'react-icons/di';
import {SiTableau,SiJupyter,SiMicrosoftsqlserver,SiPostgresql,SiTensorflow,SiMicrosoftoffice,SiLatex} from 'react-icons/si';
import {FaJava,FaPython,FaReact,FaAws,FaNode} from 'react-icons/fa';
import {ImNpm} from 'react-icons/im';
import {MdPublic} from 'react-icons/md';
class App extends Component{
	playVideo=(event)=>{
	   						
	} 
  	render(){ 
    	return (
	    <div className="App" >	
		    <nav className="content">
	    	    <a href="header"><item className="logo"> <img  src={myLogo} alt="logo"/> </item></a>
	    		<a href="#projects"> <item className="contentItems"><GrProjects style={{verticalAlign:"middle"}}/> <h className="contentText" style={{verticalAlign:"middle"}}>&nbsp;Projects</h></item></a>
	    		<a href="#about"><item className="contentItems"> <BsPersonFill style={{color:"skyblue",verticalAlign:"middle"}}/> <h className="contentText">&nbsp;About</h></item></a>
	    		<a href="#education"><item className="contentItems"> <GiAchievement style={{color:"yellow",verticalAlign:"middle"}}/> <h className="contentText">&nbsp;Education</h></item></a>
	    		<a href="#skills"><item className="contentItems"> <GiSkills style={{color:"#661313",verticalAlign:"middle"}}/> <h className="contentText" >&nbsp;Skills</h></item></a>
	    		<a href="#publications"><item className="contentItems"> <MdPublic style={{color:"#661313",verticalAlign:"middle"}}/> <h className="contentText">&nbsp;Publications</h></item></a>
	    		<a href="#contacts"><item className="contentItems"><HiOutlineMail style={{color:"#ff7f50",verticalAlign:"middle"}}/> <h className="contentText">&nbsp;Contact</h></item></a>
	    		<a href=""><item className="contentItems"> <GrDocumentText style={{color:"red",verticalAlign:"middle"}}/> <h className="contentText">&nbsp;Resume</h></item></a>
		    </nav>
		    <main className="">
		    	
		    	<header className="header bgImg " id="#header">
						<h2>Gurpreet Singh </h2>
			    	    <h3></h3>
				 
			      	<ScrollAnimation animateIn=" hireBox shutterLeft">	
					    <p className="f3"> Data Analyst </p>	
					</ScrollAnimation>      	
				
				</header>

				<heading id="projects" className="sectionHeading"> Projects</heading>
		      	<projects className="projects">
		      		<h2 className="projectHeading">Spotting-Dog-Breed</h2>
					<div className="projectItems"> 
	                		
		  				
	  					<div className="projectImg">
	  						<Tilt className="Tilt" options={{max:15 }} >
								<img src={project11} style={{border:"1vw solid white"}} className="Tilt-inner" alt="logo" />
							</Tilt> 	
				      		
			  			</div>
			  			<div className="projectDetails">
		  					<h3 className="projectLogos">
			  					< a style={{color:"#E44D26"}}/> Google Colab
			  					&nbsp;&nbsp; <d style={{color:"#61DBFB"}}/>Pandas
			  					&nbsp;&nbsp; <d style={{color:"#61DBFB"}}/>Numpy
			  					&nbsp;&nbsp; <d style={{color:"#61DBFB"}}/>Matplotlib
			  					&nbsp;&nbsp; < b style={{color:"#3C99DC"}}/>TensorFlow
			  					&nbsp;&nbsp;< c style={{color:"#F0DB4F"}}/>Keras API
			  					&nbsp;&nbsp; <e style={{color:"#3C873A"}} />mobilenet_v2

		  					</h3>

		  					
		  					<ul className=" pt4 pb3 projectList">
		  						<li>Preporessed images into numbers and normalized the data</li>
		  						<li>Built the model using Keras API and using mobilenet_v2 from tenserflow hub</li>
		  						<li>Trained the model on more than 10,000 images</li>
		  						<li>Tested the model and calcualed the prediction probalilies for each bread</li>
		  						
		  					</ul>
		  					<a href="https://github.com/gur-p-reet/dog-breed-identification"><button className="btn">See Live</button></a>
		  					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  					  <a href="https://github.com/gur-p-reet/dog-breed-identification" style={{fontSize:"20px"}}>Source Code </a>
				</div>	
					</div> 

					<h2 className="projectHeading">Smart-Sense</h2>
					<div className="projectItems"> 
	                		
		  				
	  					<div className="projectImg">
	  						<Tilt className="Tilt" options={{max:15 }} >
								<img src={project2Img} style={{border:"1vw solid white"}} className="Tilt-inner" alt="logo" />
							</Tilt> 	
				      		
			  			</div>
			  			<div className="projectDetails">
		  					<h3 className="projectLogos">
			  					<AiOutlineHtml5 style={{color:"#E44D26"}}/> HTML5 
			  					&nbsp;&nbsp; <DiCss3 style={{color:"#3C99DC"}}/>CSS 
			  					&nbsp;&nbsp;<IoLogoJavascript  style={{color:"#F0DB4F"}}/>Javascript
			  					&nbsp;&nbsp; <FaReact style={{color:"#61DBFB"}}/>React
			  					&nbsp;&nbsp; <FaNode style={{color:"#3C873A"}} />Node.js
			  					&nbsp;&nbsp;<ImNpm style={{color:"#CC3534"}} />NPM
			  					&nbsp;&nbsp;<SiPostgresql style={{color:"#306998"}} />PostgreSQL
			  					&nbsp;&nbsp;<DiHeroku style={{color:"#C9C3E6"}} /> Heroku

		  					</h3>

		  					
		  					<ul className=" pt4 pb3 projectList">
		  						<li>RESTful API</li>
		  						<li>Responsive UI</li>
		  						<li>Human Face Detection from image URL</li>
		  						<li>Registration/Sign-In form</li>
		  						<li>Connected to the Clarifai API </li>
		  						<li>Store user entries in the database </li>
		  					</ul>
		  					<a href="https://smart-sense.herokuapp.com/"><button className="btn">See Live</button></a>
		  					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  					  <a href="https://github.com/gur-p-reet/smartSense" style={{fontSize:"20px"}}>Source Code </a>
{/*		  					  &nbsp;&nbsp;&nbsp;&nbsp;
		  					  <a href="https://github.com/gur-p-reet/smartSense-Api" style={{fontSize:"20px"}}>Source Code 2</a>
*/}					</div>	
					</div> 


	   	            <h2 className="projectHeading">Protein-Optimization</h2>
	                <div className="projectItems"> 
		             
	                	<div className="projectImg"> 	
						     <Tilt className=" pa1 pb2 Tilt" options={{max:15 }} >
								 <img src={project1Img} className="projectImg" alt="logo" /><br />
							</Tilt>
				      		<button className="btn" onClick={this.playVideo}> See Live</button> 
		  					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		  					<a href="https://github.com/gur-p-reet/PSP" style={{fontSize:"20px"}}>Source Code</a>	
			  			</div>	
		  				<div className="projectDetails">
		  					<h3 className="f5 projectLogos" > <FaJava style={{color:"#007396"}}/> Java &nbsp; JOGL</h3> 
		  					<ul className="f4 projectList">
		  						<li>Interactive user interface</li>
		  						<li>Multiple Optimization Algorithms</li>
		  						<li>On-demand Hybridzation</li>
		  						<li>Multiple input/output options</li>
		  						<li>Analysis of results</li>
		  					</ul>
		  					<div className="pl4 pt3 projectVideo">
								<video  width="100%" height="auto"  controls>
									<source src={project1Mp4}  type="video/mp4"/>
								</video>
							 </div>
		  				</div>	
					</div> 
					

					<h2 className="projectHeading">Wood-Works</h2>
					<div className="projectItems"> 
	                	<div className="projectImg"> 
	                		<Tilt className="Tilt" options={{max:15 }} >								
				      			<img src={project3Img} style={{border:"1vw solid white",width:"90%"}} className="projectImg" alt="logo" />		
							</Tilt> 
							<div className="videoProject">
			  				</div>
			  			</div>
						<div className="projectDetails">
		  					<h3 className="f5 projectLogos">
			  					<AiOutlineHtml5 style={{color:"#E44D26"}}/> HTML5 
			  					&nbsp;&nbsp; <DiCss3 style={{color:"#3C99DC"}}/>CSS 
			  					&nbsp;&nbsp;<IoLogoJavascript  style={{color:"#F0DB4F"}}/>Javascript
			  					&nbsp;&nbsp; <FaReact style={{color:"#61DBFB"}}/> React<br/>
			  					<FaNode style={{color:"#3C873A"}} />  Node.js
			  					&nbsp;&nbsp;<ImNpm style={{color:"#CC3534"}} /> NPM
			  					&nbsp;&nbsp;<SiPostgresql style={{color:"#306998"}} />  PostgreSQL
			  					&nbsp;&nbsp;<DiHeroku style={{color:"#C9C3E6"}} />  Heroku
		  					</h3>
		  					<ul className=" f4 pt4 pb3 projectList">
		  						<li>RESTful API</li>
		  						<li>Responsive UI</li>
		  						<li>Registration/Sign-In form</li>
		  						<li>Select items for shopping</li>
		  						<li>Place order/Save selected items</li>
		  						<li>Store user history </li>
		  					</ul>
		  					 <a href="https://smart-sense.herokuapp.com/"><button className="btn">See Live</button></a>
		  					  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/gur-p-reet/woodWorks" style={{fontSize:"20px"}}>Source Code</a>
		  				</div>		
	  					
					</div> 

		    	</projects>



		    	<heading id="about" className="sectionHeading">About Me</heading>
		    	
	    		<ScrollAnimation animateIn="tiltBottomIn">
	    			<about className="about">
		    	       <img src={myPicture} className="profileImg " alt="Profile Pucture" />
				      	<p className="georgia">
				      	Hi, my Name is Gurpreet. I am data analyst and researcher, passionate about working with organisations 
				      	that want to make effective use of their data; I have an extensive background working with large and
				      	varied datasets using advanced statistical methods.	Finding patterns and getting insights out of data is something that I really enjoy.
				      	<br/>  I recently expanded my skill set to topics including time series analysis and neural networks,
						and I am excited to keep learning new methods in a challenging and fast-paced environment.
						</p>
					</about>	
				</ScrollAnimation>		
			    
			    <heading id="education" className="sectionHeading">Education</heading>
			   	<education className="education">
			      	<div className="eduItems">
				      	<h3>
				      		<a href="https://www.unbc.ca/">University of Northern British Columbia, BC, Canada</a>
				      	</h3>
				      	<p>M.Sc. (Computer Sceicne)</p>
			      	</div>
			      	<div className="eduItems">
				    	<h3>
				      		<a href="https://puchd.ac.in/">Panjab University, Chandigarh, India</a>
				      	</h3>
				      	Ph.D., M.Phil. (Physics)
				      	</div>
			      	<div className="eduItems">
				        <h3>
				      		<a href="http://online.gndu.ac.in/">Guru Nanak Dev University, Punjab, India</a>
				      	</h3>
				      	M.Sc. (Physics) 		
			      	</div>
			    </education>

 				<heading id="skills" className="sectionHeading">Skills</heading>
			    <skills >		
			    	<h2 className="skillsTitle">Data Science</h2>
					<skills2 className="skills">
						<h3 className="skillsImg" style={{color:"skyblue"}}> <img src={googleColabLogo} width="80px" alt="" /> <br/><h className="skillsText">Google Colab</h></h3> 
						<h3 className="skillsLogo" style={{color:"darkorange"}}> <SiJupyter /> <br/><h className="skillsText">Jupyter Notebook</h></h3> 
						<h3 className="skillsImg" style={{color:"skyblue"}}> <img src= {pandasLogo} width="100px" alt=""/> <br/><h className="skillsText">Pandas</h></h3> 
						<h3 className="skillsImg" style={{color:"skyblue"}}> <img src={numpyLogo} width="80px"  alt="" /> <br/><h className="skillsText">Numpy</h></h3> 
						<h3 className="skillsImg" style={{color:"skyblue"}}> <img src={scikitlearnLogo}  width="100px"alt=""/><br/> <h className="skillsText">Scikit-learn</h></h3> 
						<h3 className="skillsImg" style={{color:"skyblue"}}> <img src={matplotlibLogo} width="100px" alt="" /><br/> <h className="skillsText">Matplotlib</h></h3> 
						<h3 className="skillsLogo" style={{color:"#FF6F00"}}> <SiTensorflow /> <br/><h className="skillsText">TensorFlow</h></h3> 
						<h3 className="skillsLogo" style={{color:"skyblue"}}> <SiTableau /> <br/><h className="skillsText">Tableau</h></h3>
						<h3 className="skillsLogo" style={{color:"#005DA6"}}> <SiMicrosoftsqlserver /> <h className="skillsText" >SSMS</h></h3>
		               {/*	<h3 className="skillsLogo" style={{color:"#3FA037"}}> <SiMongodb /> <h className="skillsText" >MangoDB</h></h3> */}
		               		<h3 className="skillsLogo" style={{color:"#306998"}}> <SiPostgresql /> <h className="skillsText" >PostgreSQL</h></h3>
			  		</skills2>
					<h2 className="skillsTitle" >Software Development</h2>	
			  			<skills2 className="skills">	    								
							<h3 className="skillsLogo" style={{color:"#E44D26"}}> <AiOutlineHtml5 /> <h className="skillsText">HTML5</h></h3> 
							<h3 className="skillsLogo" style={{color:"#3C99DC"}}> <DiCss3 /> <h className="skillsText">CSS</h></h3> 
							<h3 className="skillsLogo" style={{color:"#F0DB4F"}}> <IoLogoJavascript /> <h className="skillsText">Javascript</h></h3> 
							<h3 className="skillsLogo" style={{color:"#61DBFB"}}> <FaReact /> <h className="skillsText">React</h></h3>
							<h3 className="skillsLogo" style={{color:"#CC3534"}}> <ImNpm /> <h className="skillsText" >NPM</h></h3> 
							<h3 className="skillsLogo" style={{color:"#3C873A"}}> <FaNode /> <h className="skillsText" >Node.js</h></h3>
							<h3 className="skillsImg" style={{color:"skyblue"}}> <img src={expressLogo} width="100px" alt=""/> <h className="skillsText" >Express.js</h></h3> 
							<h3 className="skillsLogo" style={{color:"#007396"}}> <FaJava /> <h className="skillsText">Java</h></h3> 
							<h3 className="skillsLogo" style={{color:"#007396"}}> <FaJava /> <h className="skillsText">JOGL</h></h3> 
							<h3 className="skillsLogo" style={{color:"#306998"}}> <FaPython /> <h className="skillsText">Python</h></h3>  
					</skills2>
					<h2 className="skillsTitle" >Other Skills</h2>	
						<skills3 className="skills">
							<h3 className="skillsLogo" style={{color:"#DC3E15"}}> <SiMicrosoftoffice /> <br/><h className="skillsText">MsOffice</h></h3> 											
							<h3 className="skillsLogo" style={{color:"#FF9900"}}> <FaAws /> <br/><h className="skillsText" >AWS</h></h3> 
							<h3 className="skillsLogo" style={{color:"#211F1F"}}> <GoMarkGithub /> <br/><h className="skillsText" >Github</h></h3> 
							<h3 className="skillsLogo" style={{color:"#211F1F"}}> <SiLatex /> <br/><h className="skillsText" >Latex</h></h3> 

						</skills3>
			  	</skills>

			  	<heading id="publications" className="sectionHeading">Publications</heading>
			    <publications className="publications">	
				    <ul >		    								
						<li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0022286017306208"> Structure and vibrational spectroscopic study of alpha-tocopherol, <em> Gurpreet Singh, Ritika Sachdeva, Bimal Rai, G. S. S. Saini</em>,
							Journal of Molecular Structure 1144 (2017) 347-354.</a> </li>
				      	<li><a href="http://www.sciencedirect.com/science/article/pii/S138614251530295X" className="">Structure, Spectra and Antioxidant Action of Ascorbic Acid Studied by Density Functional Theory, Raman Spectroscopic and
							Nuclear Magnetic Resonance Techniques, <em>Gurpreet Singh, B. P. Mohanty, G. S. S. Saini</em>,Spectrochimica Acta Part A:
							Molecular and Biomolecular Spectroscopy, 155 (2016) 61-74. </a></li>
				      	<li><a href="http://www.sciencedirect.com/science/article/pii/S138614251500534X" className="">Structure and vibrations of glutathione studied by vibrational spectroscopy and density functional theory, <em>Gurpreet Singh,
							Sukh Dev Dogra, Sarvpreet Kaur, S. K. Tripathi, Satya Prakash, Bimal Rai, G. S. S. Saini</em>, Spectrochimica Acta Part A:
							Molecular and Biomolecular Spectroscopy, 149 (2015) 505-515. </a></li>
				      	<li><a href="http://journals.aps.org/prc/abstract/10.1103/PhysRevC.89.034621" className="">Anomalous deviations from statistical evaporation spectra for the decay of the 73Br and 77Rb compound systems, <em>Maninder
							Kaur, Bivash R. Behera, Gulzar Singh, Varinderjit Singh, Rohit Sandal, A. Kumar, H. Singh, Gurpreet Singh, K. P. Singh, N.
							Madhavan, S. Nath, A. Jhingan, J. Gehlot, K.S. Golda, P. Sugathan, Davinder Siwal, Sunil Kalkal, E. Prasad, S. Appannababu </em>,
							Physical Review C(Nuclear), 89 (2014) 034621. </a></li>
				      	<li><a href="http://www.sciencedirect.com/science/article/pii/S1386142513009517" className=""> Vibrational and electronic Spectroscopic Studies of Melatonin, <em>Gurpreet Singh, J. M. Abbas, Sukh Dev Dogra, Ritika
							Sachdeva, Bimal Rai, S. K. Tripathi, Satya Prakash, Vasant Sathe, G. S. S. Saini</em>, Spectrochimica Acta Part A: Molecular and
							Biomolecular Spectroscopy, 118 (2014) 73-81.</a></li>
				      	<li><a href="http://www.sciencedirect.com/science/article/pii/S0924203112000896" className=""> Effects of chemical analytes on zinc tetraphenylporphine thin films studied by vibrational spectroscopy and density functional
							theory, <em>G. S. S. Saini, S. D. Dogra, Gurpreet Singh, S. K. Tripathi, S. Kaur, V. Sathe, B. C. Choudhary</em>, Vibrational
							Spectroscopy, 61 (2012) 188-198.</a></li>
				    </ul>
			    </publications>


			    <heading id="contacts" className="sectionHeading">Contact Me</heading>
			    <contacts className="contacts">			    								
					<h3 ><a href="mailto:gsl.gurpreet@gmail.com"> <GoMail className="contactsLogo"/> 
					&nbsp;&nbsp;
					<h className="contactsText">   gsl.gurpreet@gmail.com </h></a> </h3> 
			      	<h3><a href="https://github.com/gur-p-reet"> <GoMarkGithub className="contactsLogo"/> 
			      	&nbsp;&nbsp;
			      	<h className="contactsText"> https://github.com/gur-p-reet</h></a></h3>
			     	<h3><a href="https://www.linkedin.com/in/gur-p-reet/"> <IoLogoLinkedin className="contactsLogo"/> 
			     	&nbsp;&nbsp;
			     	<h className="contactsText"> https://www.linkedin.com/in/gur-p-reet/</h></a> </h3>
			    </contacts>


			</main>   
	    </div>
	    );
	}
}

export default App;
