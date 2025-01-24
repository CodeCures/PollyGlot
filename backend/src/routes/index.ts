import { Router } from "express";
import { generateImage, translate } from "../controllers/LanguageTranslateController";

const router = Router()

router.post('/translate', translate)
router.post('/generate-image', generateImage)

export default router;