const Category = ({href, children, bgColor = "beige"}) => {
    if (href) {
        return (
            <a href={href} className={`category ${bgColor}`}>
                {children}
            </a>
        );
    }

    return (
        <div className={`category ${bgColor}`}>
            {children}
        </div>
    );
}   

export default Category;