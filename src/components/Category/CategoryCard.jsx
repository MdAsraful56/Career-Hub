import PropTypes from "prop-types";

const CategoryCard = ({ list }) => {
    const {logo, category_name, availability } = list;
    console.log(list)
    
    return (
        <div className="bg-[#7E90FE0D] text-left space-y-4 p-5">
            <img src={logo } alt="" />
            <div className="">
                <h3 className="text-base font-semibold">{category_name }</h3>
                <p className="text-sm text-[#A3A3A3] ">{availability }</p>
            </div>
        </div>
    );
};

export default CategoryCard;

CategoryCard.propTypes = {
    list: PropTypes.object
}