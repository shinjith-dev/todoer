export const toSentenceCase = (str: string): string => {
  const s =
    (str &&
      str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
        )
        ?.join(" ")) ||
    "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
