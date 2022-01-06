import type { JsonSchema, RxJsonSchema, StringKeys } from './types';
/**
 * Helper function to create a valid RxJsonSchema
 * with a given version.
 */
export declare function getPseudoSchemaForVersion<T = any>(version: number, primaryKey: StringKeys<T>): RxJsonSchema<T>;
/**
 * Returns the sub-schema for a given path
 */
export declare function getSchemaByObjectPath<T = any>(rxJsonSchema: RxJsonSchema<T>, path: keyof T | string): JsonSchema;
