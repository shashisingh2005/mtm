
const fetchData = async (url:any, params:Object) => {
    try {
        const data = await fetch(url);
        const json = await data.json();
        return json;
    } catch (error) {
        return {"Error": error};
    }
}
export default fetchData;