import * as pulumi from "@pulumi/pulumi";
import * as cloud from "@pulumi/cloud";

let api = new cloud.API("pulumi-test");

// Change path to trigger update of aws:apigateway:RestApi
api.get('/get', (req, res) => {
    res.json({ method: 'GET' });
});

api.post('/post', (req, res) => {
    res.json({ method: 'POST' });
});

api.put('/put', (req, res) => {
    res.json({ method: 'PUT' });
});

// Also applies to adding or removing static routes
// api.static('/', 'static');

let deployment = api.publish();
export let url = deployment.url;
