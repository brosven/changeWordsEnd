import findTypeOfIndefiniteVerb from "./findTypeOfindefiniteVerb.js";
import addEndToFirstType from "./addEndToVerbFirstType.js";
import addEndToSecondType from "./addEndToVerbSecondType.js";

function changeVerbEnd(verb, pronoun) {
  const currentVerb = verb.toLowerCase();
  const currentPronoun = pronoun.toLowerCase();

  if (findTypeOfIndefiniteVerb(currentVerb) === "firstType") {
    return addEndToFirstType(currentVerb, currentPronoun);
  } else if (findTypeOfIndefiniteVerb(currentVerb) === "secondType") {
    return addEndToSecondType(currentVerb, currentPronoun);
  }

  return "Введите глагол другой формы";
}

export default changeVerbEnd;
