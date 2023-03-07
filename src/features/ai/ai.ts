import chatgpt from './img/chatgpt.png';
import toolscout from './img/toolscout.png';
import stablediffusion from './img/stablediffusion.png';
import lexica from './img/lexica.png';
import playgroundai from './img/playgroundai.png';

export const aiSites = [
    {
        title: 'ChatGPT',
        url: 'https://openai.com/blog/chatgpt',
        image: chatgpt,
        description:
            '人間のテキストを学習し、それに基づいて新しいテキストを生成する人工知能モデル。',
    },
    {
        title: 'Stable Diffusion',
        url: 'https://stablediffusionweb.com/',
        image: stablediffusion,
        description:
            '入力されたテキストをもとに画像を生成する「訓練済のAIモデル（Diffusion Model）」を搭載した画像生成AI。',
    },
    {
        title: 'Lexica',
        url: 'https://lexica.art/',
        image: lexica,
        description: '画像生成AIであるStable Diffusionを使って生成された画像を検索できるサービス。',
    },
    {
        title: 'PlaygroundAI',
        url: 'https://playgroundai.com/',
        image: playgroundai,
        description: '指示したテキストに従ってAIが画像を生成。すでにある画像に指示することも可能。',
    },
    {
        title: 'ToolScout',
        url: 'https://toolscout.ai/',
        image: toolscout,
        description: 'AIをベースとした様々なツールを探せるAI系アプリのコレクションサイト。',
    },
];
