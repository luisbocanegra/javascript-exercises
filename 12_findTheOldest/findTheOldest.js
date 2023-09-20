function getAge(person) {
  if (!person["yearOfDeath"]) {
    return (new Date).getFullYear() - person["yearOfDeath"]
  } else {
    return person["yearOfBirth"] - person["yearOfDeath"]
  }
}

const findTheOldest = function (people = []) {
  people.sort((a, b) => {
    return (getAge(a) > getAge(b)) ? 1 : -1;
  })
  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
