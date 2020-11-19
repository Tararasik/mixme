export const slugify = (title: string): string =>
  title.toLowerCase().replace(/ /g, "-");

/**
 * Receives `?par1=val1&par2=val2`
 * Returns `{ par1: "val1", par2: "val2" }`
 */
export const parseQueryString = (qs: string): { [key: string]: string } => {
  const query: { [key: string]: string } = {};
  const pairs = (qs[0] === "?" ? qs.substr(1) : qs).split("&");

  for (let i = 0; i < pairs.length; i += 1) {
    const [key, value] = pairs[i].split("=");
    if (key) {
      query[decodeURIComponent(key)] = decodeURIComponent(value || "");
    }
  }
  return query;
};
