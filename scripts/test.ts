import { exec } from "shelljs";
import fetch from "node-fetch";

const stackOutput = exec('pulumi stack output --json');

const outputJson = JSON.parse(stackOutput);

const url = outputJson.url;

const testMethod = async (method: 'GET' | 'POST' | 'PUT') => {
    try {
        const response = await fetch(url + method.toLowerCase(), {method});
        return await response.json();
    } catch (err) {
        return err;
    }
}

const testMethods = async () => {
    const get = await testMethod('GET');
    const post = await testMethod('POST');
    const put = await testMethod('PUT');
    return { get, post, put };
}

testMethods().then(JSON.stringify).then(console.log);