import "./App.css";
import blog from './blog.png';
import bitly from './bitly.webp';
import { useState,useEffect } from "react";

function App() {
  const [asideVisible, setAsideVisible] = useState(window.innerWidth > 1024);

  const toggleAsideVisibility = () => {
    setAsideVisible(!asideVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setAsideVisible(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex">
      {asideVisible && (
              <aside>
              <div className="box">
                <div class="circle">
                  <div class="round"></div>
                  <div class="round"></div>
                </div>
                <div className="links">
                  <div className="cross" onClick={toggleAsideVisibility}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                  </div>
                  <a href="/"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                  Home</a>
                  <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
                    Trending</a>
                  <a href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    Snippets</a>
                  <a href="https://www.instagram.com/priyanshupower/" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>
                    Videos</a>
      
                  <div className="social">Socials</div>
      
                  <a href="https://github.com/priyanshuyadav07804" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2a9d8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Github</a>
                  <a href="https://leetcode.com/priyanshu07804/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="leetcode"><path fill="#B3B1B0" d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path><path fill="#E7A41F" d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path><path fill="#070706" d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path></svg>Leetcode</a>
                  <a href="https://www.linkedin.com/in/priyanshu-yadav-7885291b6/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0277b5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>Linkedin</a>
                  <a href="https://www.instagram.com/priyanshupower/" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b5179e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>Instagram</a>
                </div>
              </div>
            </aside>
      )}

      <main>
        <div className="stiky">
          <button className="contactMe">Contact Me</button>
          <svg onClick={toggleAsideVisibility} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
        </div>
        <div>
        <div className="profile">
          <div className="photo">
            <img
              src="https://media.licdn.com/dms/image/D5603AQHDSOXD00w55A/profile-displayphoto-shrink_400_400/0/1706617614065?e=1712188800&v=beta&t=YTqbUYyv9fGVpMN2Hc_ekEpVHdeUhsg7E6JzYFznsno"
              alt=""
            />
          </div>
          <div className="details">
            <div className="name">
              <h1>Priyanshu Yadav</h1>
              <p>@priyanshu07804</p>
            </div>
            <div className="follow">
              <a href="https://www.linkedin.com/in/priyanshu-yadav-7885291b6/" target="_blank" rel="noreferrer" className="button">
              <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 50 50">
<circle cx="14" cy="14" r="3" fill="#00a4ff"></circle><path fill="#16d6fa" d="M37.718,47H12.282C7.164,47,3,42.836,3,37.718V12.282C3,7.164,7.164,3,12.282,3h25.436	C42.836,3,47,7.164,47,12.282v25.436C47,42.836,42.836,47,37.718,47z M12.282,7C9.369,7,7,9.369,7,12.282v25.436	C7,40.631,9.369,43,12.282,43h25.436C40.631,43,43,40.631,43,37.718V12.282C43,9.369,40.631,7,37.718,7H12.282z"></path><rect width="4" height="19" x="12" y="19" fill="#16d6fa"></rect><rect width="4" height="19" x="21" y="19" fill="#16d6fa"></rect><path fill="#16d6fa" d="M38,38h-4V27.5c0-1.056-0.252-4.5-3.5-4.5c-2.468,0-5.5,3.032-5.5,5.5V38h-4v-9.5	c0-4.706,4.794-9.5,9.5-9.5c4.416,0,7.5,3.495,7.5,8.5V38z"></path>
</svg>
                <span>
                follow me on Linkedin
                  </span></a>
            </div>
          </div>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <div className="row">
            {/* <div className="pro" onClick={() => window.open('https://blog-web07804.vercel.app', '_blank')}> */}
            <div className="pro" onClick={() => window.open('https://github.com/priyanshuyadav07804/Blog_App_Full_Stack', '_blank')}>
              <img
                src={blog}
                alt=""
              />
              <div className="proDetails">
                <div className="title">Blog Web</div>
                <span className="desc">
                  React, NodeJs, Express, MongoDB, React-Redux, Cloudinary,
                  Bcrypt Auth
                </span>
              </div>
            </div>
            <div className="pro" onClick={() => window.open('https://github.com/priyanshuyadav07804/CHAT-ROOM', '_blank')}>
              <img
                src="https://media.gettyimages.com/id/870278192/vector/online-chat-flat-design-communications-icon-with-side-shadow.jpg?s=612x612&w=0&k=20&c=c_TWTd67M-5pqeEEpyzBMeCRTtJNHMhjsd7Wrm9QQ6Y="
                alt=""
              />
              <div className="proDetails">
                <div className="title">Chat Room</div>
                <div className="desc">
                  NodeJs, Express, Socket.Io, HTML, CSS
                </div>
              </div>
            </div>
            <div className="pro" onClick={() => window.open('https://github.com/priyanshuyadav07804/URL_SHORTLY', '_blank')}>
              <img src={bitly} alt="bitly"/>
              <div className="proDetails">
                <div className="title">Bit.ly Clone</div>
                <div className="desc">
                  React, NodeJs, Express, MongoDB, React-Redux, valid-url
                </div>
              </div>
            </div>
            {/* <div className="pro" onClick={() => window.open('https://easy-share07804.vercel.app/', '_blank')}> */}
            <div className="pro" onClick={() => window.open('https://github.com/priyanshuyadav07804/FILE_SHARE_WEBSITE', '_blank')}>
              <img
                src="https://www.benchmarkemail.com/wp-content/uploads/2019/10/the-10-best-crm-tools-for-small-business-1.webp"
                alt=""
              />
              <div className="proDetails">
                <div className="title">File Share App</div>
                <div className="desc">
                  React, NodeJs, Express, MongoDB, React-Redux, Multer, NodeMailer
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="other">
          <div className="know">
            <h2>What I Know</h2>
            <div className="row1">
              <div className="frontend">
                <div className="title">Frontend</div>
                <div className="color">
                  <span className="black">HTML</span>
                  <span className="black">CSS</span>
                  <span className="blue">React Js</span>
                  <span className="yellow">Javascript</span>
                </div>
              </div>
              <div className="frontend">
                <div className="title">Backend</div>
                <div className="color">
                <div className="green">Node Js</div>
                <div className="blue">Express Js</div>
                </div>
              </div>
              <div className="frontend">
                <div className="title">Database</div>
                <div className="color">
                <div className="green">MongoDB</div>
                <div className="pink">MySql</div>
                <div className="yellow">PostgreSql</div>
                </div>
              </div>
              <div className="frontend">
                <div className="title">Android</div>
                <div className="color">
                <div className="red">Kotlin</div>
                <div className="black">Xml</div>
                <div className="green">FireBase</div>
                <div className="blue">RoomDB</div>
                </div>
              </div>
            </div>
          </div>
          <div className="more">
            <h2>More Projects</h2>
            <div className="morepro">
              {/* <a href="https://img-glry.vercel.app/" target="_blank" rel="noreferrer" className="a" > */}
              <a href="https://github.com/priyanshuyadav07804/Full_Stack_Image_gallary" target="_blank" rel="noreferrer" className="a" >
              <svg viewBox="0 0 24 24" height="24" width="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#ffffff" stroke-width="1.5"></path> <circle cx="16" cy="8" r="2" stroke="#ffffff" stroke-width="1.5"></circle> <path d="M2 12.5001L3.75159 10.9675C4.66286 10.1702 6.03628 10.2159 6.89249 11.0721L11.1822 15.3618C11.8694 16.0491 12.9512 16.1428 13.7464 15.5839L14.0446 15.3744C15.1888 14.5702 16.7369 14.6634 17.7765 15.599L21 18.5001" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                <div className="col">
                <span>
                Personal Image Gallery
                </span>
                <span className="desc1">
                  ReactJs, NodeJs, MongoDB, ExpressJs, Cloudinary,React-redux
                </span>
                </div>
              </a>

              <a href="/" target="_blank" rel="noreferrer" className="a">
              <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7L12 14M12 14L15 11M12 14L9 11" stroke="#ffffff" stroke-width="1.6320000000000001" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 17H12H8" stroke="#fff" stroke-width="1.6320000000000001" stroke-linecap="round"></path> <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#fff" stroke-width="1.6320000000000001"></path> </g></svg>                  <div className="col">
                <span>
                SnapInsta Clone
                </span>
                <span className="desc1">
                  ReactJs, NodeJs, ExpressJs
                </span>
                </div>
              </a>

              <a href="https://priyanshuyadav07804.github.io/FindTheGift.github.io/" target="_blank" rel="noreferrer" className="a">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gamepad2"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>                <div className="col">
                <span>
                Find The Gift Game
                </span>
                <span className="desc1">
                  HTML, CSS, JQuery, Javascript
                </span>
                </div>
              </a>

            </div>

          </div>
        </section>
        </div>
      </main>
    </div>
  );
}

export default App;
