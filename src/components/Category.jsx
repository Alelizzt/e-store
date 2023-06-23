import { PropTypes } from 'prop-types';

const Category = ({ id, title, onCategoryClick }) => {
    return (
        <div key={id} onClick={() => onCategoryClick(id)}>{title}</div>
    )
}

Category.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    onCategoryClick: PropTypes.func
}
export default Category