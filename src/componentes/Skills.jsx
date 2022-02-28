export default function Skills(){
   return <>
  <main>
    <section className="contenedor " id="skills">
      <br />
      <div className="fons-subtitul1 wi">
        <h2 className="subtitulo">SKILLS</h2>
      </div>
      <br />
      <br />
      <div className="skills_list grid">
        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">HTML</h3>
            <span className="skills_number">80%</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "80%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                80%
              </div>
            </div>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_html" />
          </div>
        </div>
        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">CSS</h3>
            <span className="skills_number">60%</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "60%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_css" />
          </div>
        </div>
        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">JavaScript</h3>
            <span className="skills_number">30%</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "30%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_js" />
          </div>
        </div>
        <div className="skills_data">
          <div className="skills_titles">
            <h3 className="skills_name">REACT</h3>
            <span className="skills_number">20%</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "20%" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
          <div className="skills_bar">
            <span className="skills_percentage skills_react" />
          </div>
        </div>
      </div>
    </section>
  </main>
  <hr />
</>
}