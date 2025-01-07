import { Resource } from "@prisma/client";
export interface CreateResourcePayload {
    name: string;
    description: string;
}
export interface ResourceRepository {
    createResource(data: CreateResourcePayload): Promise<Resource>;
    findResources(filters: {
        name?: string;
        description?: string;
    }): Promise<Resource[]>;
    findResourceById(id: number): Promise<Resource | null>;
    updateResource(id: number, data: {
        name?: string;
        description?: string;
    }): Promise<any>;
    deleteResource(id: number): Promise<any>;
}
export declare const resourceRepository: ResourceRepository;
