import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  let client;
  try {
    client = await MongoClient.connect(
      'mongodb+srv://crossbell-executive-search-admin:Dgk4xICpbAe7gDt8@crossbelldb.fiwox.mongodb.net/crossbell-executive-search?retryWrites=true&w=majority'
    );
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.log(err.message);
      throw new Error(err.message);
    }
    console.log(err);
    throw new Error('Something went wrong');
  }

  return client;
};
