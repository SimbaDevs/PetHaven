export default function base64ToBlob(base64_encoded_str) {
    const byteCharacters = atob(base64_encoded_str);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    return new Blob([byteArray], { type: "image/jpeg" });
}
