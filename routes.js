import express from "express"
export const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ejemplo de mi servidor de pagina Web')
  })


router.get('/Inicio', (req, res) => {
    res.send('Esta es mi pagina de Inicio')
  })
router.get('/Correo', (req, res) => {
    res.send('Esta es mi pagina de Correo')
  })

  //router.get('/shuser',showuser);

  export default router;