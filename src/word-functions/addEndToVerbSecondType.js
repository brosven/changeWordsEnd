function addEndToSecondType(verb, pronoun) {
  const lettersAlternationSecondType = new Map([
    ["с", "ш"],
    ["х", "ш"],
    ["д", "ж"],
    ["з", "ж"],
    ["м", "мл"],
    ["в", "вл"],
    ["п", "пл"],
    ["б", "бл"],
    ["м", "мл"],
  ]);

  const hissingLetters = new Set(["ш", "щ", "ж", "ч"]);

  let modifVerb = verb.toLowerCase().slice(0, -3);
  let lastModifVerbLetter = modifVerb.slice(modifVerb.length - 1);
  let newModifVerb = false;
  let newLastModifVerbLetter;

  if (lettersAlternationSecondType.get(lastModifVerbLetter)) {
    const changedLetter = lettersAlternationSecondType.get(lastModifVerbLetter);

    newModifVerb = modifVerb.substring(0, modifVerb.length - 1) + changedLetter;
    newLastModifVerbLetter = changedLetter;
  }

  if (verb === "гнать") {
    modifVerb = "гон";
  }

  switch (pronoun) {
    case "я":
      return newModifVerb
        ? hissingLetters.has(newLastModifVerbLetter)
          ? newModifVerb + "у"
          : newModifVerb + "ю"
        : hissingLetters.has(lastModifVerbLetter)
        ? modifVerb + "у"
        : modifVerb + "ю";
    case "ты":
      return modifVerb + "ишь";
    case "он":
    case "она":
    case "оно":
      return modifVerb + "ит";
    case "мы":
      return modifVerb + "им";
    case "вы":
      return modifVerb + "ите";
    case "они":
      return hissingLetters.has(lastModifVerbLetter)
        ? modifVerb + "ат"
        : modifVerb + "ят";
    default:
      return "Неправильное местоимение";
  }
}
export default addEndToSecondType;
