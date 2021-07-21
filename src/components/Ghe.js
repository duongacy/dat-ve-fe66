import React from 'react';
import {useDispatch} from 'react-redux';
import { chonGhe } from '../redux/actions/datVeAction';

const Ghe = (props) => {
    const dispatch = useDispatch();
    const {item} = props;

    let btnClass = '';
    if (item.daDat) {
        btnClass = 'btn-warning disabled';
    }
    if (item.dangDat) {
        btnClass = 'btn-success';
    }

    const handleChonGhe = () => {
        dispatch(chonGhe(item.soGhe));
    };
    return (
        <div className='col-1 g-1'>
            <button
                className={'w-100 btn btn-secondary rounded-0 ' + btnClass}
                onClick={handleChonGhe}>
                {item.soGhe}
            </button>
        </div>
    );
};

export default Ghe;
