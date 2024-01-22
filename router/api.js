const   express           = require("express");
const   fetch             = require("node-fetch");
const   apiController     = require("../controller/apiController");
const { validarId }       = require("../middlewares/validarId");
const { checks }          = require("../middlewares/checks");
const { validarCheck }    = require("../middlewares/validarChecks");
const   validarCilindrada = require("../middlewares/validarCilindrada");

const router = express.Router();

router.get("/list", apiController.apiGet);
router.get("/api/users", async (req, res) =>
{
  try
  {
    const response  = await fetch("https://jsonplaceholder.typicode.com/users");
    const users     = await response.json();
    res.status(200).json(users);
  }
  catch (error)
  {
    res.status(500).json({ error: "Error al obtener usuarios de la API externa" });
  }
});
router.get    ("/motoclicleta/:id", validarId, apiController.buscarPorId);
router.post   ("/crear", checks, validarCheck, validarCilindrada, apiController.apiPost);
router.put    ("/editar/:id", validarId, checks, validarCheck, apiController.apiPut);
router.delete ("/borrar/:id", validarId, apiController.apiDelete);

module.exports = router;