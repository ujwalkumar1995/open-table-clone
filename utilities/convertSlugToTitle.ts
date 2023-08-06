export const convertSlugToTitle = (slug: string) => {
    return slug.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.substring(1))
            .join(' ');
}