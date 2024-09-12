function getImageUrl(name: string, isModified: boolean) {
    const folder = isModified ? 'modified' : 'original';
    return new URL(`../assets/img/${folder}/${name}.jpeg`, import.meta.url).href;
}

export { getImageUrl };