function findTypeOfIndefiniteVerb(verb) {
  const verbEnd = verb.slice(verb.length - 3);
  const secondTypeEnds = ["ить"];
  const firstTypeEnds = ["ать", "оть", "уть", "еть"];
  const exceptionWordsFirstType = ["брить", "стелить"];
  const exceptionWordsSecondType = [
    "дышать",
    "держать",
    "гнать",
    "ненавидеть",
    "слышать",
    "вертеть",
    "смотреть",
    "видеть",
    "обидеть",
    "терпеть",
    "зависеть",
  ];

  if (exceptionWordsSecondType.includes(verb)) {
    return "secondType";
  } else if (exceptionWordsFirstType.includes(verb)) {
    return "firstType";
  } else if (
    secondTypeEnds.includes(verbEnd) &&
    !exceptionWordsFirstType.includes(verb) &&
    verb.length > 3
  ) {
    return "secondType";
  } else if (
    firstTypeEnds.includes(verbEnd) &&
    !exceptionWordsSecondType.includes(verb) &&
    verb.length > 3
  ) {
    return "firstType";
  }
  return "this is not a indefinite verb";
}

export default findTypeOfIndefiniteVerb;
