export const slugToTitle = (slug) => {
  const exceptions = [
    "a",
    "an",
    "the",
    "and",
    "but",
    "or",
    "for",
    "nor",
    "on",
    "at",
    "to",
    "from",
    "by",
    "with",
  ];
  let words = slug.split("-");
  let titleWords = words.map((word, index) => {
    if (index === 0 || !exceptions.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  let titleString = titleWords.join(" ");
  return titleString;
};
