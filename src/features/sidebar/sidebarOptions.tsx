import home from './img/home.svg';
import learning from './img/learning.svg';
import article from './img/article.svg';
import useful from './img/useful.svg';
import material from './img/material.svg';
import other from './img/other.svg';

const menuList = [
    { name: 'ホーム', link: '/', icon: home },
    { name: '学習', link: '/learning', icon: learning },
    { name: '記事', link: '/article', icon: article },
    { name: '便利', link: '/useful', icon: useful },
    { name: '素材', link: '/material', icon: material },
    { name: 'その他', link: '/other', icon: other },
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
