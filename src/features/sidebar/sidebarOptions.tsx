import home from './icon/home.svg';
import learning from './icon/learning.svg';
import article from './icon/article.svg';
import useful from './icon/useful.svg';
import material from './icon/material.svg';
import ai from './icon/ai.svg';

const menuList = [
    { name: 'ホーム', link: '/', icon: home },
    { name: '学習', link: '/learning', icon: learning },
    { name: '記事', link: '/article', icon: article },
    { name: '便利', link: '/useful', icon: useful },
    { name: '素材', link: '/material', icon: material },
    { name: 'AI関連', link: '/ai', icon: ai },
];

export const SidebarOptions = () => {
    return (
        <>
            {menuList.map(({ name, link, icon }, index) => (
                <a
                    href={link}
                    className="pl-4 py-2 flex items-center hover:bg-gray-100"
                    key={index}
                >
                    <img className="h-4" src={icon} alt={`${name}のアイコン画像`} />
                    <span className="pl-2">{name}</span>
                </a>
            ))}
        </>
    );
};
