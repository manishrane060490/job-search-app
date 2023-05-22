export const checkImageUrl = (url) => {
    if(!url) return false
    else {
        const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpeg|jpg|bmp|gif|webp)$','i');

        return pattern.test(url);
    }
}