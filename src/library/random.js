const adjectives = ['Lijepa', 'Brza', 'Pametna'];
const nouns = ['ptica', 'vjeverica', 'mačka'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}