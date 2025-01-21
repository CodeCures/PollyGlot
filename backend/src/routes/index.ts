import { Router } from "express";
import { translate } from "../controllers/LanguageTranslateController";

const router = Router()

router.post('/translate', translate)

export default router;