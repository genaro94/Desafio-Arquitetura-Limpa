import { v4 as uuid } from 'uuid';
import Product from '../../../domain/product/entity/product';
import UpdateProductUseCase from './update.product.usecase';

const product = new Product(uuid(), 'Product 1', 10);

const input = {
    id: product.id,
    name: "Product Updated",
    price: 20
};

const MockRepository = () => {
    return {
        find: jest.fn().mockReturnValue(Promise.resolve(product)),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    };
};

describe("Unit test for product update use case", () => {
    it("should update a product", async () => {
        const productRepository = MockRepository();
        const usecase = new UpdateProductUseCase(productRepository);

        const output = await usecase.execute(input);

        expect(output).toEqual(input);
    });
});
