import dynamic from 'next/dynamic';

const RemoteMario = dynamic(() => import('mario/mario'), { ssr: false });

export default RemoteMario;
