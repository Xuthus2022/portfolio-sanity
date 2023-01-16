import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: "production", // "production"
  projectId: "pfrk204k", // "pv8y60vp"
  apiVersion: "2022-11-16", // "2022-11-16"
  useCdn: typeof document !== 'undefined',
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);
