const findTheOldest = function (array) {
  return array.reduce((oldest, candidate) => {
    const oldestAge =
      oldest.yearOfDeath === undefined
        ? new Date().getFullYear() - oldest.yearOfBirth
        : oldest.yearOfDeath - oldest.yearOfBirth;

    const candidateAge =
      candidate.yearOfDeath === undefined
        ? new Date().getFullYear() - candidate.yearOfBirth
        : candidate.yearOfDeath - candidate.yearOfBirth;

    if (candidateAge > oldestAge) oldest = candidate;

    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
