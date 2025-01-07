import { Prisma, Resource } from "@prisma/client";
import prisma from "../config/prismaClient";

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
  updateResource(
    id: number,
    data: { name?: string; description?: string }
  ): Promise<any>;
  deleteResource(id: number): Promise<any>;
}

export const resourceRepository: ResourceRepository = {
  async createResource(data: CreateResourcePayload): Promise<Resource> {
    return prisma.resource.create({ data });
  },

  async findResources(filters: {
    name?: string;
    description?: string;
  }): Promise<Resource[]> {
    const { name, description } = filters;
    const andWhere: Prisma.Enumerable<Prisma.ResourceWhereInput> = [];

    if (name) andWhere.push({ name: { contains: filters.name } });

    if (description)
      andWhere.push({
        description: { contains: filters.description },
      });

    return prisma.resource.findMany({
      where: {
        AND: andWhere,
      },
    });
  },

  async findResourceById(id: number): Promise<Resource | null> {
    return prisma.resource.findFirst({ where: { id } });
  },

  async updateResource(
    id: number,
    data: { name?: string; description?: string }
  ): Promise<any> {
    return prisma.resource.update({ where: { id }, data });
  },

  async deleteResource(id: number): Promise<any> {
    return prisma.resource.delete({ where: { id } });
  },
};
