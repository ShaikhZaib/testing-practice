export default function capitalize(str) {
  if (str === "") return "";

  const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalizedStr;
}
