import type { CollectionEntry } from "astro:content";
// import { SITE } from "@config";

export const getSortedPosts = (posts: CollectionEntry<"blog">[]) =>
  posts
    .filter(({ data }) => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );




// const getPageNumbers = (numberOfPosts: number) => {
//   const numberOfPages = numberOfPosts / Number(SITE.postPerPage);

//   let pageNumbers: number[] = [];
//   for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
//     pageNumbers = [...pageNumbers, i];
//   }

//   return pageNumbers;
// };

export function formatDate(input: Date | string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}