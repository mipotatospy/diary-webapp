const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID
const APP_KEY = process.env.REACT_APP_EDAMAM_APP_KEY

export const fetchRecipes = async () => {
    fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(response => {
            if(!response.ok){
                throw new Error('There has been an issue with the fetch call');
            }
            return response.json() ; // Parse the JSON
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

