

const FormCheckout = ( {dataForm, handleChangeDataForm, handleSubmitForm}) => {
    return (
        <form onSubmit={handleSubmitForm}>
                <label>Nombre Completo</label>
                <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeDataForm}/>
                <label>Telefono</label>
                <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeDataForm}/>
                <label>Correo Electronico</label>
                <input type="email" value={dataForm.email} name="email" onChange={handleChangeDataForm}/>
                <button type="submit">Enviar Orden</button>
        </form>
    )
}

export default FormCheckout