import undici from 'undici';
import { URL, UrlObject } from 'url';

type Url = string | URL | UrlObject;

export const post = (url: Url, body: any) => {
	return undici.request(url, {
		method: 'POST',
		body: body,
	});
}

export const get = (url: Url) => {
	return undici.request(url, {
		method: 'GET',
	});
}
