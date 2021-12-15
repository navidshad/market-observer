import undici, { Dispatcher } from 'undici';
import { URL, UrlObject } from 'url';

type Url = string | URL | UrlObject;

export const post = (url: Url, body: any) => {
	return undici.request(url, {
		method: 'POST',
		body: body,
	}).then(handelBody)
}

export const get = (url: Url) => {
	return undici.request(url, {
		method: 'GET',
	}).then(handelBody)
}

function handelBody(res: Dispatcher.ResponseData) {
	if (!(res.statusCode == 200 || res.statusCode == 200))
		throw res;

	return res.body.json();
}
