import { CreateResourcePayload, ResourceRepository } from "../repositories/resourceRepository";
export declare class ResourceService {
    private repository;
    constructor(repository: ResourceRepository);
    createResource(data: CreateResourcePayload): Promise<import(".prisma/client").Resource>;
    listResources(filters: {
        name?: string;
        description?: string;
    }): Promise<import(".prisma/client").Resource[]>;
    findResourceById(id: number): Promise<import(".prisma/client").Resource>;
    updateResource(id: number, data: {
        name?: string;
        description?: string;
    }): Promise<any>;
    deleteResource(id: number): Promise<any>;
}
