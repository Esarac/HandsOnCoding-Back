import { Step } from "@prisma/client"
import { Template } from "./templates"
import { Solution } from "./solutions"


/**
 * @swagger
 * components:
 *  schemas:
 *    StepRawDTO:
 *      type: object
 *      properties:
 *        description:
 *          type: string
 *          description: The instructions of the step.
 *          example: Print \"Hello world!\"
 *      required:
 *        - description
 */
export interface StepRawDTO extends Omit<StepDTO, 'lessonId'>{};

/**
 * @swagger
 * components:
 *  schemas:
 *    StepDTO:
 *      allOf:
 *        - $ref: '#/components/schemas/StepRawDTO'
 *        - type: object
 *        - properties:
 *           lessonId:
 *             type: string
 *             description: The id of the existing lesson that uses this step.
 *             example: 6314112d7ceeeb5338fdd955
 *      required:
 *        - lessonId
 */
export interface StepDTO extends Omit<Step, 'id'>{};

/**
 * @swagger
 * components:
 *  schemas:
 *    Step:
 *      allOf:
 *        - properties:
 *           id:
 *             type: string
 *             description: The autogenerated id of the step.
 *             example: 63158ff83cd164cc4fda4282
 *        - $ref: '#/components/schemas/StepDTO'
 *        - type: object
 *      required:
 *        - id
 */
export { Step };

/**
 * @swagger
 * components:
 *  schemas:
 *    StepNested:
 *      allOf:
 *        - $ref: '#/components/schemas/Step'
 *        - type: object
 *        - properties:
 *           template:
 *             $ref: '#/components/schemas/Template'
 *           solution:
 *             $ref: '#/components/schemas/Solution'
 */
export interface StepNested extends Step {
    template: Template | null;
    solution: Solution | null;
}