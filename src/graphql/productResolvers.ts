import Product from "../entity/Product";

export const resolvers = {
  Query: {
    hello: () => "hello world",
    getAllProducts: async () => await Product.find(),
    getOneProduct: async (_: any, args: any) => await Product.findOneBy({ id: args.id }),
  },
  Mutation: {
    createProduct: async (_: any, args: any) => await Product.create(args).save(),
    deleteProduct: async (_: any, args: any) => {
      await Product.delete(args.id);
      return true;
    },
    updateProduct: async (_: any, { id, ...rest }: any) => {
      await Product.update({ id }, rest);
      return true;
    },
  },
};
