import chatgpt from './img/chatgpt.png';
import bard from './img/bard.png';
import minigpt from './img/minigpt.png';
import perplexity from './img/perplexity.png';
import phind from './img/phind.png';
import toolscout from './img/toolscout.png';
import futurepedia from './img/futurepedia.png';
import stablediffusion from './img/stablediffusion.png';
import lexica from './img/lexica.png';
import playgroundai from './img/playgroundai.png';
import autodraw from './img/autodraw.png';
import coolgiftideas from './img/coolgiftideas.png';
import hirameki from './img/hirameki.png';
import clipdrop from './img/clipdrop.png';
import v0 from './img/v0.png';
import claude from './img/claude.png';
import copilot from './img/copilot.png';

export const aiSites = [
    {
        title: 'ChatGPT',
        url: 'https://openai.com/blog/chatgpt',
        image: chatgpt,
        description:
            '人間のテキストを学習し、それに基づいて新しいテキストを生成する人工知能モデル。',
    },
    {
        title: 'Bard',
        url: 'https://bard.google.com/',
        image: bard,
        description:
            'Googleが開発した対話型AIのサービス。2024年2月にGemini Proがすべての言語に対応し、機能が大幅アップデートした。',
    },
    {
        title: 'Copilot',
        url: 'https://copilot.microsoft.com/',
        image: copilot,
        description:
            'OpenAIのAPIを利用したMicrosoftの対話型AIのサービス。GPT-4が無料で使用できる。',
    },
    {
        title: 'Claude',
        url: 'https://claude.ai/login?returnTo=%2F',
        image: claude,
        description:
            'Anthropic社が作成したAIチャット。最大100,000トークンのテキスト処理や複数ファイルの同時読み込みが可能で、ChatGPTを上回る性能を発揮すると期待されている。',
    },
    {
        title: 'Perplexity',
        url: 'https://www.perplexity.ai/',
        image: perplexity,
        description:
            'アカウント登録なしで使えるChatGPTライクなAIサービス。レスポンスも早い。解答の根拠にURLを提示してくれるため、調査に向いている。',
    },
    {
        title: 'phind',
        url: 'https://www.phind.com/',
        image: phind,
        description: '開発向けに特化したChatGPTライクなAIサービス。学習が捗る。',
    },
    {
        title: 'MiniGPT',
        url: 'https://minigpt-4.github.io/',
        image: minigpt,
        description:
            '画像を使用して会話できるAIツール。画像の説明やコードの作成、広告文章を考えたりできる。',
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
        title: 'FUTUREPEDIA',
        url: 'https://www.futurepedia.io/',
        image: futurepedia,
        description: '毎日更新される世界中のAIツールがまとまっているサイト。',
    },
    {
        title: 'ToolScout',
        url: 'https://toolscout.ai/',
        image: toolscout,
        description: 'AIをベースとした様々なツールを探せるAI系アプリのコレクションサイト。',
    },
    {
        title: 'AutoDraw',
        url: 'https://www.autodraw.com/',
        image: autodraw,
        description:
            'スマホやパソコンで描いたイラストを人口知能（AI）が判別して、プロが描いたようなイラストに描きなおしてくれるサービス。',
    },
    {
        title: 'Cool Gift Ideas',
        url: 'https://www.coolgiftideas.io/',
        image: coolgiftideas,
        description:
            '入力したテキスト（英語）を解析して、ギフトのアイデアとそのアマゾンのリンクを表示してくれるサービス。',
    },
    {
        title: 'AIひらめきメーカー',
        url: 'https://hirameki.app/',
        image: hirameki,
        description:
            '入力したテキストから無限にアイデアを生成できるサービス。かなりおもしろいです。。',
    },
    {
        title: 'ClipDrop',
        url: 'https://clipdrop.co/',
        image: clipdrop,
        description:
            '選択した部分や背景の削除、画質UP、らくがきから画像の生成など、様々な機能を持った驚きの画像処理サービス。',
    },
    {
        title: 'v0',
        url: 'https://v0.dev/',
        image: v0,
        description:
            'Next.jsの開発元として知られるVercel Labsが提供する生成AIサービス。ユーザーが入力したテキストプロンプトに基づいてWebページのUIを自動生成する。',
    },
];
