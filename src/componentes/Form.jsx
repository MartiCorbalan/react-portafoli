export default function Form(){
    return <>
    <main>
      <section className="contenedor formulario " id="contacte">
        <br />
        <h2 className="formu">Formulari de contacte</h2> <br />
        <div className="fons-form">
          <form
            className="formulari"
            action="https://formcarry.com/s/vLzVRIRee8y"
            target="_blank"
            method="post"
            id="myForm"
          >
            <label htmlFor="fname">Nom:</label>
            <br />
            <input
              type="text"
              id="name"
              name="fname"
              defaultValue=""
              required=""
            />
            <br />
            <label htmlFor="lname">Segon Cognom:</label>
            <br />
            <input
              type="text"
              id="lastname"
              name="lname"
              defaultValue=""
              required=""
            />
            <br />
            <label htmlFor="lname">Email:</label>
            <br />
            <input
              type="email"
              id="mail"
              name="lname"
              defaultValue=""
              required=""
            />
            <br />
            <label htmlFor="lname">Missatge:</label>
            <br />
            <textarea
              id="story"
              name="story"
              rows={5}
              cols={33}
              defaultValue={""}
            />
            <br />
            <button className="btn btn-primary">Enviar</button>
          </form>
        </div>
        <br />
        <br />
      </section>
    </main>
    {/*=========== FOOTER ================*/}
    <hr />
  </>
  
}