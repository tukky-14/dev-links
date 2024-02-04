import auto_rename_tag from './img/auto_rename_tag.png';
import aws_toolkit from './img/aws_toolkit.png';
import bracket_pair_colorizer from './img/bracket_pair_colorizer.png';
import code_spell_checker from './img/code_spell_checker.png';
import colonize from './img/colonize.png';
import git_graph from './img/git_graph.png';
import indent_rainbow from './img/indent_rainbow.png';
import live_server from './img/live_server.png';
import material_icon_theme from './img/material_icon_theme.png';
import path_intellisense from './img/path_intellisense.png';
import prettier from './img/prettier.png';
import rest_client from './img/rest_client.png';
import remote_ssh from './img/remote_ssh.png';
import vscode_input_sequence from './img/vscode_input_sequence.png';
import japanese_proofreading from './img/japanese_proofreading.png';
import project_manager from './img/project_manager.png';
import import_cost from './img/import_cost.png';
import markdown_all_in_one from './img/markdown_all_in_one.png';
import todo_tree from './img/todo_tree.png';

export const vscodeSites = [
    {
        title: 'Auto Rename Tag',
        url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag',
        image: auto_rename_tag,
        description:
            'ペアになっている HTML/XML タグの名前を自動的に変更。閉じタグの修正に時間を取られることはなくなる。',
    },
    {
        title: 'AWS Toolkit',
        url: 'https://marketplace.visualstudio.com/items?itemName=AmazonWebServices.aws-toolkit-vscode',
        image: aws_toolkit,
        description: 'VSCode上からAWSのサービスにアクセスできる。AWSをよく使用する方にとって有益。',
    },
    {
        title: 'Bracket Pair Colorizer',
        url: 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2',
        image: bracket_pair_colorizer,
        description: '対応するブラケットを色で識別できるようになる。深いネストに戸惑いがなくなる。',
    },
    {
        title: 'Code Spell Checker',
        url: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker',
        image: code_spell_checker,
        description: 'スペルミスを検出できる。スペルミス探しに時間をかけることがなくなる。',
    },
    {
        title: 'Colonize',
        url: 'https://marketplace.visualstudio.com/items?itemName=vmsynkov.colonize',
        image: colonize,
        description:
            '「Shift + Enter」でセミコロンが打てる、それだけの機能。それだけの機能が強い。',
    },
    {
        title: 'Git Graph',
        url: 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph',
        image: git_graph,
        description: 'Git履歴をグラフで見れる。見やすい。',
    },
    {
        title: 'indent-rainbow',
        url: 'https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow',
        image: indent_rainbow,
        description:
            'インデントを色で識別できるようになる。これもまた。深いネストに戸惑いがなくなる。',
    },
    {
        title: 'Live Server',
        url: 'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
        image: live_server,
        description:
            '変更したソースの内容をブラウザ側が自動更新。リアルタイムで変更点を確認できる。',
    },
    {
        title: 'Material Icon Theme',
        url: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
        image: material_icon_theme,
        description: 'ファイルやフォルダにアイコンをつけて見やすくする。サイドバーが楽しくなる。',
    },
    {
        title: 'Path Intellisense',
        url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
        image: path_intellisense,
        description: 'スラッシュを入力するとパスを自動で検出して教えてくれる。便利。',
    },
    {
        title: 'Prettier',
        url: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        image: prettier,
        description: '言わずと知れたフォーマットツール。コードの整形はこいつにおまかせ。',
    },
    {
        title: 'REST Client',
        url: 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client',
        image: rest_client,
        description:
            '簡単なREST通信をVSCode上で試せる。ちょっとした確認なら別アプリ使わずにこちらで。',
    },
    {
        title: 'Remote ssh',
        url: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh',
        image: remote_ssh,
        description:
            'サーバーへのSSH接続をVSCode上から行う。サーバのフォルダ構成をVSCode上で見れると作業が捗る。',
    },
    {
        title: 'vscode-input-sequence',
        url: 'https://marketplace.visualstudio.com/items?itemName=tomoki1207.vscode-input-sequence',
        image: vscode_input_sequence,
        description: '連番を生成する。連番が欲しいときって結構あるんですよね。',
    },
    {
        title: 'テキスト校正くん',
        url: 'https://marketplace.visualstudio.com/items?itemName=ICS.japanese-proofreading',
        image: japanese_proofreading,
        description:
            '日本語のテキストを自動で校正。プログラムソースだけでなく、普通のテキストを書く時にもVSCodeを使おう。',
    },
    {
        title: 'Project Manager',
        url: 'https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager',
        image: project_manager,
        description:
            'よく使うプロジェクトを登録してサイドバーから簡単に開ける。複数のプロジェクト管理・切替が楽になる。タグ付けも可能。',
    },
    {
        title: 'Import Cost',
        url: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
        image: import_cost,
        description:
            'JavaScriptなどでImportしたライブラリのサイズを表示。重くなりすぎないようにしよう。',
    },
    {
        title: 'Markdown All in One',
        url: 'https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one',
        image: markdown_all_in_one,
        description:
            'VSCodeでMarkdownを書くのが便利になる拡張機能。マークダウン記法のショートカットやHTML出力などが可能。',
    },
    {
        title: 'Todo Tree',
        url: 'https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree',
        image: todo_tree,
        description:
            '"TODO"や"FIXME"などのコメントをつけた箇所にサイドバーからアクセスできる。横断検索せずに見やすく管理。',
    },
];
