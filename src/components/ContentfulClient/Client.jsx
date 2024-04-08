import * as contentful from 'contentful';

const client = contentful.createClient({
    space: 'd6annblvb5fr',
    environment: 'master', 
    accessToken: 'Kd4rwoRDmJcJkY3uSJE2PTu29mH1F-ocq4JR1Vfo0dU'
});

export default client;