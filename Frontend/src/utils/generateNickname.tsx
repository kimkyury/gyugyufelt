const adjectives = [
    '귀여운', '부끄러운', '용감한', '새침한', '엉뚱한', '명랑한', '말없는', '수줍은'
];

const animals = [
    '펭귄', '토끼', '고양이', '다람쥐', '강아지', '양', '고슴도치', '햄스터'
];


export function generateAnonymousNickname(): string {
    const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
    const num = Math.floor(Math.random() * 100).toString().padStart(2, '0');

    return `${random(adjectives)} ${random(animals)}${num}`;
}
