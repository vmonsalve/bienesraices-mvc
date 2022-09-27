const formularioLogin = (req, res) => {
    res.render('auth/login', {
        pagina: 'Inicia Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        pagina : 'Crea Tu Cuenta'
    })
}
const formularioOlvidePassowrd = (req, res) => {
    res.render('auth/olvide-password', {
        pagina : 'Recupera tu acceso a Bienes Raices'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassowrd
}