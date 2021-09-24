function addEndToFirstType(verb, pronoun) {
  const lettersAlternationFirstType = new Map([
    ["с", "ш"],
    ["х", "ш"],
    ["з", "ж"],
    ["к", "ч"],
  ]);

  const hissingLetters = new Set(["ш", "щ", "ж", "ч"]);

  let modifVerb = verb.toLowerCase().slice(0, -3);
  let endTypeLetter = verb.slice(verb.length - 3, verb.length - 2);
  let lastModifVerbLetter = modifVerb.slice(modifVerb.length - 1);

  let newModifVerb = false;
  let newLastModifVerbLetter;

  if (lettersAlternationFirstType.get(lastModifVerbLetter)) {
    const changedLetter = lettersAlternationFirstType.get(lastModifVerbLetter);

    newModifVerb = modifVerb.substring(0, modifVerb.length - 1) + changedLetter;
    newLastModifVerbLetter = changedLetter;
  }

  if (verb === "брить" || verb === "стелить") {
    switch (pronoun) {
      case "я":
        return verb === "брить" ? modifVerb + "ею" : modifVerb + "ю";
      case "ты":
        return verb === "брить" ? modifVerb + "еешь" : modifVerb + "ешь";
      case "он":
      case "она":
      case "оно":
        return verb === "брить" ? modifVerb + "еет" : modifVerb + "ет";
      case "мы":
        return verb === "брить" ? modifVerb + "еем" : modifVerb + "ем";
      case "вы":
        return verb === "брить" ? modifVerb + "еете" : modifVerb + "ете";
      case "они":
        return verb === "брить" ? modifVerb + "еют" : modifVerb + "ют";
      default:
        return "Неправильное местоимение";
    }
  } else if (
    endTypeLetter !== "у" &&
    !lettersAlternationFirstType.get(lastModifVerbLetter)
  ) {
    switch (pronoun) {
      case "я":
        return endTypeLetter === "о"
          ? modifVerb + "ю"
          : modifVerb + endTypeLetter + "ю";
      case "ты":
        return endTypeLetter === "о"
          ? modifVerb + "ешь"
          : modifVerb + endTypeLetter + "ешь";
      case "он":
      case "она":
      case "оно":
        return endTypeLetter === "о"
          ? modifVerb + "ет"
          : modifVerb + endTypeLetter + "ет";
      case "мы":
        return endTypeLetter === "о"
          ? modifVerb + "ем"
          : modifVerb + endTypeLetter + "ем";
      case "вы":
        return endTypeLetter === "о"
          ? modifVerb + "ете"
          : modifVerb + endTypeLetter + "ете";
      case "они":
        return endTypeLetter === "о"
          ? modifVerb + "ют"
          : modifVerb + endTypeLetter + "ют";
      default:
        return "Неправильное местоимение";
    }
  } else if (
    endTypeLetter === "у" ||
    lettersAlternationFirstType.get(lastModifVerbLetter)
  ) {
    switch (pronoun) {
      case "я":
        return hissingLetters.has(newLastModifVerbLetter)
          ? newModifVerb + "у"
          : modifVerb + "у";
      case "ты":
        return hissingLetters.has(newLastModifVerbLetter)
          ? newModifVerb + "ешь"
          : modifVerb + "ешь";
      case "он":
      case "она":
      case "оно":
        return hissingLetters.has(newLastModifVerbLetter)
          ? newModifVerb + "ет"
          : modifVerb + "ет";
      case "мы":
        return hissingLetters.has(newLastModifVerbLetter)
          ? newModifVerb + "ем"
          : modifVerb + "ем";
      case "вы":
        return hissingLetters.has(newLastModifVerbLetter)
          ? newModifVerb + "ете"
          : modifVerb + "ете";
      case "они":
        return hissingLetters.has(newLastModifVerbLetter)
          ? newModifVerb + "ут"
          : modifVerb + "ут";
      default:
        return "Wrong pronoun";
    }
  }
}
export default addEndToFirstType;
