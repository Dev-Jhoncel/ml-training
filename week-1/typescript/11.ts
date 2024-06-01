/**
 * Write a function that converts HTML entities to their corresponding characters.
 * @param {string} str The string to convert.
 * @return {string} The string with HTML entities converted to their corresponding characters.
 */

// ENTITY OBJECT
const entities = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};
const convertHtmlEntities = (str:string) => {
  let new_str = [...str];
  let convert_html = "";

  for(let entity of new_str){
    convert_html += (typeof (entities as any)[entity] === "undefined") ? entity : (entities as any)[entity];
  }
  
  return convert_html
 }
 console.log(convertHtmlEntities(`&&&<asdasd'"`));