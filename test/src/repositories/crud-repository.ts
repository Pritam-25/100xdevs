import { Prisma } from "@prisma/client";

export class CrudRepository<T> {
    private model;

    constructor(model: any) {
        this.model = model;
    }

    async create(data: any): Promise<T> {
        return await this.model.create({ data });
    }

    async delete(id: number): Promise<T | null> {
        return await this.model.delete({
            where: { id },
        });

    }

    async get(id: number): Promise<T | null> {
        return await this.model.findUnique({
            where: { id },
        });

    }

    async update(id: number, data: Partial<T>): Promise<T> {
        return await this.model.update({
            where: { id },
            data,
        });

    }

    async getAll(): Promise<T[]> {
        return await this.model.findMany();
    }
}
