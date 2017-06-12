import { Mongo } from 'meteor/mongo';

let Cats = new Mongo.Collection("categories");
Cats.friendlySlugs("title");

export const Categories = Cats;