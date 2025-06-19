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

 const convertHtmlEntities = (str) => {
  let new_str = [...str];
  let convert_html = "";

  for(entity of new_str){
    convert_html += (typeof entities[entity] === "undefined") ? entity : entities[entity];
  }
  
  return convert_html
 }
 console.log(convertHtmlEntities(`&&&<asdasd'"`));