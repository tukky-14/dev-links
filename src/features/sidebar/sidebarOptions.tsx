import home from './img/home.svg';
import language from './img/language.svg';
import learning from './img/learning.svg';
import article from './img/article.svg';
import useful from './img/useful.svg';
import material from './img/material.svg';
import other from './img/other.svg';

export const SidebarOptions = () => {
    return (
        <>
            <a href="/" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <img className="h-4" src={home} alt="" />
                <span className="pl-2">ホーム</span>
            </a>
            <a href="/language" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <img className="h-4" src={language} alt="" />
                <span className="pl-2">言語</span>
            </a>
            <a href="/learning" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <img className="h-4" src={learning} alt="" />
                <span className="pl-2">学習</span>
            </a>
            <a href="/article" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <img className="h-4" src={article} alt="" />
                <span className="pl-2">記事</span>
            </a>
            <a href="/useful" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <img className="h-4" src={useful} alt="" />
                <span className="pl-2">便利</span>
            </a>
            <a href="/material" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <img className="h-4" src={material} alt="" />
                <span className="pl-2">素材</span>
            </a>
            <a href="/other" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <img className="h-4" src={other} alt="" />
                <span className="pl-2">その他</span>
            </a>
        </>
    );
};
