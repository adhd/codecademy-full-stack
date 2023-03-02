/*
Project name: Mysterious Organism
Context: You’re part of a research team that has found a new mysterious organism at the bottom of 
the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and 
finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it 
mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, 
P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and 
expensive. Your job is to create objects that simulate the DNA of P. aequor for your research 
team to study.
*/

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

/**
 * Create a factory function that generates pAequor organisms.
 * @function        pAequorFactory
 * @param   [num]   specimenNum       - a unique identifier number for the organism
 * @param   [arr]   dna               - an array of 15 DNA bases that represent the organism's DNA sequence
 * @returns [obj]                     - an object containing properties specimenNum and dna, corresponding to the parameters provided
 */

const pAequorFactory = (orgNum, baseArr) => {
  return {
    specimenNum: orgNum,
    dna: baseArr,
    mutate() {
      const randIndex = Math.floor(Math.random() * 15);
      const allBases = ['A', 'T', 'C', 'G'];
      const pickBase = allBases.filter(base => allBases.includes(base));

      this.dna[randIndex] = pickBase[Math.floor(Math.random() * 3)] ;
      return this.dna;
    },
    compareDNA(otherPA) {
      const totalElems = this.dna.length;
      let counter = 0

      for (let i = 0; i <= totalElems - 1; i++) {
        if (this.dna[i] == otherPA.dna[i]) {
          counter += 1;
        }
      }

      const pctSimilarity = Math.floor((counter / totalElems) * 100);

        return `specimen #1 and specimen #2 have ${pctSimilarity}% DNA in common`
    },
    willLikelySurvive() {
      let countCG = 0;
      const totalElems = this.dna.length;

      for (let i = 0; i < totalElems; i++) {
        if (this.dna[i] == 'C' || this.dna[i] == 'G') {
          countCG += 1;
        }
      }
      if (countCG/totalElems >= 0.60) {
        return true;
      } else {
        return false;
      }
    }
    }
  }

// fact1 = pAequorFactory(3, ['C','T','A','G','C','T','A','G','C','T','A','G','C','T','A']);
// fact2 = pAequorFactory(3, ['A', 'T', 'A', 'G','C', 'T', 'A', 'G','C', 'T', 'A', 'G','C', 'T', 'A']);

// console.log(fact1.compareDNA(fact2));
// console.log(fact2.willLikelySurvive());

// creating 30 instances of pAequor that can survive in their natural environment
const study30pAequor = [];
let counter = 1;

for (i = 0; i <= 29; i++) {
  study30pAequor[i] = pAequorFactory(i, mockUpStrand());

  while (!study30pAequor[i].willLikelySurvive()) {
    study30pAequor[i] = pAequorFactory(i, mockUpStrand());
  }
}
