import {
  CreateResourcePayload,
  ResourceRepository,
} from "../repositories/resourceRepository";

export class ResourceService {
  private repository: ResourceRepository;

  constructor(repository: ResourceRepository) {
    this.repository = repository;
  }

  async createResource(data: CreateResourcePayload) {
    return this.repository.createResource(data);
  }

  async listResources(filters: { name?: string; description?: string }) {
    return this.repository.findResources(filters);
  }

  async findResourceById(id: number) {
    const resource = await this.repository.findResourceById(id);
    if (!resource) throw new Error("Resource not found");
    return resource;
  }

  async updateResource(
    id: number,
    data: { name?: string; description?: string }
  ) {
    return this.repository.updateResource(id, data);
  }

  async deleteResource(id: number) {
    return this.repository.deleteResource(id);
  }
}
