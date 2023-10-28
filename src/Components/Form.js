import '../Styles/Form.css';

function Form() {
    //State

    //Comportement
    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(new FormData(e.target))
    }
    //Render
    return (
        <section className='Form-section'>
            <h2>Formulaire de contact</h2>
            <form  className='Form' onSubmit={handleSubmit}>
                <label htmlFor='username'>Nom</label>
                <input type='text'></input>
                <label htmlFor='username'>Prénom</label>
                <input type='text'></input>
                <label htmlFor='email'>Email</label>
                <input type='email'></input>
                <button type='submit'><h3>ENVOYER</h3></button>
            </form>
        </section>
    )
}

export default Form;