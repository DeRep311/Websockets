import { Router } from 'express';
import { datosFalsos } from './utils';
const router = Router();

router.get('/productos-test', (req, res) => {
    let datos = datosFalsos();
    res.send(datos)});


export{router} 