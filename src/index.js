import { Server } from 'proxy-chain';

const server = new Server({ port: 8000 });

await server.listen();
console.log(`Proxy server is listening on port ${server.port}`);
