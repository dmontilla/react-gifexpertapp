export const getGifts = async ( category ) => {
    const apiKey = 'UWIbrXo2ASgpgB1Nz7uj5zQvZxHZJHv3';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&`;

    const resp = await fetch(url + `q=${encodeURI(category)}&limit=10`);
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}