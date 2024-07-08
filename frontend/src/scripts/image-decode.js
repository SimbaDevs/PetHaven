/**
 * Converts a base64 encoded string to a Blob object.
 *
 * @param {string} base64_encoded_str - The base64 encoded string.
 * @returns {Blob} - The Blob object representing the decoded image.
 */
function base64ToBlob(base64_encoded_str) {
    const byteCharacters = atob(base64_encoded_str);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray], { type: "image/jpeg" });
}

/**
 * Converts a base64 encoded image string to a JPEG image URL and sets it using the provided setImageFunc.
 *
 * @param {string} image - The base64 encoded image string.
 * @param {Function} setImageFunc - The function to set the image URL.
 * @returns {Function} - A cleanup function to revoke the object URL.
 */
function imageStrToJpg(image, setImageFunc) {
    const blob = base64ToBlob(image);
    const url = URL.createObjectURL(blob);

    setImageFunc(url);

    return () => URL.revokeObjectURL(url);
}

export { base64ToBlob, imageStrToJpg }
