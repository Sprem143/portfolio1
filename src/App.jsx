import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function App() {
  return (
    <>
      <header id="body-header">
        <nav>
          <ul className="nav-menu horizental-list text-centre ">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div id="name-social-container">
          <div className="text-centre">
            <h1 id="my-name">Prem Kumar</h1>
            <span className='text-white'>I am</span> <h2 id='atxt' data-text="FULL STACK WEB DEVELOPER">.</h2> </div>

          <div className=" text-centre animate__animated animate__fadeInDownBig">
            <ul className="social-icons horizental-list text-centre">
              <li><a href="https://www.facebook.com/profile.php?id=100011571371578" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" si bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg></a> </li>
              <li><a href="https://www.linkedin.com/in/kumar-prem-94aabc1999/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="si bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg> </a> </li>
              <li> <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="si bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg> </a></li>
              <li>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="si bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg></a>
              </li>
              <li><a href="https://www.instagram.com/prem_programr/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="si bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg></a> </li>
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="about">
          <div id="my-image"> <img src="/static/image/profile.jpg" alt="NA" /></div>
          <p style={{ width: "80%", marginTop: '-50px', fontSize:'1.1rem' }}>
            &emsp;&emsp;&emsp; Hello, my name is Premchandra Kumar, and I’m a full stack developer with no experience. I  I have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications. <br />
            &emsp;&emsp;&emsp; On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React and Angular. I’m passionate about creating intuitive user interfaces that provide an exceptional user experience. I pay great attention to detail, ensuring that the websites or applications I develop are responsive, visually appealing, and accessible across different devices and browsers. <br />
            &emsp;&emsp;&emsp;Moving to the back end, I’m proficient in server-side languages like Python, Java, or Node.js. I have extensive experience working with databases such as MySQL, PostgreSQL, and MongoDB, and I can design efficient database structures and write optimized queries. I’m familiar with RESTful APIs and know how to integrate them into applications to enable seamless communication between the front end and back end.
            Additionally, I have expertise in version control systems like Git, and I’m comfortable working in collaborative environments using Agile methodologies. I enjoy staying up to date with the latest trends and technologies in the web development world, as it allows me to continually improve my skills and deliver cutting-edge solutions. <br />
            &emsp;&emsp;&emsp;
            Throughout my career, I’ve had the opportunity to work on various projects, ranging from small startups to large-scale enterprise applications. I thrive in dynamic environments where I can tackle challenges, collaborate with cross-functional teams, and deliver high-quality solutions that meet both user requirements and business objectives.
            I’m excited to be part of a team where I can contribute my full stack development skills and help create innovative and impactful applications. Thank you for considering me, and I look forward to discussing how I can contribute to your organisation.
          </p>
        </section>

        <section id="skill">
          <h1 className="section-heading mb75px">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="blue" className="bi mb-2 me-3 bi-gear-fill" viewBox="0 0 16 16">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
            </svg>
            <p>Skills</p>
          </h1>
          <div className="skill-display">
            <div className="skill-progress">
              <div className="eighty-five mb-blue dfac">
                <div className="skill-name">
                  <span>Java</span>
                </div>
              </div>
            </div>


            <div className="skill-progress">
              <div className="forty mb-red dfac">
                <div className="skill-name">
                  <span>Python</span>
                </div>
              </div>
            </div>

            <div className="skill-progress">
              <div className="eighty mb-grey dfac">
                <div className="skill-name">
                  <span>HTML</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-display">
            <div className="skill-progress">
              <div className="ninty mb-green dfac">
                <div className="skill-name">
                  <span>CSS</span>
                </div>
              </div>
            </div>

            <div className="skill-progress">
              <div className="eighty mb-blue dfac">
                <div className="skill-name">
                  <span>JS</span>
                </div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="eighty-five mb-red dfac">
                <div className="skill-name">
                  <span>Node JS</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-display">
            <div className="skill-progress">
              <div className="eighty-five mb-red dfac">
                <div className="skill-name">
                  <span>SQL</span>
                </div>
              </div>
            </div>
            <div className="skill-progress">
              <div className="forty mb-grey dfac">
                <div className="skill-name">
                  <span>Spring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <h1 className="section-heading mb75px">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi mb-1 me-2 bi-code-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
            </svg></span>
            <span>Projects</span>
          </h1>
          <div className="container container-mobile">
            <div className="row m-1 jcsb">
              <div className="col-lg-5 col-sm-10 p-2 project dc">
                <h3 className='ph'>Learning Website</h3>
                <img src="/static/image/pr1.png" alt="" width='80%' />
                <hr />
                <h5 className='pc'>Python + React + NodeJS</h5>
                <p>&emsp;&emsp; A useful website for all fresher who want to learn coding. In this website you can add important note, search definition, login, sign up, change background, change font color etc. This website is responsible for all device and interface is attractive. You can also use this website for revision purpost and also give test, what you learn.
                  <li><span className='fw-bold'>Website Link: </span><a href="https://premnote.vercel.app/"> https://premnote.vercel.app/</a></li>
                  <li><span className='fw-bold'>Git repository: </span><a href="https://github.com/Sprem143/note2">https://github.com/Sprem143/note2</a></li>

                </p>
              </div>
              <div className="col-lg-5 col-sm-10 p-2 project dc">
                <h3 className='ph'>Advance Calculator</h3>
                <img src="/static/image/pr2.png" alt="" width='45%' />
                <hr />
                <h5 className='pc'>Python + React + NodeJS</h5>
                <p> &emsp;&emsp;In this website user can calculate complex numerical expression at a time, get trigonimatrical agnle value of any degree in convience way. This website is quite easy to use and responsible for all layout.
                  <li><span className='fw-bold'>Website Link: </span><a href="https://calculator-beta-one-23.vercel.app/"> https://calculator-beta-one-23.vercel.app/</a></li>
                  <li><span className='fw-bold'>Git repository: </span><a href="https://github.com/Sprem143/portfolio1"> https://github.com/Sprem143/portfolio1</a></li>
                </p>
                <br />
              </div>
            </div>
          </div>


        </section>

        <section id="education">
          <h1 className="section-heading mb75px">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi me-2 bi-mortarboard-fill" viewBox="0 0 16 16">
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
            </svg></span>
            <span>Education</span>
          </h1>
          <div className="education">
            <div style={{ width: '20vw' }}></div>
            <div className='degree'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="brown" className="bi me-2 mb-2 bi-mortarboard-fill" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
              </svg></span> <span className='ed-h'>Graduation</span>
              <li><b>University: </b> BNMU, Madhepura</li>
              <li><b>Subject: </b>Econimics</li>
              <li><b>Session: </b>2019-2022</li>
              <li><b>Obtained Percentage: </b>68</li>
            </div>


            <div className='degree'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="brown" className=" me-2 bi bi-pen-fill" viewBox="0 0 16 16">
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
              </svg></span> <span className='ed-h'>Polytechnic</span>
              <li><b>University: </b>PSBT Chandigarh</li>
              <li><b>Course: </b>Electrical Engg.</li>
              <li><b>Session: </b>2016-2019</li>
              <li><b>Obtained Percentage: </b>72</li>
            </div>

            <div className='degree'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="brown" className="me-2 bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg></span> <span className='ed-h'>Intermediate</span>
              <li><b>Board: </b>CBSE, Patna</li>
              <li><b>Subject: </b>Science</li>
              <li><b>Session: </b>2014-2016</li>
              <li><b>Obtained Percentage: </b>67</li>
            </div>

            <div className='degree'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="brown" class="bi me-2 bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
              </svg></span> <span className='ed-h'>Matric</span>
              <li><b>Board: </b>BSEB, Patna</li>
              <li><b>Session: </b>2013-2014</li>
              <li><b>Obtained Percentage: </b>74</li>
            </div>
          </div>
        </section>

        <section id="contact">
          <h1 className="section-heading mb75px">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi me-2 bi-person-lines-fill" viewBox="0 0 16 16">
              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
            </svg></span>
            <span>Contact</span>
          </h1>
          <div className='con'>
            <div className='con-div'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-2 mb-3 bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg></span> <span className='fw-bold fs-4'>Address</span>
              <hr />
              <li className='fw-bold text-danger'>Current Address</li>
              <p className='text-dark'>Sector 121, Gali no 10, Near RS infra 3, Pin code-2201307, Uttar Pradesh</p>
              <p className='fw-bold text-danger'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg> Permanent Address Address</p>
              <p className="text-dark">Village Post- Hariraha, Ward No 09, Block- Raghopur, District-Supaul,Bihar, Pin code- 852215</p>
            </div>
            <div className='con-div'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi me-2 mb-2  bi-telephone-outbound-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5" />
              </svg></span> <span className='fw-bold fs-4'>Contact details</span>
              <hr />
              <p className='fw-bold'><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi me-2 mb-1 bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>Email</p>
              <p className='text-dark'>prem68265@gmail.com</p>
              <p><span className='fw-bold'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi me-2 mb-1 bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>Phone</span></p>
              <p className='text-dark'>7366943700</p>
              <p><span className='fw-bold text-secondary'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="green" className="bi me-1 bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg> Whatsapp Number</span></p>
              <p className='text-dark'>7366943700</p>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}