import dynamic from 'next/dynamic';

const RemoteLuigi = dynamic(() => import('luigi/luigi'), { ssr: false });

export default RemoteLuigi;
