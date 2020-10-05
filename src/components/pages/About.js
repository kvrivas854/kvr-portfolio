import React from "react";


function About() {
  return (
    <div className="m-20">
      <div className="text-2xl semi-bold green-light"><span className="number green-base text-lg roboto">02.</span>About</div>
        <div className="flex">
          <div className="col">
            <p className="text-lg green-light">
               Hello! I'm Kelly, a software engineer based in Charlotte, NC.
            </p>
            <p className="text-lg green-light">I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</p>
            <p className="text-lg green-light">Shortly after graduating from <a className="green-base" rel="noopener noreferrer" href="https://bootcamp.uncc.edu/coding/">University of North Carolina at Charlotte Coding Bootcamp</a>, I joined the engineering team at  <a className="green-base" rel="noopener noreferrer" href="http://joinprogress.com/">Progress</a>.</p>
            <p className="text-lg green-light">Here are a few technologies I've been working with recently:</p> 
            <div className="flex green-light">
            <div className="col">
              <p className="list-item">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
</path>
                    </svg>React</p>
                    <p className="list-item">
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>MySql + MongoDB</p>
             
             
              <p className="list-item">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>HTML + CSS3</p>
                    <p className="list-item">
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>JSON API's'</p>
              

              
              <p className="list-item">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>JavaScript (ES6)</p>
                    <p className="list-item">
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>MVC</p>
                          </div>
              
              <div className="col">
              <p className="list-item">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>Node.js</p>
                    <p className="list-item">
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>AJAX Frameworks</p>
              
               
              <p className="list-item">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>jQuery</p>
                    <p className="list-item">
                      <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                        <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                          </path>
                          </svg>Heroku + Git deployment</p>
             
             
              <p className="list-item">
                <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                  <path stroke="#93E5AB" d="M9.5 9.5H1.207L9.5 1.207V9.5z">
                    </path>
                    </svg>Bootstrap + TailwindCSS</p>
              </div>
              </div>
          </div>
          <div className="col">
          <img src={process.env.PUBLIC_URL + '/group-68@3x.png'} alt="img" className="photo-card"/> 
          </div>
          </div>
          
          
          
       
              </div>

              
    
            
            
            
        
        
            
    
  );
}

export default About;

