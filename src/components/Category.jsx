import { ReactPropTypes } from 'react';

const Category = ({ id, title }) => {
    return (
        <div key={id}>{title}</div>
    )
};

Category.propTypes = {
    id: ReactPropTypes.number,
    title: ReactPropTypes.string
}
export default Category