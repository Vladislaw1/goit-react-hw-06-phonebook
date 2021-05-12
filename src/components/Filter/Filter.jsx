import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

const Filter = ({ filter,onChange }) => {
    return  (<>
        <label>
            Фильтр по имени!!!
            <input type="text" value={filter}  onChange={onChange} />
        </label>
    </>
    )
};

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChange: ({target}) => {
            dispatch(actions.filterContact(target.value))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Filter)