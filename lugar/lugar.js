const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const codedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${codedUrl}.,+80000+${codedUrl}?json=1`
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}