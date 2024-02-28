export default function listaRand(
  cantListas: number,
  largoListas: number,
  numMax: number
) {
  let listaRand = [];
  let listaAuxRand: number[] = [];
  let numRand = 0;
  for (let x = 0; x < cantListas; x++) {
    listaAuxRand = [];
    while (listaAuxRand.length < largoListas) {
      numRand = Math.trunc(Math.random() * 10);
      if (numRand < numMax) {
        listaAuxRand.push(numRand);
      }
    }
    listaRand.push(listaAuxRand);
  }
  return listaRand;
}
