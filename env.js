const variables = {
    development: {
        googleApiKey: 'AIzaSyAJU7VqDFi5I1KG4Zly5pmg8TnJaqzTIp8'
    },
    production: {
        googleApiKey: 'XYZ'
    }
};

const getEnvVariables = () => {
    if (__DEV__) {
        return variables.development; 
    }
    return variables.production; 
};

export default getEnvVariables;
