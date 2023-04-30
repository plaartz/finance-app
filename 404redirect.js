const pathSeg = 1;
const pathSegmentsToKeep = 0;

let l = window.location;
l.replace(
	l.protocol +
		'//' +
		l.hostname +
		(l.port ? ':' + l.port : '') +
		l.pathname
			.split('/')
			.slice(0, 1 + pathSegmentsToKeep)
			.join('/') +
		'/?/' +
		l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
		(l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
		l.hash
);
