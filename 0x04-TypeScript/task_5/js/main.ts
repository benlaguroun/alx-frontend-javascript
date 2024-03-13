interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// Example usage:
const mathMajor1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const mathMajor2: MajorCredits = { credits: 4, brand: "MajorCredits" };
console.log(sumMajorCredits(mathMajor1, mathMajor2)); // Output: { credits: 7, brand: "MajorCredits" }

const artMinor1: MinorCredits = { credits: 2, brand: "MinorCredits" };
const artMinor2: MinorCredits = { credits: 3, brand: "MinorCredits" };
console.log(sumMinorCredits(artMinor1, artMinor2)); // Output: { credits: 5, brand: "MinorCredits" }

