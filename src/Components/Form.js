import '../Styles/Form.css';

function Form() {
    return (
        <section className='Form-section'>
            <h2>Formulaire de contact</h2>
            <form method="Post" className='Form'>
                <label>Nom</label>
                <input></input>
                <label>Prénom</label>
                <input></input>
                <label>Email</label>
                <input></input>
                <button><h3>ENVOYER</h3></button>
            </form>
        </section>
    )
}

export default Form;