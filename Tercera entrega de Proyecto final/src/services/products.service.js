import {productsManager} from "../persistencia/DAOs/mongoDAO/ProductsManager.js"

class ProductsService{ 
    async findAll(obj) {
        const response = await productsManager.findAll(obj);
        return response;
    }
    async findById(id) {
        const response = await productsManager.findById(id);
        return response;
    }
    async createOne(obj){
        const response = await productsManager.createOne(obj);
        return response;
    }
    async updateOne(id,obj){
        const response = await productsManager.updateOne(id, obj);
        return response;
    }
    async deleteOne(id){
        const response = await productsManager.deleteOne(id);
        return response;
    }

    async updateMany(obj){
        const response = await productsManager.updateMany({}, obj);
        return response;
    }

    async bulkWrite(obj){
        const response = await productsManager.bulkWrite(obj);
        return response;
    }
}

export const productsService = new ProductsService();
