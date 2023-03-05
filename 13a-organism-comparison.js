/*
Project name: Mysterious Organism
Context: You’re part of a research team that has found a new mysterious organism at the bottom of 
the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and 
finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it 
mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, 
P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and 
expensive. Your job is to create objects that simulate the DNA of P. aequor for your research 
team to study.


Extension: Creating a .compareDNA() method to find the two most related instances of pAequor.
*/

function mostSimilar(dnaArr) {
  // keep track of the most similar strings and their indices
  let maxSimilarity = 0;
  let maxIndices = []; // indices of most similar strings, can be more than 2

  // hash map to store dna strands (strings) and their corresponding indices
  const dnaMap = new Map();
  for (let i = 0; i < dnaArr.length; i++) {
    dnaMap.set(dnaArr[i], i);
  }

  // iterate over each strand position in the dna strings
  for (let i = 0; i < dnaArr[0].length; i++) {
    // create hash map to store the frequency of each character at this position
    // hash map created for each position
    const strandMap = new Map();

    // iterate over dna objects in dnaArr ... calculates similarity score by counting the number of characters that match with the characters in strandMap at the same position
    // the similarity score is updated as the function iterates over the strings
    for (let j = 0; j < dnaArr.length; j++) {
      const strand = dnaArr[j][i]; 
      if (!strandMap.has(strand)) {
        strandMap.set(strand, 1);
      } else {
        strandMap.set(strand, strandMap.get(strand) + 1);
      }
    }

    // iterate over each dna stand (character) in the hash map and calculate their similarity score
    strandMap.forEach((value, key) => {
      let similarity = 0;
      // for each dna object (string, check and increment similarity score)
      for (let j = 0; j < dnaArr.length; j++) {
        if (dnaArr[j][i] === key) {
          similarity += 1;
        }
      }

      // update maxSimilarity and maxIndices if the current similarity score is higher
      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        maxIndices = [dnaMap.get(key)];
      } else if (similarity === maxSimilarity) {
        maxIndices.push(dnaMap.get(key));
      }
    });
  } // end for outer loop (iterating over strands)
  return maxIndices;
}
