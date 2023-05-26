export const convertDateFromMongo = (mongoDate: string) =>
  new Date(mongoDate).toLocaleDateString();
