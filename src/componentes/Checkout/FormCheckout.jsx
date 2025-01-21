
import './Checkout.css'

const FormCheckout = ( {dataForm, handleChangeDataForm, handleSubmitForm}) => {
    return (
        <form className="checkout" onSubmit={handleSubmitForm}>
                <label>Nombre Completo</label>
                <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeDataForm}/>
                <label>Teléfono</label>
                <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeDataForm}/>
                <label>Correo Electrónico</label>
                <input type="email" value={dataForm.email} name="email" onChange={handleChangeDataForm}/>
                <label>Confirmar correo electrónico</label>
                <input type="email" value={dataForm.confirmEmail} name="confirmEmail" onChange={handleChangeDataForm}/>
                <button type="submit">Enviar Orden</button>
        </form>
    )
}

export default FormCheckout