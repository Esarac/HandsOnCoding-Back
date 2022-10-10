import express, {Router, Request, Response} from "express";
import { Step, StepDTO, StepNested } from "../../models/steps";
import { getSteps, getStep, createStep, updateStep, deleteStep } from "../../services/steps";

const router: Router = express.Router();

/**
 * @swagger
 * components:
 *  parameters:
 *    stepId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: The step id.
 * 
 * tags:
 *  name: Steps
 *  description: Steps endpoint.
 */

// GET
/**
 * @swagger
 * /steps:
 *  get:
 *    summary: Get all steps.
 *    tags: [Steps]
 *    responses:
 *      200:
 *        description: All the steps.
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").get((req: Request, res: Response<Step[]>) => {
  getSteps()
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    res.send(e)
  })
});

/**
 * @swagger
 * /steps/{id}:
 *  get:
 *    summary: Get a step by id.
 *    tags: [Steps]
 *    parameters:
 *      - $ref: '#/components/parameters/stepId'
 *    responses:
 *      200:
 *        description: The step with it solution and template.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StepNested'
 *      204:
 *        description: The step can not be found.
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").get((req: Request, res: Response<StepNested>) => {
  getStep(req.params.id)
  .then((v) => {
    if(!v)
      res.sendStatus(204)
    else{
      res.status(200)
      res.send(v)
    }
  })
  .catch((e)=>{
    res.status(400)
    res.send(e)
  })
});

// POST
/**
 * @swagger
 * /steps:
 *  post:
 *    summary: Create a step.
 *    tags: [Steps]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/StepDTO'
 *    responses:
 *      201:
 *        description: The created step.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/").post((req: Request<any, any, StepDTO>, res: Response<Step>) => {
  createStep(req.body)
  .then((v) => {
    res.status(201)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    res.send(e)
  })
});

// PUT
/**
 * @swagger
 * /steps/{id}:
 *  put:
 *    summary: Update a step by id.
 *    tags: [Steps]
 *    parameters:
 *      - $ref: '#/components/parameters/stepId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/StepDTO'
 *    responses:
 *      200:
 *        description: The updated step.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").put((req: Request<any, any, StepDTO>, res: Response<Step>) => {
  updateStep(req.params.id,req.body)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    console.log(e)
    res.status(400)
    res.send(e)
  })
});

// DELETE
/**
 * @swagger
 * /steps/{id}:
 *  delete:
 *    summary: Delete a step by id.
 *    tags: [Steps]
 *    parameters:
 *      - $ref: '#/components/parameters/stepId'
 *    responses:
 *      200:
 *        description: The deleted step.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Step'
 *      400:
 *        description: An error occurred due to a bad request.
 */
router.route("/:id").delete((req: Request, res: Response<Step>) => {
  deleteStep(req.params.id)
  .then((v) => {
    res.status(200)
    res.send(v)
  })
  .catch((e) => {
    res.status(400)
    res.send(e)
  })
});

export {router as StepsRouter};