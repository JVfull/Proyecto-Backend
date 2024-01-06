const   express           = require("express");
const { index }           = require("../controller/indexController");
const   apiController     = require("../controller/apiController");
const { validarId }       = require("../middlewares/validarId");
const { checks }          = require("../middlewares/checks");
const { validarCheck }    = require("../middlewares/validarChecks");
const   validarCilindrada = require("../middlewares/validarCilindrada");

const router = express.Router();

router.get("/list", apiController.apiGet);
router.get("/api/users", (req, res) => 
{
  const response = fetch("https://api.de.ejemplo.com/api/users");

  if (response.status === 200)
  {
    const users = response.json();
    res.status(200).json(users);
  }

  else
  {
    res.status(response.status).json({ error: response.statusText });
  }
});

router.get    ("/motoclicleta/:id", validarId, apiController.buscarPorId);
router.post   ("/crear", checks, validarCheck, validarCilindrada, apiController.apiPost);
router.put    ("/editar/:id", validarId, checks, validarCheck, apiController.apiPut);
router.delete ("/borrar/:id", validarId, apiController.apiDelete);

module.exports = router;