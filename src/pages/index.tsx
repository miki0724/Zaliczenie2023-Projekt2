import { MongoClient } from "mongodb";

export const getStaticProps = async (context) => {
  const mongoClient = new MongoClient(
    "mongodb+srv://miki:miki@sklepprodukty.3tyqgi1.mongodb.net/SklepProdukty?retryWrites=true&w=majority"
  );
  const data = await mongoClient.db().collection("Produkty").find({}).toArray();

  console.log("!!!", data);
};
