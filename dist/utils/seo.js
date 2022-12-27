const BASE_API = 'https://<<<<<MY_URL>>>>>/wp-json/wp/v2/';
const axios = require('axios');

const isPathToSeo = (url) => {
    const splited = url.split('/');

    if (splited.length > 2) {
        let type = splited[1];
        const slug = splited[2];

        if (type === 'posts') {
            return { type, slug };
        }
    }

    return false;
};

const getMeta = async (type, slug) => {
    const { data } = await axios.get(`${BASE_API}${type}?slug=${slug}`);

    return data[0];
};

const seo = async (url) => {
    const { type, slug } = isPathToSeo(url);

    if (type && slug) {
        const { yoast_head_json } = await getMeta(type, slug);

        const { title, og_title, og_description, og_url, og_image, twitter_card, twitter_creator } =
            yoast_head_json;

        return {
            title,
            og_title,
            og_description,
            og_url,
            og_image: og_image[0].url,
            twitter_card,
            twitter_creator,
        };
    }
};

module.exports = { seo, isPathToSeo };
