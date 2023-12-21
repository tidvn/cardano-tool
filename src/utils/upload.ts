import axios from 'axios';
const apikey = ""
export async function uploadImageToIPFS(image: any) {


    const formData = new FormData();
    formData.append('file', image);
    const post = await axios.post(
        `https://api.nft.storage/upload`,
        formData,
        {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${apikey}`,
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    return { src: `ipfs://${post.data.value.cid}`, name:post.data.value.files[0].name ,  mediaType: post.data.value.files[0].type };
}
export async function uploadMetadataToIPFS(metadata: any) {


    const formData = new FormData();
    formData.append('meta', JSON.stringify(metadata));
    const post = await axios.post(
        `https://api.nft.storage/store`,
        formData,
        {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${apikey}`,
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    return post.data.value.url;
}