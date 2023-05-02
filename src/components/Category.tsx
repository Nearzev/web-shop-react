import  { useState } from 'react'

type CategoriesType = {
    key: 'all' | 'sofa' | 'light' | 'chairs' | 'tables',
    name: 'Всё' | 'Диваны' | 'Лампы' | 'Стулья' | 'Столы',
}

type CategoriesProps = {
    chooseCategory: (category: string) => void,
}

const Categories:CategoriesType[] = [
    {
        key: 'all',
        name: 'Всё',
    },
    {
        key: 'sofa',
        name: 'Диваны',        
    },
    {
        key: 'light',
        name: 'Лампы',       
    },
    {
        key: 'chairs',
        name: 'Стулья',
    },
    {
        key: 'tables',
        name: 'Столы',
    }
]



const Category = (props: CategoriesProps) => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleCategoryClick = (categoryKey: string) => {
        setSelectedCategory(categoryKey);
        props.chooseCategory(categoryKey);
    };

return (
    <div className="categories">
        {Categories.map((category) => (
            <div
                className={selectedCategory === category.key ? 'active' : 'unActive'}
                key={category.key}
                onClick={() => handleCategoryClick(category.key)}>
                    {category.name}
            </div>
    ))}
    </div>
);
};

export default Category
