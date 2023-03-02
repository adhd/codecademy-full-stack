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
