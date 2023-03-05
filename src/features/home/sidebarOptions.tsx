import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import LabelTwoToneIcon from '@mui/icons-material/LabelTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';

export const SidebarOptions = () => {
    return (
        <>
            <a href="/" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <HomeTwoToneIcon className="h-4" />
                <span className="pl-2">ホーム</span>
            </a>
            <a href="/language" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <LanguageTwoToneIcon className="h-4" />
                <span className="pl-2">言語</span>
            </a>
            <a href="/learning" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <SchoolTwoToneIcon className="h-4" />
                <span className="pl-2">学習</span>
            </a>
            <a href="/article" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <ArticleTwoToneIcon className="h-4" />
                <span className="pl-2">記事</span>
            </a>
            <a href="/useful" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <LabelTwoToneIcon className="h-4" />
                <span className="pl-2">便利</span>
            </a>
            <a href="/material" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <PanoramaTwoToneIcon className="h-4" />
                <span className="pl-2">素材</span>
            </a>
            <a href="/other" className="pl-4 py-2 flex items-center hover:bg-gray-100">
                <MoreHorizTwoToneIcon className="h-4" />
                <span className="pl-2">その他</span>
            </a>
        </>
    );
};
